import React from "react";
import Navigation from "./Navigation";

function App() {
  return (
    <div>
      <Layout />
      
    </div>
  );
}

function Layout()
{
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navigation />
      </div>

      {/* Content Area */}
      <div>

      </div>

      {/* Footer */}
      <div>

      </div>
    </div>
  )
}

export default App;