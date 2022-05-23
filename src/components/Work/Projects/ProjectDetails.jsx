/**
 *Name: Project Details 
 Description: Project details page  
 */

import { Fragment, useState } from "react"
import { Container } from "react-bootstrap";
import "./ProjectDetails";
import {useParams} from "react-router-dom";
import { BackToTop, Video } from "../../UIElements";
import {LoadingSpinner} from "../../UIElements"
import Markdown from "markdown-to-jsx";
import "./ProjectDetails.scss"

 const ProjectDetails = (props)=> {
     const [isLoading, setIsLoading] = useState(false);
     const [readme, setReadme] = useState('Janta ki waajjajsdffhfjghkdgdjkgh djkhjkhd ds jdkhgjkh jkdhgjk djfkg');
     
    const { repoName } = useParams();

    return(
    <Fragment>
        <Container>
            <div className="project-item">
                <h2 >
                     Project Details
                </h2>
                <div className="project-item__video">
                  <Video repoName={repoName}/>
                </div>
                <em>
                    <span style={{color : "red" }}>*</span> This page is a README file of {' '}
                    <a 
                       href={`https://github.com/RakeshPotnuru/${repoName}`}
                       target="_blank"
                       rel="noopener norefferer"
                      >
                       {repoName}
                    </a>{' '}
                    Github Repository
                </em>

               {isLoading && <LoadingSpinner/> }
               {!isLoading && (
                <div className="project-item__details">
                    <Markdown children={readme}/>
                </div>
                
               )}
            </div>
            <BackToTop/>
        </Container>

    </Fragment>) 
 }

 export default ProjectDetails;
