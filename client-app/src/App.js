 import {useEffect}from "react";
import {Link, Route, Switch } from 'react-router-dom';
import SignUp from "./Components/SignUp/SignUp";
 import Dashbord from './Components/Dashbord/Dashbord';
 import PrivateRoute from './Components/router/PrivateRoute';
import './App.css';
 import {useDispatch} from "react-redux";
 import { current } from "./JS/actions/user";
 import { Button, Sidebar } from 'semantic-ui-react';
import { togglefalse } from './JS/actions/edit';
import Add from "./Components/product/Add"
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import Donation from "./Components/Donation";
import Home from "./Components/Home"
import Profil from "./Components/Profil";
import Prostheticdevices from "./Components/Prostheticdevices";
import DonateMoney from "./Components/DonateMoney"
import DonateProsthetics from "./Components/DonateProsthetics";
import Footer from "./Components/Footer";
import  Sidebare from "./Components/Sidebar";


function App() {
const dispatch = useDispatch();
  useEffect(() => {
  dispatch(current());
  },[])
  return (
    
    <div className="App">
    
      <Route path="/connexion" component={SignUp}/>
     <Navbar/>
    {/* <Sidebare/> */}
      {/* <Button inverted color='blue'><Link to="/product"> product list</Link></Button> */}
       <Switch> 
       

         {/* <Route path="/add" component={Add}/> */}
         <PrivateRoute exact path="/Admin" component={Dashbord}/>
         <Route exact  path="/" component={Home}/>
         <Route path="/About" component={About}/>
         <Route path="/Shop" component={Shop}/>
         <Route path="/Contact" component={Contact}/>
         <Route path="/Donation" component={Donation}/>
         <Route path="/Profil" component={Profil}/>
         <Route path="/Products" component={Prostheticdevices}/>
         <Route path="/DonateMoney" component={DonateMoney}/>
         <Route path="/DonateProsthetics" component={DonateProsthetics}/>
       </Switch>
       <Footer/>
    </div>
  );
}

export default App;
