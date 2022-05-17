/**
 * Description: Loading Project card
 * Name: LoadingProjectCard
 */

import React from "react";
import { Card, Placeholder } from "react-bootstrap";

const LoadingProjectCard = ()=>{
    return(
      <div>
        <Card>
          <div>
             <Placeholder animation="glow">
                <Placeholder xs={12}/>
             </Placeholder>
          </div>    
        </Card>  
    </div>)
}
export default LoadingProjectCard;