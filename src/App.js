import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import './App.css';
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Components/Home/Home";
import OverallExperience from "./Components/Experience/OverallExperience";
import TechExperience from "./Components/Experience/TechExperience";
import Education from "./Components/Experience/Education";

function App() {
  return (
    <div className="main">
      <header><h1>Tobias Persson</h1></header>

      <Router>
        <div className="Navbar">
          
            <ul>
              
              
              <label><li><NavLink exact to="/">Home</NavLink></li></label>
              <li>
                <NavLink to="/aboutme">About Me</NavLink>
              </li>
              <li>
                <NavLink to="/techexperience">Technic jobbexperience</NavLink>
              </li>
              <li>
                <NavLink to="/overallexperience">Overall  jobbexperience</NavLink>
              </li>
              <li>
                <NavLink to="/Education">Education</NavLink>
              </li>
            </ul>
          
        </div>
        
        <Switch>
          <div className="Content">
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/aboutme">
              <AboutMe></AboutMe>
            </Route>
            <Route path="/techexperience">
              <TechExperience></TechExperience>
            </Route>
            <Route path="/overallexperience">
              <OverallExperience></OverallExperience>
            </Route>
            <Route path="/Education">
              <Education></Education>
            </Route>
            

          </div>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
