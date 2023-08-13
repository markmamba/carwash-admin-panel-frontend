import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <Router>
        <NavigationMenu></NavigationMenu>
      </Router>
    </div>
  );
}

export default App;
