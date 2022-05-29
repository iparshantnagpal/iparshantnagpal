/**
 * Name: Contribution Graph
 * Description: Contains github contribution
 */

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import GithubCalander from "github-calendar";
import 'github-calendar/dist/github-calendar-responsive.css';
import 'github-calendar/dist/github-calendar.min.js';
import "./ContributionGraph.scss"

const ContributionGraph = () => {
  
    useEffect(()=>{
        GithubCalander('.calander1',"parshantarora",{
            tooltips: true
        });
        GithubCalander('.calander2',"iparshantnagpal",{
            tooltips: true
        })
    },[])

 return(
 <Container>
     <div className="contributions-graph">
         <h2>OSS Contribution</h2>
         <h4>https://github.com/parshantarora</h4>
         <div className="calander1 calander"/>
         <h4>https://github.com/iparshantnagpal</h4>
         <div className="calander2 calander"/>
     </div>

 </Container>)
}
export default ContributionGraph;