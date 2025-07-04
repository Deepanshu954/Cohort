import React from "react";

function Navigation() {
  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#f5f5f5",
          fontFamily: "sans-serif",
          border: "2px solid #ccc",
          borderRadius: 7,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: "bold",
            fontSize: "1.6rem",
            color: "#025fca",
          }}
        >
          <b>ALLEN</b>
        </div>

        {/* Navigation Items */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            fontSize: "0.95rem",
            alignItems: "flex-start",
            paddingRight: "32rem",
            color: "#1e1e22",
          }}
        >
          {/* Dropdown Parent */}
          <div
            style={{
              position: "relative",
              cursor: "pointer",
            }}
            onMouseEnter={() => {
              document.getElementById("courses-dropdown").style.display = "block";
            }}
            onMouseLeave={() => {
              document.getElementById("courses-dropdown").style.display = "none";
            }}
          >
            Courses
            <div
              id="courses-dropdown"
              style={{
                display: "none",
                position: "absolute",
                top: "120%",
                left: 0,
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "6px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                padding: "0.5rem 0",
                zIndex: 999,
                minWidth: "200px",
              }}
            >
              <div style={{ padding: "10px 20px", cursor: "pointer" }}>NEET</div>
              <div style={{ padding: "10px 20px", cursor: "pointer" }}>JEE</div>
              <div style={{ padding: "10px 20px", cursor: "pointer" }}>Class 9–12</div>
              <div style={{ padding: "10px 20px", cursor: "pointer" }}>Foundation</div>
            </div>
          </div>

              
          <div style={{ cursor: "pointer" }}>Test Series</div>
          <div style={{ cursor: "pointer" }}>Results</div>
          <div style={{ cursor: "pointer" }}>Study Materials</div>
          <div style={{ cursor: "pointer" }}>Scholarships</div>
          <div style={{ cursor: "pointer" }}>Books</div>
          <div style={{ cursor: "pointer" }}>More</div>
        </div>

        {/* Right-side Icons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            cursor: "pointer",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"
            alt="Phone"
            style={{ width: "2rem", height: "2rem" }}
          />
          <span
            style={{
              padding: "7px",
              borderRadius: 20,
              border: "2px solid #0266da",
              marginLeft: 5,
            }}
          >
            Login
          </span>
        </div>
      </div>

      {/* Announcement Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#0266da",
          height: "1rem",
          border: "12px solid #0266da",
          borderRadius: 5,
          color: "white",
        }}
      >
        GET UP TO 90% SCHOLARSHIP on NEET repeater courses for 2026
      </div>
    </div>
  );
}

export default Navigation;