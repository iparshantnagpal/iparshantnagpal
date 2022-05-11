/**
 * Name: Footer Component 
 * Description: COntains footer componenet 
 */

import React, { useState } from "react";
import { Row, Col, OverlayTrigger, Tooltip, Spinner, Stack }  from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaTwitter, FaGithub, FaMedium,FaLinkedin} from "react-icons/fa";
import "./index.scss";


const Footer = ()=> {
    const [visits, setVisits] = useState(0);
    const {isloading = false,error = false} = {};

    return(<div id={"footer"}>
        <footer>
            <Row>
                <Col sm>
                  <h1>Lets connect</h1>
                  <h6>
                    Visits:{''}
                     <OverlayTrigger
                     placement="right"
                     overlay={<Tooltip>Times Viewed</Tooltip>}
                     >
                      <span className="visits">
                         {isloading ? <Spinner animation="grow" size="sm"/>: visits}
                         {error && <span>{error}</span>}
                      </span>
                     </OverlayTrigger>
                      
                  </h6>
                </Col>
                <Col className="p-2" sm>
                  <Link to="/profile/twitter">
                      <FaTwitter className="social-icon"/>
                  </Link>
                  <Link to="/profile/github">
                      <FaGithub className="social-icon"/>
                  </Link>
                  <Link to="/profile/medium">
                       <FaMedium className="social-icon"/> 
                  </Link>
                  <Link to="/profile/linkedin">
                       <FaLinkedin className="social-icon"/>
                  </Link>
                </Col>
            </Row>
             <span className="divider"></span>
            <Row className="extras">
                <Col sm>
                  <Stack>
                      <a
                      href="https://forms.gle/2mtF1kybEQQQVrRdA"
                      target="_blank"
                      rel="noreferrer noopener"
                      >
                       Report    
                      </a>
                      <a 
                       href=""
                       target={"_blank"}
                       rel="noreferrer noopener"
                      > 
                       Feedback
                      </a>
                      <Link to="privacy-policy">
                          Privacy Policy
                      </Link>
                  </Stack>
                </Col>                
            </Row>
        </footer>
        <Stack className="copyright" direction="horizontal" gap={5}>
          <p> &copy; {new Date().getFullYear()} Parshant Nagpal</p>
          <p className="ms-auto">Made By Parshant Nagpal with 💖</p>
           <p>v1.0.1</p> 
        </Stack>
    </div>)
}

export default Footer;