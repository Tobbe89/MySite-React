import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import React, { useState } from "react";
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Components/Home/Home";
import OverallExperience from "./Components/Experience/OverallExperience";
import TechExperience from "./Components/Experience/TechExperience";
import Education from "./Components/Experience/Education";
import Footer from "./Components/Home/Footer";
import { SideBar } from "./Components/NavBar/SideBar";
import Contact from "./Components/Experience/Contact";
import Header from "./Components/Header";
import Navigation from "./Components/NavBar2/Nav";

function App() {
  return (
    <div >
      <Header></Header>
      <Navigation></Navigation>
      <Education></Education>
      <TechExperience></TechExperience>
      {/* <OverallExperience></OverallExperience> */}
      <Contact></Contact>

      {/* <Router>
        <SideBar></SideBar>
        <Switch>    
            <Route exact path="/MySite-React/">
               <Home></Home>
            </Route>
            <Route path="/MySite-React/aboutme">
               <AboutMe></AboutMe>
            </Route>
            <Route path="/MySite-React/techexperience">
               <TechExperience></TechExperience>
            </Route>
            <Route path="/MySite-React/overallexperience">
               <OverallExperience></OverallExperience>
            </Route>
            <Route path="/MySite-React/Education">
               <Education></Education>
            </Route>
            <Route path="/MySite-React/Contact">
               <Contact></Contact>
            </Route>  
        </Switch>
      </Router>  */}
    </div>
  );
}

export default App;
