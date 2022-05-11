/**
 * Name : CampaignBanner
 * Descrption: Contains campaign Banner
 */
import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "react-router-dom"
import "./index.scss"

const CampaignBanner = (props) => {
  return(
      <div className="banner">
          <p>
              Open for Opurtunities{" "}
              <Link to="/contact">
                Contact Me <AiOutlineArrowRight/>
              </Link>
          </p>
      </div>
  )
}
export default CampaignBanner;