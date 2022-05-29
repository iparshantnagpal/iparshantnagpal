/**
 * Name: TechnologiesAndSkills
 * Description: Contains Technologies and Skills
 */

import React from "react";
import { Container, Row , Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import techData from "./techData";
import "./TechnologiesAndSkills.scss"

const TeachCard = (props) => {
    return(<div className="tech-card">
        <img 
        style={{background: `${props.bg}`}}
        src={props.imageUrl}
        alt={props.title}
        />
        <h6 className="mt-2">
            {props.title}
        </h6>
    </div>)
}

const TechnologiesAndSkills = () => {
    return(
    <Container>
      <div className="details">
          <div className="details__techs">
              <h2 className="details__techs__title">Tools , Language & FrameWork Libraries</h2>
          </div>
          <div className="details__techs__container">
              <Row className="mt-5">
                  {techData.map((item, i)=>{
                      return(
                       <Col>
                           <TeachCard
                            imageUrl={item.imageUrl}
                            title={item.techName}
                            bg={item.bg}
                           />
                      </Col>)
                  })}
              </Row>
          </div>
      </div>
      <div className="details__skills mt-5">
          <h2 className="details__skills__title">Skills</h2>
          <div className="details__skills__container">
              <Row>
                  <Col sm>
                     <h4>Web Development</h4>
                  </Col>
              </Row>  
              <Row>  
                  <Col sm>
                   <h4>Mobile Developmenet</h4>
                  </Col>
              </Row>
              <Row>  
                  <Col sm>
                   <h4>Project Management</h4>
                  </Col>
              </Row>
              <Row>  
                  <Col sm>
                   <h4>Invester and Trader</h4>
                  </Col>
              </Row>
          </div>

          <div className="support">
              <h2> Want to Support me</h2>
              <p>
                 Follow me on <Link to="/profiles">social</Link>
              </p>
          </div>
      </div>
    </Container>)
}

export default TechnologiesAndSkills;