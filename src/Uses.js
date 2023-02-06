import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbarr from './components/Navbarr';


function Uses () {
  return (
    
    <>
     <Navbarr></Navbarr>
      <br/>
      <div id="backgroundColor" className="normalfont">

      <p> here are the tools i used in order to build this site!</p>
      
      </div>
    </>
  )
}

export default Uses;