import React from "react";

function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundColor: "#CAE8DC",
        width: "100%",
        height: "600px",
        display: "flex",
     marginTop:"60px",
     marginBottom:"20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "500px", height: "auto" }}>
        <h2
          style={{
            width: "493px",
            fontSize: "45px",
            color: "#224F3C",
            fontWeight: "600",
            lineHeight: "120%",
          }}
        >
          Create free surveys and forms online in minutes
        </h2>
        <p style={{ width: "493px", fontSize: "18px", color: "#224F3C",margin:"10px 0px" }}>
          Ask, listen, and act on insights fast with a global leader in surveys
          and forms software.
        </p>
        <button
          style={{
            backgroundColor: "#FDC713",
            color: "black",
            fontWeight: "400",
            padding: "10px 30px",
            margin:"20px 0px",
            borderRadius: "5px",
          }}
        >
          Get started
        </button>
      </div>
      <div style={{ width: "600px", height: "auto" }}>
        <img src="images/hero.png" alt="banner" />
      </div>
    </div>
  );
}

export default Hero;
