/**
 * name: Content 
 * Description: COntains Content Page
 */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatedButton, AnimatedCounter, LoadingProjectCard, ProjectCard } from "../UIElements";
import {Link} from "react-router-dom";
import "./Content.scss";

const Content = (props) => {
    return(
    <Container>
       <div className="content">
           <Container>
               <Row className="content__container">    
                   <Col  className="content__container__image" sm={12} md={6}>
                      <img
                        src="https://ik.imagekit.io/itsrakesh/Portfolio/projects-illustration_dRQbe5kVkFw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134494977"
                        alt="Project Illustration"
                        loading="lazy"
                      />
                   </Col>
                   <Col className="content__container__details" sm={12} md={6}>
                       <div>
                           <h1>
                            <AnimatedCounter end={50} duration={1}/>
                               <span style={{color:  '#8ED2A9'}}>+</span>
                           </h1>
                           <h6>Completed Projects</h6>
                           <h2>Glad to Help you</h2>
                           <p>
                              As a Web and Mobile Developer, Project Manager , Invester and a passionate learner, 
                              I'm always on the lookout for new challenges and oppurtunities
                              to further improve my knowledge and skills 
                           </p>
                       </div>
                   </Col>
               </Row>
           </Container>
           <div className="content__recent-projects">
               <div className="content__recent-projects__header">
                   <h2>Recent Projects</h2>
                  <Link to="/work/projects">
                     <AnimatedButton>
                        View&nbsp;More 
                     </AnimatedButton>
                  </Link> 
               </div>
           </div>
           <Row>
               {props.error}
               {!props.isLoading && 
                props.projects && 
                props.projects.slice(0,2).map((project, i)=>{
                    return(
                     <Col className="mt-5" md={6}>
                         <ProjectCard 
                          title={project.title}
                          image={project.image}
                          repoName={project.repoName}
                          liveUrl={project.liveUrl}
                          techs={project.techs}  
                         />      
                    </Col>)
                })
                
               }
           </Row>
           {
        
        <Row>
               {[...Array(2)].map((_,i)=>{
                   return(
                       <Col key={i} className={"mt-5"}>
                         <LoadingProjectCard/>
                       </Col>
                   );
               })}
           </Row>
           }
       </div>


    </Container>)
}

export default Content;