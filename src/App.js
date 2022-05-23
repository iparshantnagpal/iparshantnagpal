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
import AllProjects from "./components/Work/Projects/AllProjects";
import ProjectDetails from "./components/Work/Projects/ProjectDetails";
import Work from "./containers/Work";


/**
 * Lazy loading of componenets 
 */
const Home = lazy(() => import("./containers/Home/Home"));


function App() {
  return (
    <Fragment>
      <Router>
      <CampaignBanner/>
      <Navigation/>
       <React.Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route  path="/portfolio" element={<Home/>}/>  
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
