import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

 function Navbarr() {
  return (

    <Navbar variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#home" id="navhov"> <em className="normalfont" style={{color:"pink"}}> Hafeefa's </em>🎀 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/hafeefas" target="_blank" id="font">
              <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
              alt="github"
              className='GL'
              style={{width:"6.2vh"}}/>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/hafeefa-sultan-1a3785227/" target="_blank" >
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="linkedin"
              className='GL'
              style={{width:"5.5vh"}}/>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbarr;