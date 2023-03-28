import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components./Contactus';
import Navbar from "./components/Navbarr";
import slidein from './slidein';
import Purpose from './Purpose';

function routes(){
return (

    <Router>
        <Route exact path="/Navbarr"  element = {<Navbarr/>} />
        <Route exact path="/Contactus" element= {<ContactUs/>}/>
    </Router>

    );
}
export default routes;