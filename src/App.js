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
            // backgroundImage: "url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMjI4OTkyfHxlbnwwfHx8fA%3D%3D&w=1000&q=80')",
            backgroundImage: "url('https://e0.pxfuel.com/wallpapers/846/344/desktop-wallpaper-portfolio-thumbnail.jpg')",
            maxWidth:"100%",
            width: "100%",
            backgroundSize:"cover",
            background:"cover",
            minHeight:"25vh",
            backgroundColor:"whitesmoke",
          }}>

    <Navbarr></Navbarr>
    
      {/* <img src ="https://t4.ftcdn.net/jpg/01/70/56/77/360_F_170567722_N73WLMvWpRXIxUa6nECmKsnZGQu3axLo.jpg"
      style={{width:"30vh",  display: "block",
      marginLeft: "auto",
      marginRight: "auto"
      }}/>
        */}
          <div className="image-fluid">
           {/* <img src="https://i.pinimg.com/originals/62/ec/88/62ec886dd7b506f41c8885714a1a3dbc.jpg"
             id="art" ></img> */}
                         
           
          </div>   
             
                <h3 style=
                  {{color:'white' , 
                  fontSize:"55px", 
                  paddingLeft:"30px" ,
                  borderRadius:"20px", 
                  paddingTop:"250px",
                  paddingBottom:"270px"}}
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

{/* <Container>
            <div
            className="image-fluid"
            style={{
              backgroundImage: "url('https://media.istockphoto.com/id/1193999908/vector/abstract-soft-waves-white-and-gray-color-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=E-h1iOxdVYZAnkfi33g932QALEEIrljWjy8z6JLhe0k=')",
              maxWidth:"100%",
              backgroundSize:"cover",
              minHeight:"25vh"
            }}>
                <p id="a" 
                      style={{paddingBottom:"10px",fontSize:"45px", textAlign:"center"}}>
                      Learn more about me and my objectives!
                </p>
            <br/> */}

{/* my own picture */}

            {/* <Row>
              <Col>
                <div class="container">   
                  <img src="https://media.licdn.com/dms/image/D4E03AQFKCehSPZwPmQ/profile-displayphoto-shrink_800_800/0/1674249851349?e=1680739200&v=beta&t=pIz9oADbHJRR8Uo_36pNl-ACKgcRpXbsVbcwIgFQpH8"
                    class="image" style={{width:"48vh", border:"solid whitesmoke", paddingTop:"50px", borderRadius:"30px", marginLeft:"auto", marginRight:"auto", marginBottom:"30px"}} />
                    </div>
                  </Col> */}

          {/* why i want to become full stack */}
                {/* <Col>
                    <p id="why" style={{paddingTop:"24%"}}>
                        I am asipring full stack software engineer mainly specializing in the front end areas.
                        I am however, knowledgable in certain areas in backend. I want to become a full stack developer
                        because I want to learn and work with multiple technologies, and be able to see the full 
                        picture of where the backend and frontend is used.
                    </p> */}
                    {/* <p id="why">
                        I would also enjoy being a full stack developer because it would allow
                        me to work for businesses as well as software companies. I can then 
                        listen to business owners and collaborate with them to create and deploy an 
                        entire solution, which I find pretty cool!
                    </p>
                    <p id="why">
                        Though these are all true, I still do have a long way to go until I can reach my goal.
                        I am currently looking for full stack, front-end, and back-end internships that will
                        help reach my target. I love working in every aspect of front end and back end, so
                        I would give it my all in order to reach my objectives!
                    </p> */}
{/*                     
                </Col>
              </Row>
            </div>
         </Container>
  
    <br/> <br/> <br/> <br/>
    <br></br> <br/> <br/> */}

  

  {/* <Card style={{ width: '70vh', maxWidth: "50%", height: "auto"}}></Card> */}
  
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
            <br/> <br/>
      
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
              <br/> <br/> <br/> <br/>

          {/* <Card.Body> */}
            <Card.Title style={{color:"black", fontSize:"30px",  paddingBottom:"5px", padding:"20px", paddingLeft:"20px", float:"left", textAlign:"right"}} 
              > 
                My experience with building sites and <br/> Programming </Card.Title>
         
                <Card.Text style={{paddingTop:"10px", fontSize:"20px", color:"black", paddingLeft:"20px", float:"left", textAlign:"right"}}>
                  
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
            // border:"solid whitesmoke 10px",
            // backgroundColor:"whitesmoke",
            minHeight:"25vh",
            paddingLeft:"20px",
            borderRightRadius:"20px"
           
          }}>
            <br/> <br/> <br/>
      
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

          {/* <Card.Body> */}
            <Card.Title 
              style={{color:"black", 
                      fontSize:"30px", 
                      paddingBottom:"5px",  
                      padding:"20px", 
                      paddingLeft:"5%", 
                      float:"left"}} 
              > 
                What I used in order to build this website</Card.Title>
         
                <Card.Text style={{paddingTop:"10px", fontSize:"20px", color:"black", paddingLeft:"6%", float:"left"}}>
                  
                     Editor: VSCode <br/>
                     Framework: Bootstrap <br/>
                     Open source: Node.js, Git, Github  <br/>
                     Languages: React, HTML, JavaScript, CSS <br/>
                 
            </Card.Text>
          </div>
    </CardGroup>


        <ContactUs/>

          <p style={{textAlign:"center", fontSize:"12px", paddingTop:"60px", paddingBottom:"15px"}}>
            <em>Desgined and developed by Hafeefa Sultan</em> 
          </p>

        </Container>
      </div>
    </>
  );
}

export default App;
