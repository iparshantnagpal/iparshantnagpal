/**
 * Component Name : App.js
 * Description: contains router information 
 */


import React, {Fragment, lazy} from "react";
import { BrowserRouter as Router, 
  Routes,
  Route,
  Navigate
 } from "react-router-dom";
import CampaignBanner from "./components/CampaignBanner";
import Footer from "./components/Footer";
import Navigation from "./components/Header/Navigation";
import { LoadingSpinner } from "./components/UIElements";


/**
 * Lazy loading of componenets 
 */
const Home = lazy(() => import("./containers/Home/Home"));
const Work = lazy(()=>import("./containers/Work"));
const ProjectDetails = lazy(()=>import("./components/Work/Projects/ProjectDetails"));
const AllProjects = lazy(()=>import("./components/Work/Projects/AllProjects"));
const About = lazy(()=>import("./containers/About"));
const Contact = lazy(()=>import("./containers/Contact"));




function App() {
  return (
    <Fragment>
      <Router>
      <CampaignBanner/>
      <Navigation/>
       <React.Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route  path="/portfolio" element={<Home/>}/>  
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/work/projects" element={<AllProjects/>}/>
            <Route path="/work/projects/:repoName" element={<ProjectDetails/>}/>
          </Routes> 
       </React.Suspense>
      <Footer/>
      </Router>
    </Fragment>
  );
}

export default App;
