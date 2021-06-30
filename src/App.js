import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import {Switch,Route} from "react-router-dom";

function App() {
  return (
     <>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/about" component={About}></Route>
         <Route exact path="/contact" component={Contact}></Route>
         <Route exact path="/signin" component={Signin}></Route>
         <Route exact path="/signup" component={Signup}></Route>
       </Switch>
     </>
  );
}

export default App;
