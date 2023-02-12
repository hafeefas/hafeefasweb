import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contactus = () => {
  return (
    
    <>
      <h1 style={{textAlign:"center", fontSize:"55px", paddingBottom:"5px", color:"black"}} > 
        Get In Touch 
      </h1>
        <div>
          
    <div  style={{ paddingLeft:"10px"}}></div>
    <Card className="text-center" 
      style={{background:"white", 
      width:"70%", 
      marginLeft:"auto", 
      marginRight:"auto",
      padding:"20px",
      border:"solid black"}}>
      <Card.Body>
        <Card.Title>
        </Card.Title>
          <Card.Text>
        <p style={{textAlign:"center", fontSize:"30px", paddingBottom:"10px",color:"black"}}> Want to work together or have any questions?</p>
        </Card.Text>
        <Button variant="primary" id="contactbutton"> 
        <a href= "mailto:hafeefas47@gmail.com" 
          target="_blank" style={{ textDecoration:"none"}}> 
            <div style={{ 
              color:"black", 
              marginLeft:"auto", 
             marginRight:"auto",
             paddingLeft:"60px", 
             paddingRight:"60px", 
             padding:"20px"}}>
                              Email me! 
          </div>
        </a> 
        </Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
        </div>

        <Container style={{ paddingTop:"15px"}}>
      <Row className="justify-content-md-center">

        <Col xs lg="2">
          <a href="https://github.com/hafeefas" 
          target="_blank" 
          // className="resume" 
          style={{color:"black", textDecoration:"none"}}>
            <p style={{fontSize:"25px", textAlign:"center"}}>Github</p> 
              </a>     
           </Col>

        <Col md="auto">
          <a href ="https://docs.google.com/document/d/1ImeRckQpQiwg_0XFUt8ViyBqMJlgxy0c6X7HdazpRAQ/edit"
          target="_blank" 
          className="resume" 
          style={{color:"black", textDecoration:"none"}} > 
            <p style={{fontSize:"24.7px", textAlign:"center"}}>Resume</p> 
          </a>  
          </Col>

        <Col xs lg="2">
        <a href="https://www.linkedin.com/in/hafeefa-sultan-1a3785227/" 
          target="_blank" 
          // className="resume" 
          style={{color:"black", textDecoration:"none"}}>
            <p style={{fontSize:"24.4px", textAlign:"center"}}>Linkedin</p> 
              </a>     
        </Col>
      </Row>
      </Container>
        
        

      <br/>
    </>
  )
}

export default Contactus;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
          // emailjs.send("service_stswirc","template_7owiz3a");
//       });
//   };
//   In the code above, we stop page from refreshing when the form is submitted. 
// Then we call the sendForm function provided for us by emailjs. For this to be 
// successful, you need to replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID' and 
// 'YOUR_USER_ID' with your own details.
// SOURCE:https://dev.to/ebereplenty/contact-form-with-emailjs-react-581c


//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default ContactUs;

//thank u for sending a msg popup (modal)

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);