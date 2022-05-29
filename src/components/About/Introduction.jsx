/**
 * Name: Introduction
 * Description: Introduction componenet 
*/
import React from "react";
import { Row,Container,Col } from "react-bootstrap";
import { FaGithub, FaMedium, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomButton from "../UIElements/CustomButton";
import "./Introduction.scss";

const Introduction = () => {
  return(
     <div id="introduction">
     <Container>
        <div className="introduction"> 
            <Row>
                <Col sm>
                    <div className="introduction__img">
                        <img  
                         src="https://ik.imagekit.io/itsrakesh/Portfolio/avatar_3PaiLNQSnTE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493976"
                         alt="its Parshant Nagpal"
                         loading="lazy"
                        />
                    </div>
                </Col>
                <Col className="introduction_short mt-4" sm>
                  <div >
                      <h1>Parshant Nagpal</h1>
                      <p>
                      Full Stack Developer, Project Manager , Web and Mobile develeoper and Invester
                      </p>
                  </div>
                  <div>
                      <h6>Email Me</h6>
                      <a href="mailto:nagpal.parshant8@gmail.com">
                          <span className="introduction__short__email">
                              nagpal.parshant8@gmail.com
                          </span>
                      </a>
                  </div>    
                  <div className="introduction__short__links">
                      <Row>
                          <Col lg={3} md={6} xs={6}>
                             <Link to="/work">
                                <CustomButton className="work">Work</CustomButton>
                             </Link>
                          </Col>
                          <Col lg={3} md={6} xs={6}>
                             <Link to="/blog">
                               <CustomButton className="blogs">Blogs</CustomButton>
                             </Link>
                          </Col>
                          <Col lg={3} md={6} xs={6}>
                              <Link to="/contact">
                                  <CustomButton className="contact">Contact</CustomButton>
                              </Link>
                          </Col>
                          <Col lg={3} md={6} xs={6}>
                               <Link to="/profiles">
                                   <CustomButton className="profiles">Profiles</CustomButton>
                               </Link>
                          </Col>
                      </Row>
                  </div>
                  <div className="introduction__short__social">
                      <h6>Follow me on</h6>
                      <div>
                          <Link to="/profiles/twitter" >
                             <FaTwitter className="social-icon"/>
                          </Link>
                          <Link to="/prrofiles/github">
                             <FaGithub className="social-icon"/>
                          </Link>
                          <Link to="/profiles/medium">
                             <FaMedium className="social-icon"/>
                          </Link>
                      </div>
                  </div>
                </Col>
            </Row>
            <hr/>
           <div className="introduction__breif">
               <p>
                   Hi there Thanks for visiting my Portfolio
                   <br/> I'm {" "}
                   <a 
                    href="https://www.linkedin.com/in/rakesh-potnuru-067a8b1b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Parshant Nagpal
                   </a>
                   , a Full Stack Developer, Project manager, Web and Mobile Developer 
                   , Investor and Passionate learner. I have done Bachelor of Engineering in Information Technology from{" "}
                   <a 
                     href="http://sliet.ac.in/"
                     target="_blank"
                     rel="noopener noreferrer"
                     >
                         SLIET Deemed University
                    </a>  
                    , Sangrur, Punjab India. I have worked on wide range of technologies and have worked on Projects
                    ranging from small to large scale. I am a self Motivated and self Driven individual who is looking for new challenges 
                    and oppurtunities. I love participation in hackathons and engaging in communities.
               </p>
           </div>
        </div>

     </Container></div>)
}

export default Introduction;