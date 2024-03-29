import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
function PlanPrice() {
  return (
    <>
    <Navbar/>
    <div style={{ width: "100%", height: "600px", margin: "80px auto" }}>
      <center>
        <h2 style={{ fontSize: "25px", fontWeight: "800" }}>
          Choose a plan that works for you
        </h2>
      </center>
      <center>
        <p style={{ fontSize: "15px", width: "100%", margin: "30px 0px" }}>
          Get an individual plan with features that you need, or create a team
          instead!
        </p>
      </center>
      <div className="price-3">
        <div style={{ textAlign: "center", justifyContent: "center" }}>
          <h2 className="b1">Basic</h2>
          <center>
            <div
              style={{
                width: "50px",
                height: "50px",
                margin: "35px 0px 30px 0px",
              }}
            >
              <img
                src="https://prod.smassets.net/assets/static/images/surveymonkey/favicon-180.png"
                alt="logo"
              />
            </div>
          </center>
          <div>
            <p>Always free</p>
          </div>
          <center>
            <Link to={"/signup"}>
            <div
              style={{
                width: "100px",
                height: "auto",
                padding: "8px",
                borderRadius: "5px",
                backgroundColor: "#31CE78",
                color: "#FCFDFE",
                fontWeight: "600",
                margin: "20px 0px",
                cursor: "pointer",
              }}
            >

                Signup

            </div></Link>
          </center>
          <center>
            <div style={{ width: "200px", padding: "0px 20px" }}>
              <p>
                Send unlimited surveys with up to 10 questions. Response limits
                apply.
              </p>
            </div>
          </center>
        </div>
        <div>
          <h2 className="b2">Individual Advantage</h2>
          <div style={{ textAlign: "center", margin: "-10px 0px 30px 0px" }}>
            <h2 style={{ fontSize: "45px", fontWeight: "bolder" }}>₹1,999</h2>
            <p style={{ margin: "30px 0px 0px 0px" }}>/ month</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>Billed ₹23,988 annually</p>
          </div>
          <center>
            <div
              style={{
                width: "150px",
                height: "auto",
                padding: "8px",
                borderRadius: "5px",
                backgroundColor: "#0D5497",
                color: "#FCFDFE",
                fontWeight: "600",
                margin: "20px 0px",
                cursor: "pointer",
              }}
            >

                See all features
            </div>
          </center>
          <center>
            <div style={{ width: "200px", padding: "0px 20px" }}>
              <p>
                Get our most popular features for creating, sending & analyzing
                surveys.
              </p>
            </div>
          </center>
        </div>
        <div>
          <h2 className="b3">Team Advantage</h2>
          <div style={{ textAlign: "center", margin: "-10px 0px 30px 0px" }}>
            <h2 style={{ fontSize: "45px", fontWeight: "bolder" }}>₹1,550</h2>
            <p style={{ margin: "30px 0px 0px 0px" }}>per user / month</p>
          </div>
          <center>
            <div style={{ width: "200px" }}>
              <p>Starting at 3 users, billed annually</p>
            </div>
          </center>
          <center>
            <div
              style={{
                width: "150px",
                height: "auto",
                padding: "8px",
                borderRadius: "5px",
                backgroundColor: "#5D2666",
                color: "#FCFDFE",
                fontWeight: "600",
                margin: "20px 0px",
                cursor: "pointer",
              }}
            >
                See all features
            </div>
          </center>
          <center>
            <div style={{ width: "200px", padding: "0px 20px" }}>
              <p>
                Collaboration tools and survey features that help your team work
                more efficiently.
              </p>
            </div>
          </center>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default PlanPrice;
