import React, { useEffect, useState } from "react";
import Hero from "../../components/Home/Hero";
import { BackToTop } from "../../components/UIElements";
import useHttpClient from "../../common/hooks/http-hook";
import Content from "../../components/Home/Content";


const Home = () => {
const {isLoading , error , sendRequest}  = useHttpClient();
const [projects, setProjects] = useState([])

  useEffect(()=>{
     const fetchData = async () => {
          try{
              const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/project/projects`);
            setProjects(responseData);
            }catch(err){
          }
     }
      fetchData();
  },[sendRequest])

    return(<div>
        <Hero/>
         <Content  projects={projects}  isLoading={isLoading} error={error} />
        <BackToTop/>
    </div>)
}
export default Home;