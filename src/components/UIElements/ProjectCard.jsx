/**
 * Name: project Card 
 * Descriptinl  Contains Project Card 
 */

import React from "react";
import { Card, Container, Row, Col, OverlayTrigger , Tooltip} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEye, FaReadme } from "react-icons/fa";
import "./ProjectCard.scss";


const ProjectCard = (props) => {
    console.log("props.title}",props.title)
   const cutTextHandler = (text) => {
    if(text?.length> 15){
        return text.substring(0,15) + '...';
    }
    return text;
   }

  return(<div>
      <Container className="project-card"> 
          <Card bg="dark">
              <Card.Img 
              varient="top"
              src={props.image}
              alt={props.title}
              loading="lazy"

              />
              <Card.Body>
                  <Row>
                      <Col>
                         <Card.Title>
                             {cutTextHandler(props.title)}
                         </Card.Title>
                      </Col>
                      {props.techs && (
                          <div className="project-card__details__tech-stack">
                              {props.techs.map(((tech)=>(
                              <OverlayTrigger
                               key={tech.title}
                               placement="top"
                               overlay={
                                   <Tooltip>{tech.title}</Tooltip>
                               }

                              >
                               <img  
                                 style={{background: `${tech.bg}`}}
                                 src={tech.url}
                                 alt={tech.title}
                                 loading="lazy"
                               />   

                              </OverlayTrigger>)))}
                          </div>
                      )}
                  </Row>
              </Card.Body>
              <Card.Footer>
                  <Row className="project-card__links">
                      <Col>
                         <Link to={`/work/projects/${props.repoName}`}>
                             <FaReadme />
                             &nbsp; Details 
                         </Link>
                      </Col>
                      <Col>
                         <a  
                         href={props.liveUrl}
                         target="_blank"
                         rel="noopener noreferer"
                         >
                         <FaEye/>
                         &nbsp;Live&nbsp;Preview
                         </a>
                      </Col>
                  </Row>
              </Card.Footer>
          </Card>
      </Container>
      </div>)
}

export default ProjectCard;