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
   
    <Navbarr></Navbarr>
    
 <img src ="https://t4.ftcdn.net/jpg/01/70/56/77/360_F_170567722_N73WLMvWpRXIxUa6nECmKsnZGQu3axLo.jpg"
 style={{width:"30vh",  display: "block",
 marginLeft: "auto",
 marginRight: "auto"
 }}/>


<Container>

        <div
          className="image-fluid"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMjI4OTkyfHxlbnwwfHx8fA%3D%3D&w=1000&q=80')",
            maxWidth:"100%",
            width: "100%",
            backgroundSize:"cover",
            background:"cover",
            minHeight:"25vh",
           
          }}>
       
          <div className="image-fluid">
           <img src="https://i.pinimg.com/originals/62/ec/88/62ec886dd7b506f41c8885714a1a3dbc.jpg"
             id="art" ></img>
                         
                          <br/> <br/> <br/> <br/>
       </div>   
       <br/> <br/> <br/> <br/>

            <h1 className="normalfont"> <strong></strong> </h1>
              <h3 style=
                {{color:'black' , 
                fontSize:"55px", 
                paddingLeft:"30px" ,
                paddingBottom:"50px", 
                  borderRadius:"20px", paddingTop:"20px"}}
                 > 
                 <h1 style={{paddingBottom:"20px", fontSize:"50px"}}> Hello world. I'm Hafeefa Sultan. A designer. </h1>
      
      <p id="a" 
      style={{ 
      fontSize:"20px",
      paddingTop:"40px", 
      paddingBottom:"10px"}}> 
          I'm an aspiring software engineer based in New York City! 
          Since beginning my journey as a software engineer,
          I've done remote work for agencies 
          and collaborated with talented people to create digital websites for
           both business and consumer use. I'm quietly confident, naturally 
           curious, and perpetually working on improving my chops one design 
           problem at a time.
    </p>
                    {/* Hello world. I'm Hafeefa. A designer. */}
              </h3>
              {/* <h5 style=
              {{
              color:'gray',
              padding:"20px", 
              textDecorationColor:"black",
              paddingBottom:"22px",
              paddingLeft:"30px" ,
            }}>
                 <strong  id="aspiringfont">
                      I design and code beautifully simple things, 
                      <p  id="aspiringfont"> and I love what I do.</p>
                  </strong> </h5> */}
          
         
                  

            <br/>
    
      
             <br/> <br/> <br/> <br/>
             <br/> <br/> <br/> <br/>

             </div>


             
             <br/> <br/>
              <br/> <br/>
             <br/> 
             
            
             

       {/* first card */}

    <Row style= {{paddingTop:"10px"}}>
    <div id="graybackground" style={{paddingTop:"30px"}}>
            
      <h1 style={{textAlign:"center", paddingBottom:"20px", fontSize:"50px"}}> 
      Hey there! Thanks for making it here. </h1>
      
        <p id="a" 
        style={{textAlign:"center", 
        fontSize:"20px", 
        paddingBottom:"10px"}}> 
              Here's some information about languages I use in order to build sites 
              and more.
          
      </p>
    </div>
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
<br/><br/> <br/> <br/> <br/> <br/> <br/>

<Container>
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
<br/>
{/* my own picture */}

    <Row>
      <Col>
        <div class="container">   
          <img src="https://media.licdn.com/dms/image/D4E03AQFKCehSPZwPmQ/profile-displayphoto-shrink_800_800/0/1674249851349?e=1680739200&v=beta&t=pIz9oADbHJRR8Uo_36pNl-ACKgcRpXbsVbcwIgFQpH8"
          class="image" style={{width:"48vh", paddingTop:"50px", borderRadius:"30px", marginLeft:"auto", marginRight:"auto"}} />
        </div>
      </Col>

{/* why i want to become full stack */}
      <Col>
          <p id="why" style={{paddingTop:"43px"}}>
              I am asipring full stack software engineer mainly specializing in the front end areas.
              I am however, knowledgable in certain areas in backend. I want to become a full stack developer
              because I want to learn and work with multiple technologies, and be able to see the full 
              picture of where the backend and frontend is used.
          </p>
          <p id="why">
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
          </p>
      </Col>
    </Row>
    </div>
  </Container>
  
    {/* <br/><br/> <br/> <br/> <br/> <br/>  */}

      {/* beginning of why exactly */}
      {/* <div
          className="image-fluid"
          style={{
            backgroundImage: "url('https://img.freepik.com/free-vector/white-background-with-3d-hexagonal-pattern-design_1017-28443.jpg?w=360')",
            maxWidth:"100%",
            backgroundSize:"cover",
            minHeight:"25vh",
           
          }}> */}
{/* <p 
  style={{ */}
  {/* // border:"solid black", 
  // borderRadius:"10px", 
  // borderWidth:"5px",
  padding:"45px",
  maxWidth:"100%", 
  height:"auto"}}>

    <br/>   
   
      <p 
          style={{textAlign:"center", fontSize:"40px", paddingBottom:"5px", color:"black"}} 
            className="underline">
         Why exactly do I want to be a software engineer? 
      </p> */}

    <br/> 
{/* first */}


    {/* <Card className="bg-light text-black" style={{paddingBottom:"50px", textAlign:"center", border:"solid black"}}>
      <Card.Body>
        <Card.Title id= "secondCardTitle" style={{fontSize:"40px", color:"black"}} > 
          It's loads of fun! 
          </Card.Title>
            <Card.Text style={{ paddingTop:"6px", fontSize:"18px", color:"black"}}>
              During an internship I had during January 2023, I worked in a team of 5 and we
              were able to build a complete marketplace full-stack website. 
              Building strong connections, working together and striving for the same goal
              made the internship so much fun. That's one of the highlights
              of being a software engineer, working in cooperative teams and aiming for a common target!
            </Card.Text>
      </Card.Body>
    </Card> */}

    <br/><br/> 
    {/* second */}

  
