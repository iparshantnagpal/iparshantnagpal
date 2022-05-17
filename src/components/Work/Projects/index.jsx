/**
 * Name : Projects 
 * Description: Contains Project componenet
 */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CustomButton, ProjectCard } from "../../UIElements";



const Projects = (props) => {
  return (
    <>
      <Container>
        <div>
          <div>
            <h1>
              Projects
            </h1>
            <Link to="/work/projects">
              <CustomButton>
                See All Projects <BsArrowRight />
              </CustomButton>
            </Link>
          </div>
        </div>
        <div>
          <Row className="mt-5">
            {!props.isLoading &&
              props.projects &&
              props.projects.slice(0, 3).map((project, i) => {
                return (
                  <Col key={i} >
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
        </div>


      </Container>

    </>
  )
}
export default Projects;