import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbarr from './components/Navbarr';
import Card from 'react-bootstrap/Card';
import ContactUs from './components/Contactus';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  return (
    <>
   
    <div className="normalfont">
    
    <header
          className="image-fluid"
          style={{
            backgroundImage: "url('https://get.wallhere.com/photo/computer-keyboards-1150906.jpg')",
            maxWidth:"100%",
            width: "100%",
            backgroundSize:"cover",
            background:"cover",
            minHeight:"25vh",
            backgroundColor:"whitesmoke",
          }}>

    <Navbarr></Navbarr>

          <figure className="image-fluid">  </figure>   
             
                <h3 style=
                  {{color:'white' , 
                  fontSize:"55px", 
                  paddingLeft:"30px" ,
                  borderRadius:"20px", 
                  paddingTop:"250px",
                  paddingBottom:"160px"}}
                  > 
                  <h1 style={{paddingBottom:"20px", fontSize:"50px", paddingLeft:"6%", display:"flex", justifyContent:"left"}}>
                    Aspiring Developer.
                    </h1>
        
                          <p id="a" 
                          style={{ 
                          fontSize:"20px",
                          paddingTop:"50px", 
                          paddingBottom:"20px",
                          paddingLeft:"5.5%",
                          paddingRight:"10%",
                          display:"flex", justifyContent:"center"}}> 
                              Hello there, nice you meet you. I'm Hafeefa.
                              Since the beginning my journey as a software engineer,
                              I've done remote work for agencies 
                              and collaborated with talented people to create digital websites for
                              both business and consumer use. I'm quietly confident, naturally 
                              curious, and perpetually working on improving my chops one design 
                              problem at a time.
                        </p>

            <div class="outer">
                <div class="button">
                  <div class="text"> <a href = "https://github.com/hafeefas" target = "_blank" style={{textDecoration:"none"}}>Find my code </a></div>
                </div>
              </div>
            <br/>
         </h3>
      </header>
      
      {/* background of entire bottom half page */}
      <figure
          className="image-fluid"
          style={{
            backgroundImage: "url('https://i.pinimg.com/736x/9f/86/7d/9f867dbeead71e9d7ea096a62c3e1d59--dark-blue-wallpaper-blue-wallpapers.jpg')",
            maxWidth:"100%",
            width: "100%",
            backgroundSize:"cover",
            background:"cover",
            minHeight:"25vh",
            backgroundColor:"whitesmoke",
          }}>

         <Container>
       {/* first card */}


  <Row style= {{paddingTop:"170px", paddingBottom:"200px"}}>
    <article id="graybackground" style={{paddingTop:"30px"}}>
            
      <h1 style={{textAlign:"center", paddingBottom:"20px", fontSize:"50px"}}> 
        Hey there! Thanks for making it here. </h1>
      
          <p id="a" 
          style={{
          textAlign:"center", 
          fontSize:"20px", 
          paddingBottom:"10px"}}> 
                Here's some information about languages I use in order to build sites 
                and more.
          
          </p>
    </article>
            <Card  id="cards">
              <Card.Body>
                <Card.Title id="cardTitleSpacing">HTML, CSS, JavaScript</Card.Title>
                <Card.Text>
                  
                  I am advanced at utilizing HTML and CSS, 
                  but definetly still have lots to learn about them. 
                  As for JavaScript, I utilise it in order to 
                  add aesthetics, but definetly require more practice with it. 
                  <br/> 

                  <img src="https://images.velog.io/images/gga4638/post/6d9df8cb-5086-4fa9-83d1-521fd6a2cb27/image.png" 
                  style={{height:"14vh", marginTop:"40px"}}/> 
                </Card.Text>
              </Card.Body>
            </Card>

    <br/>

            {/* second card */}

          <Card  id="cards" >
              <Card.Body>
                <Card.Title id="cardTitleSpacing">React JS, BootStrap JS</Card.Title>
                <Card.Text>

                  I absolutely love working with React and Boostrap, as they 
                  allow my site to obtain more website functionality. I also love their
                  ease of use, and always come in handy when building sites.
                  <br/> 

                  <img src="https://www.educative.io/api/page/5816757605367808/image/download/5327498687545344" 
                  id="picture" style={{height:"14vh", marginTop:"35px"}}/>

                </Card.Text>
              </Card.Body>
            </Card>
            <br/>

            {/* third card */}
            
          <Card  id="cards">
            <Card.Body>
              <Card.Title id="cardTitleSpacing">Java</Card.Title>
                <Card.Text>
                  I use java in my cs classes, and do enjoy using it in order to build programs.
                  Though I use it in class, I would love to have real world experience
                  with java and more real world applications with it.
                  <br/> 

                  <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg" 
                  id="picture" style={{height:"14vh", marginTop:"35px"}}/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>

  <CardGroup>
    <section
          className="image-fluid"
          style={{
            backgroundImage: "url('ttps://img.freepik.com/free-vector/white-background-with-3d-hexagonal-pattern-design_1017-28443.jpg?w=360')",
            maxWidth:"100%",
            width: "100%",
            backgroundSize:"cover",
            background:"cover",
            minHeight:"25vh",
            paddingRight:"20px",
            marginBottom:"1%"

           
          }}>
            
      <figure>
          <img src="https://img.freepik.com/premium-photo/floating-devices-mockup-with-responsive-website-design-3d-rendering_72104-3791.jpg?w=2000" 
            style={
              {width:"60vh", 
              height:"50vh", 
              minHeight:"25vh",
              borderRadius:"10px", 
              maxWidth:"100%",
              float:"right",
              display:"block",
              display:"grid",
              marginLeft:"auto",
              marginRight:"auto",
              paddingBottom:"30px"
              }} />
              <br/> <br/> <br/>
      </figure>

          {/* <Card.Body> */}
            <Card.Title style={{paddingTop:"8px",color:"white", fontSize:"30px",  paddingBottom:"5px", padding:"20px", paddingLeft:"20px", float:"left", textAlign:"right"}} 
              > 
                My experience with building sites and <br/> Programming </Card.Title>
         
                <Card.Text style={{paddingTop:"10px", fontSize:"20px", color:"white", paddingLeft:"20px", float:"left", textAlign:"right"}}>
                  
                    9 months experience with front end development <br/>
                    One web development certificate (Break Through Tech) <br/>
                    Over 1 year's experience with building programs with java <br/>                  
                </Card.Text>
      </section>

    <div
          className="image-fluid"
          style={{
            backgroundImage: "url('ttps://img.freepik.com/free-vector/white-background-with-3d-hexagonal-pattern-design_1017-28443.jpg?w=360')",
            maxWidth:"100%",
            width: "100%",
            backgroundSize:"cover",
            background:"cover",
            minHeight:"25vh",
            paddingLeft:"20px",
            borderRightRadius:"20px"
           
          }}>
            <br/> <br/> <br/>
      
      <figure>
        <img src="https://img.freepik.com/free-psd/elegant-minimalist-laptop-mockup_125540-2406.jpg?size=626&ext=jpg" 
          style={
            {width:"60vh", 
            height:"55vh", 
            borderRadius:"10px",
            minHeight:"25vh", 
            maxWidth:"100%",
            float:"left",
            display:"block",
            display:"grid",
            marginLeft:"auto",
            marginRight:"auto",
            paddingBottom:"60px"
            }} />
            <br/> <br/> <br/> <br/>
      </figure>

            <figcaption>
            <Card.Title 
              style={{color:"white", 
                      fontSize:"30px", 
                      paddingBottom:"5px",  
                      padding:"20px", 
                      paddingLeft:"5%", 
                      float:"left"}} 
              > 
                What I used in order to build this website</Card.Title>
         
                <Card.Text style={{paddingTop:"10px", fontSize:"20px", color:"white", paddingLeft:"6%", float:"left"}}>
                  
                     Editor: VSCode <br/>
                     Framework: Bootstrap <br/>
                     Open source: Node.js, Git, Github  <br/>
                     Languages: React, HTML, JavaScript, CSS <br/>
                 
            </Card.Text>
            </figcaption>
          </div>
    </CardGroup>

        <ContactUs/>

          <p style={{textAlign:"center", color:"white",fontSize:"12px", paddingTop:"60px", paddingBottom:"15px"}}>
            <em>Desgined and developed by Hafeefa Sultan</em> 
          </p>

        </Container>
        </figure>
      </div>
    </>
  );
}

export default App;