<br/>
    {/* <Card className="bg-light text-white" 
      style={{paddingBottom:"60px", border:"solid black", textAlign:"center"}}>
      <Card.Body>
        <Card.Title  id= "secondCardTitle" style={{fontSize:"40px"}} > 
          I love to problem solve!
            </Card.Title>
              <Card.Text style={{paddingTop:"6px",  fontSize:"18px", color:"black"}}>
              I personally enjoy problem solving
              very much. I love the challenge it gives to my brain, and I learned I really work best when working in 
              a problem solving environment! When I find the solution to my problems, it just makes me want
              to celebrate!
          </Card.Text>
      </Card.Body>
    </Card>
      <br/>
  </p> */}
  {/* </div>  */}


{/* pink line design */}

<br></br> <br/> <br/>

  

  {/* <Card style={{ width: '70vh', maxWidth: "50%", height: "auto"}}></Card> */}
  
    <CardGroup >

    <div
          className="image-fluid"
          style={{
            backgroundImage: "url('ttps://img.freepik.com/free-vector/white-background-with-3d-hexagonal-pattern-design_1017-28443.jpg?w=360')",
            maxWidth:"100%",
            width: "100%",
            backgroundSize:"cover",
            background:"cover",
            // backgroundColor:"whitesmoke",
            minHeight:"25vh",
            borderTopLeftRadius:"30px",
            paddingRight:"20px",
            border:"solid whitesmoke 10px"

           
          }}>
            <br/> <br/>
      
      {/* <Card className="bg-light" style={{maxWidth: "100%", height: "auto",  borderWidth:"1px"}} > */}
      {/* https://www.makerstations.io/content/images/2022/08/jb-bardoles-desk-setup-02.jpg */}
        <img src="https://img.freepik.com/premium-photo/floating-devices-mockup-with-responsive-website-design-3d-rendering_72104-3791.jpg?w=2000" 
        style={
          {width:"60vh", 
          height:"50vh", 
          minHeight:"25vh", 
          maxHeight:"100%",
          float:"right",
          display:"block",
          display:"grid",
          marginLeft:"auto",
          marginRight:"auto",
          // border:"solid whitesmoke 20px"
          paddingBottom:"30px"
          }} />
          <br/> <br/> <br/> <br/>

          {/* <Card.Body> */}
            <Card.Title style={{color:"black", fontSize:"30px",  paddingBottom:"5px", padding:"20px", paddingLeft:"20px", float:"left"}} 
              > 
                What I used in order to build this website</Card.Title>
         
                <Card.Text style={{paddingTop:"10px", fontSize:"20px", color:"black", paddingLeft:"20px", float:"left"}}>
                  
                     Editor: VSCode <br/>
                     Framework: Bootstrap <br/>
                     Open source: Node.js, Git, Github  <br/>
                     Languages: React, HTML, JavaScript, CSS <br/>
                  
          </Card.Text>
          </div>
<br/> <br/> <br/>

    <div
          className="image-fluid"
          style={{
            backgroundImage: "url('ttps://img.freepik.com/free-vector/white-background-with-3d-hexagonal-pattern-design_1017-28443.jpg?w=360')",
            maxWidth:"100%",
            width: "100%",
            backgroundSize:"cover",
            background:"cover",
            border:"solid whitesmoke 10px",
            // backgroundColor:"whitesmoke",
            minHeight:"25vh",
            borderRadius:"0px",
            paddingLeft:"20px",
            borderRightRadius:"20px"
           
          }}>
            <br/> <br/> <br/>
      
      {/* <Card className="bg-light" style={{maxWidth: "100%", height: "auto",  borderWidth:"1px"}} > */}
      {/* https://www.makerstations.io/content/images/2022/08/jb-bardoles-desk-setup-02.jpg */}
        <img src="https://img.freepik.com/free-psd/elegant-minimalist-laptop-mockup_125540-2406.jpg?size=626&ext=jpg" 
        style={
          {width:"60vh", 
          height:"50vh", 
          minHeight:"25vh", 
          maxHeight:"100%",
          float:"left",
          display:"block",
          display:"grid",
          marginLeft:"auto",
          marginRight:"auto",
          paddingBottom:"60px"
          }} />
            <br/> <br/> <br/> <br/>

          {/* <Card.Body> */}
            <Card.Title style={{color:"black", fontSize:"30px",  paddingBottom:"5px",  padding:"20px", paddingLeft:"20px", float:"left"}} 
              > 
                What I used in order to build this website</Card.Title>
         
                <Card.Text style={{paddingTop:"10px", fontSize:"20px", color:"black", paddingLeft:"20px", float:"left"}}>
                  
                     Editor: VSCode <br/>
                     Framework: Bootstrap <br/>
                     Open source: Node.js, Git, Github  <br/>
                     Languages: React, HTML, JavaScript, CSS <br/>
                  
          </Card.Text>
        </div>


    </CardGroup>
    
 
<br/> <br/>
<br/><br/> 
<br/> <br/>


        <ContactUs/>
          <br/>
              <p style={{textAlign:"center", fontSize:"12px"}}>
                <em>Desgined and developed by Hafeefa Sultan</em> 
              </p>
            <br/>
        </Container>
      </div>

    </>
  );
}

export default App;
