import React from "react";

function App() {
  return (
    <div style={{ background: "#dfe6e9", minHeight: "200vh", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {/* Left Side - Profile */}
        <div>
          <ProfileComponent />
        </div>

        {/* Center Feed */}
        <div>
          <AddPost />
          <AddPost />
          <AddPost />
        </div>

        {/* Right Side - News */}
        <div>
          <NewsComponent />
        </div>
      </div>
    </div>
  );
}

function AddPost() {
  const style = {
    width: 400,
    backgroundColor: "white",
    borderRadius: 10,
    border: "1px solid #ccc",
    padding: 20,
    margin: "10px 0",
  };

  return (
    <div style={style}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
        <img
          src={
            "https://media.licdn.com/dms/image/v2/D4D03AQFj4JA_SD6cVQ/profile-displayphoto-shrink_100_100/B4DZT5xHM2G8AY-/0/1739357190046?e=1755734400&v=beta&t=Yd4BgYQUxphVTGneA64Cq6rxGNIN4Ny9w30RgHqbQa0"
          }
          alt="Profile"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            marginRight: 10,
          }}
        />

        <div style={{ fontSize: 13 }}>
          <div><b>Dr. Shubhra Chakrabortyo</b></div>
          <div>Global Marketing Manager – Philips</div>
          <div>1w</div>
        </div>

        <div style={{ color: "rgb(6,88,169)", marginLeft: "auto" }}>
          <b>+ Follow</b>
        </div>
      </div>

      {/* Content */}
      <div style={{ fontSize: 13, margin: "10px 0", padding: "5px 0" }}>
        Honeywell is hiring for <b>#Freshers</b>, <b>#EntryLevel</b> & Experienced – Hybrid/Office Jobs. CTC ₹40,000 – ₹1,10,000/month (approx) – June 2025. Please read the disclaimer carefully.
      </div>

      {/* Post Image */}
      <img
        src={
          "https://media.licdn.com/dms/image/v2/D4D22AQFJwuj-FjIKTg/feedshare-shrink_2048_1536/B4DZc_hTMeGUAo-/0/1749117384863?e=1752710400&v=beta&t=9xPqr8WQleJR82DrMbqf6cicdNlm1vrwKSZvKKoLF6k"
        }
        alt="Post"
        style={{ width: "100%", borderRadius: 6 }}
      />
    </div>
  );
}

function ProfileComponent() {
  const style = {
    backgroundColor: "white",
    width: 200,
    height: 200,
    borderRadius: 10,
    padding: 20,
    margin: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={style}>👤 Profile Section</div>;
}

function NewsComponent() {
  const style = {
    backgroundColor: "white",
    width: 200,
    height: 200,
    borderRadius: 10,
    padding: 20,
    margin: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={style}>📰 News Section</div>;
}

export default App;