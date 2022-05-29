/**
 *Name: Project Details 
 Description: Project details page  
 */

import { Fragment, useCallback, useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import "./ProjectDetails";
import {useParams} from "react-router-dom";
import { BackToTop, Video } from "../../UIElements";
import {LoadingSpinner} from "../../UIElements"
import Markdown from "markdown-to-jsx";
import "./ProjectDetails.scss"
import axios from "axios";

 const ProjectDetails = (props)=> {
     const [isLoading, setIsLoading] = useState(false);
     const [readme, setReadme] = useState('');
     const [error,setError] = useState('');
     const [show, setShow] = useState(false);
     
    const { repoName } = useParams();

    const fetchRepo = useCallback(async ()=>{
      setIsLoading(true);
      try{
        const data = await axios.get(
         `https://raw.githubusercontent.com/RakeshPotnuru/${repoName}/${
             'master' || 'main'
         }/README.md`
        );
        setIsLoading(false);
        setReadme(data.data);
        console.log("datatatatatattataa",data.data)

      }catch(error){
        setError(error);
        setIsLoading(false);

      }

    },[setReadme,repoName]);

    useEffect(()=>{
        fetchRepo();
    },[fetchRepo])

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
