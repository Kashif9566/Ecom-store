import React from "react";

const Footer = () => {
  return (
    <div>
      <ul>
        <div className="d-flex align-items-center justify-content-between my-4 mx-5">
          <div>
            <p
              style={{
                color: "#1e2d7d ",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Free shipping
            </p>
            <p style={{ color: "#677279", fontSize: "13px" }}>
              Free Shipping On All Order
            </p>
          </div>
          <div>
            <p
              style={{
                color: "#1e2d7d ",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Warranty On Every item
            </p>
            <p style={{ color: "#677279", fontSize: "13px" }}>
              {" "}
              Hours Check Warranty
            </p>
          </div>
          <div>
            <p
              style={{
                color: "#1e2d7d ",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Top-notch support
            </p>
            <p style={{ color: "#677279", fontSize: "13px" }}>
              Tech Staff Is Always Available.
            </p>
          </div>
          <div>
            <p
              style={{
                color: "#1e2d7d ",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              COD Payments
            </p>
            <p style={{ color: "#677279", fontSize: "13px" }}>
              Cash On Delivery Across Pakistan
            </p>
          </div>
        </div>
      </ul>

      <hr />

      <div>
        <ul>
          <div className="d-flex align-items-center justify-content-between mx-3">
            <div>
              <p
                style={{
                  color: "#1e2d7d ",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                ABOUT US
              </p>
              <p style={{ color: "#677279", fontSize: "13px" }}>
                TechShop Brings you premium top <br /> brands from across the
                world providing
                <br /> latest Tech accessories that fit your lifestyle.
              </p>
              <p style={{ color: "#677279", fontSize: "13px" }}>
                © 2023 TechShop.com
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#1e2d7d ",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                CONTACT
              </p>
              <p style={{ color: "#677279", fontSize: "13px" }}>
                <b> Office Timing:</b> <br />
                <span> 12pm to 7pm (Mon-Sat)</span>
                <br />
                <b> Phone:</b> <br />
                <span>(+92)-312-008-2325</span>
                <br />
                <b>Email:</b> <br />
                <span>support@techshop.pk</span>
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#1e2d7d ",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                PAGES
              </p>
              <p style={{ color: "#677279", fontSize: "13px" }}>
                <span> FAQ's</span>
                <br />
                <span> Contact Us</span> <br />
                <span>Privacy Policy</span> <br />
                <span>Refund Policy</span> <br />
                <span> Terms of Service</span> <br />
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#1e2d7d ",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                SOCIALMEDIA
              </p>
              <p style={{ color: "#677279", fontSize: "13px" }}>
                <span>Facebook</span> <br />
                <span>Page Instagram</span>
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
