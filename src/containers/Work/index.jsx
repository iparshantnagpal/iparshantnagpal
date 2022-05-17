/**
 * Name : Work
 * Description: Contains all my Project information 
 */
import React , {Fragment, useEffect, useState } from "react";

import useHttpClient from "../../common/hooks/http-hook";
import Projects from "../../components/Work/Projects";
import WorkJson from "./Work.json"; 
import { BackToTop } from "../../components/UIElements";

const Work = () => {
    const {isLoading, error, sendRequest, show} = useHttpClient();
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
          try {
            console.log("responseDataresponseData",process.env)
           const responseData =  await sendRequest(
            // "https://itsrakesh-server.herokuapp.com/api/project/projects"
            // `${process.env.REACT_APP_BACKEND_URL}/project/projects`
              );
              console.log("responseDataresponseData",responseData)
           setProjects(responseData);   
          } catch (err){

          }
        };
        setProjects(WorkJson);  
        console.log("WorkJsonWorkJson",WorkJson)
        // fetchData()
    },[sendRequest])
    
    return(<Fragment>
           <Projects
           projects={projects}
           isLoading={isLoading}
           error={error}
           show={show}

           />
           <BackToTop/>
    </Fragment>)
}

export default Work;