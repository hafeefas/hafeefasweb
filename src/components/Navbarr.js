import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style ={{paddingTop:"15px"}}>
      <Container>
          <Navbar.Brand> 
            <a href= "mailto:hafeefas47@gmail.com" 
                target="_blank" 
                 style={{ textDecoration:"none"}}
                 id="navhov">
                 <em 
               style={{color:"black"}}> Contact me </em> 
             </a> 
           </Navbar.Brand> 
        <Nav>
          <Nav.Link href="https://github.com/hafeefas" target="_blank" id="font">
                <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                alt="github"
                className='GL'
                style={{width:"7vh", borderRadius:"4px"}}/>
            </Nav.Link>            
            <Nav.Link href="https://www.linkedin.com/in/hafeefa-sultan-1a3785227/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="linkedin"
                className='GL'
                style={{width:"7vh"}}/>
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;