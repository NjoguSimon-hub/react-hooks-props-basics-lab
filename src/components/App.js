import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // This includes .links.github & .links.linkedin

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About 
        bio={user.bio}
        github={user.links.github}  // ✅ Updated
        linkedin={user.links.linkedin}  // ✅ Updated
      />
    </div>
  );
}

export default App;
