/*
*Name : Animated Counter 
Description: Animted counter 
*/


import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedCounter = (props)=> {

   return(
   <CountUp end={props.end} duration={props.duration}>
   </CountUp>)
}

export default AnimatedCounter;