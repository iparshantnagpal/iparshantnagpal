/**
 * Component Name : App.js
 * Description: contains router information 
 */

import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import Typist from "react-typist";
import 'react-typist/dist/Typist.css';
import "./Hero.scss";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

import { AnimatedButton } from "../UIElements";
import { HiDownload } from "react-icons/hi";
import Resume from '../../assets/documents/resume.pdf';
const words = ['Full Stack Developer', 'MERN Stack Developer', 'MEAN Stack Developer', 'React-Native Developer', 'Flutter Developer', 'React Developer', 'Project Manager', 'Invester and Trader'];



const Hero = () => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1)
    }, [count])



    return (
        <div id={"hero"}>
            <Container>
                <div className="hero">
                    <Row>
                        <Col sm className="hero__content">
                            <h6>
                                Hey!
                            </h6>
                            <h1>
                                <span>
                                    <span>I'm</span>{" "}
                                    <span className="hero__content__title-second">Parshant Nagpal </span>
                                </span>
                            </h1>
                            <h2>
                                <div className="type-writer">
                                    {count ? (
                                        <Typist onTypingDone={() => setCount(0)}>
                                            {words.map((word) => [
                                                <span>{word}</span>,
                                                <Typist.Backspace count={word.length} delay={1000} />
                                            ])}</Typist>
                                    ) : ("")}
                                </div>
                            </h2>
                            <p>I have passion for technology.</p>
                            <p className="know-more">
                                <Link to="/about">
                                    Know More <AiOutlineLink />
                                </Link>
                                about me
                            </p>
                            <h6>
                                Follow me {' '}
                                <span className="hero__content__social-icons">
                                    <Link to="/profile/twitter">
                                        <FaTwitter className="social-icon twitter"/>
                                    </Link>
                                    <Link to="/profile/github">
                                        <FaGithub className="social-icon github"/>
                                    </Link>
                                    <Link to="/profile/medium">
                                        <FaMedium className="social-icon medium"/>
                                    </Link>
                                    <Link to="/profile/linkdin">
                                        <FaLinkedin className="social-icon linkdin"/>
                                    </Link>
                                </span>
                            </h6>
                            <div className="hero__content__main-btns">
                                <a href="mailto:nagpal.parshant8@gmail.com" >
                                    <AnimatedButton>
                                        <AiOutlineMail />
                                         &nbsp;Email&nbsp;Me
                                    </AnimatedButton>
                                </a>
                                <a href={Resume} target="_blank" rel="noopener noreferrer">
                                   <AnimatedButton outline className="ms-4">
                                    <HiDownload />
                                    &nbsp;Resume
                                    </AnimatedButton> 
                                </a>
                            </div>
                        </Col>
                        <Col sm className="hero__image">
                            <img
                                id="hero-avatar"
                                src="https://ik.imagekit.io/itsrakesh/Portfolio/avatar_3PaiLNQSnTE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493976"
                                alt="Parshant Nagpal"
                                loading="eager"
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Hero;

