import React from "react";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
const RegistrationPage = () => {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div
        className="card mx-auto"
        style={{
          maxWidth: "400px",
        }}
      >
        <div className="card-header d-flex justify-content-evenly">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style={{ borderRadius: "20px", width: "130px" }}
              >
                Login
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                style={{ borderRadius: "20px", width: "130px" }}
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div className="tab-content card-body" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <Login />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
