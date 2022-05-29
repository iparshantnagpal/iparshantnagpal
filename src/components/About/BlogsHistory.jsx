/**
 * Componenet : BlogHistory
 * Description: Blogs History
 */

import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ImInsertTemplate } from "react-icons/im";
import { AnimatedCounter } from "../UIElements";
import "./BlogsHistory.scss";



const BlogsHistory = () => {
    const data = [{
      end: 20,
      feild: 'Blogs'
    },{
     end: 43000,
     feild: 'Views'
    },{
     end: 800,
     feild: 'Impressions'
    }]
 return(
 <Container>
     <div className="blogs-history">
         <h2 className="blogs-history__title">Blog History</h2>
         <div className="blogs-history__cards">
             <Row>
                 {data.map((item,i)=>{
                     return(
                     <Col key={i}>
                         <h2>
                             <AnimatedCounter end={item.end} duration={1}/>
                             <span style={{color: '#BED2A9'}}>+</span>                          
                         </h2>
                         <p>{item.feild}</p>
                     </Col>)
                 })}
             </Row>
         </div>
     </div>

 </Container>)
}

export default BlogsHistory;