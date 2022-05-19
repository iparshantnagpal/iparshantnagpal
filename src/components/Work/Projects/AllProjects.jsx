/**
 * Name: All Projects
 * Description: Contains all Projects
 */


import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useHttpClient from "../../../common/hooks/http-hook";
import { BackToTop, LoadingProjectCard, ProjectCard } from "../../UIElements";
import "./index.scss"

const AllProjects = (props) => {
    const [projects , setProjects] = useState([]); 
    const [show, setShow] = useState(false);
    const {isLoading , error, sendRequest} = useHttpClient();

     useEffect(()=>{
         const fetchData = async() => {
          try{
              const responseData = await sendRequest(
                  `${process.env.REACT_APP_BACKEND_URL}/project/projects`
              );
           setProjects(responseData);
          }catch(error){
          }   
         }
         fetchData();
     },[sendRequest])
    
    return(
   <Fragment>
      <Container>
         <div className={"projects"} style={{margin: '5%'}}>
             <div className="projects__header">
                 <h1>Projects</h1>
             </div>
         </div>
         <div className="projects__container">
             <Row>
                 {
                     projects && 
                        projects.map((project, i )=>{
                            return(
                            <Col key={i} className="mt-5" sm={6} md={6}>
                              <ProjectCard
                                 title={project.title}
                                 image={project.image}
                                 repoName={project.repoName}
                                 liveUrl={props.liveUrl}
                                 techs={props.techs}
                              />
                            </Col>)
                        })
                 }
             </Row>
             {isLoading && (
                 <Row>
                     {[...Array(6)].map((_,i)=>{
                         return(
                         <Col key={i} className="mt-5" sm={6} md={6}>
                            <LoadingProjectCard/>
                         </Col>)
                     })

                     }
                 </Row>
             )

             }
         </div>
         <BackToTop/>
      </Container>
   </Fragment>)
}
export default AllProjects;