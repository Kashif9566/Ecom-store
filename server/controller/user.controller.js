const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const generateToken = require("../config/jwt");

exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    if (!username || !email || !password) {
      console.error("Validation Error:", { username, email, password });
      res.status(400).json({ error: "Please provide all required fields" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
      image,
    });

    if (newUser) {
      res.status(201).json({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        image: image,
        role: newUser.role,
        token: generateToken(newUser.id),
      });
    } else {
      res.status(400).json({ error: "Failed to create user" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ error: "User does not exist" });
      return;
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      image: user.image,
      role: user.role,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
