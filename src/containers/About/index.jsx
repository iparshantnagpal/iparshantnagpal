/**
 * Name : About
 * Description : COntains about page componenet
 */
import React, { Fragment } from "react";
import BlogsHistory from "../../components/About/BlogsHistory";
import ContributionGraph from "../../components/About/ContributionGraph";
import Experience from "../../components/About/Experience";
import Introduction from "../../components/About/Introduction";
import TechnologiesAndSkills from "../../components/About/TechnologiesAndSkills";
import { BackToTop } from "../../components/UIElements";

const About = () =>{
    return(<Fragment>
        <Introduction/>
        <ContributionGraph/>
        <BlogsHistory/>
        <Experience />
        <TechnologiesAndSkills/>
        <BackToTop/>
    </Fragment>)
}
export default About;