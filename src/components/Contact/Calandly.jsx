/**
 * Name: Calandly 
 * Description: able to book a meeting with Me using googe meet 
 */

import React from "react";
import { InlineWidget} from "react-calendly";

const Calandly = () => {
    return(<div>
         <InlineWidget url="https://calendly.com/nagpal-parshant8?hide_landing_page_details=1&hide_gdpr_banner=1"/>
        </div>)
}
export default Calandly;