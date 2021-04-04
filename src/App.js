import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import './App.css';
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Components/Home/Home";
import OverallExperience from "./Components/Experience/OverallExperience";
import TechExperience from "./Components/Experience/TechExperience";
import Education from "./Components/Experience/Education";
import Footer from "./Components/Home/Footer";

function App() {
  return (
    <div className="main">
      <header><h1>Tobias Persson</h1></header>
      
      <Router>
        <div className="Navbar">
          
            <ul>
              
              
            <li><NavLink exact to="/MySite-React/">Hem</NavLink></li>
              <li>
              <NavLink to="/MySite-React/aboutme">Om mig</NavLink>
              </li>
              <li>
              <NavLink to="/MySite-React/techexperience">Teknisk erfarenhet</NavLink>
              </li>
              <li>
              <NavLink to="/MySite-React/overallexperience">All erfarenhet</NavLink>
              </li>
              <li>
              <NavLink to="/MySite-React/Education">Utbildning</NavLink>
              </li>
            </ul>
            
        </div>
        
        <Switch>
          <div className="Content">
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
            

          </div>
        </Switch>

      </Router>
     
    </div>
  );
}

export default App;
