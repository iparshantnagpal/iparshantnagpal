/**
 * name: Content 
 * Description: COntains Content Page
 */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatedButton, AnimatedCounter, LoadingProjectCard, ProjectCard } from "../UIElements";
import { Link } from "react-router-dom";
import "./Content.scss";


const StrengthItem = (props) => {
    return (
        <div className="strengths__item">
            <div className="strengths__item__image">
                <img src={props.image} alt={props.title} loading="lazy" />
            </div>
            <div className="strengths__item__content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>)
}


const Content = (props) => {
    return (
        <Container>
            <div className="content">
                <Container>
                    <Row className="content__container">
                        <Col className="content__container__image" sm={12} md={6}>
                            <img
                                src="https://ik.imagekit.io/itsrakesh/Portfolio/projects-illustration_dRQbe5kVkFw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134494977"
                                alt="Project Illustration"
                                loading="lazy"
                            />
                        </Col>
                        <Col className="content__container__details" sm={12} md={6}>
                            <div>
                                <h1>
                                    <AnimatedCounter end={50} duration={1} />
                                    <span style={{ color: '#8ED2A9' }}>+</span>
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
                        props.projects.slice(0, 2).map((project, i) => {
                            return (
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
                {props.isLoading &&
                    (<Row>
                        {[...Array(2)].map((_, i) => {
                            return (
                                <Col key={i} className={"mt-5"}>
                                    <LoadingProjectCard />
                                </Col>
                            );
                        })}
                    </Row>
                    )}
            </div>
            <Container>
                <div className="content__strengths">
                    <h2 className="content__strengths__header">
                        Why Hire Me <span style={{ color: "#FF5403" }}>?</span>
                    </h2>
                    <Row className="strengths">
                        <Col>
                            <StrengthItem
                                image="https://ik.imagekit.io/itsrakesh/Portfolio/communicative_9gtXcXgTB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493404"
                                title="Communicative"
                                description={"I Balance talking and listening hence ensure effective communication"}
                            />
                        </Col>
                        <Col>
                            <StrengthItem
                                image="https://ik.imagekit.io/itsrakesh/Portfolio/collaborative_-lWdw0PUM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493423"
                                title="Collabortaive"
                                description="Team Work makes adream work.Collaboration first , then work"
                            />
                        </Col>
                        <Col>
                            <StrengthItem
                                image="https://ik.imagekit.io/itsrakesh/Portfolio/work-ethic_jaB_-v1Sr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134495355"
                                title="Work Ethic"
                                description="I dont wait for deadlines , deadlines wait for me"
                            />
                        </Col>
                        <Col>
                            <StrengthItem
                                image="https://ik.imagekit.io/itsrakesh/Portfolio/self-motivation_PLXNT-6da.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134495068"
                                title="Self Motivated"
                                description="I put my self in action to achieve my goals"
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>)
}

export default Content;