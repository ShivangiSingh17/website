import PropTypes from "prop-types"
import React from "react"

import facebook from "../../images/icons/facebook.png"
import instagram from "../../images/icons/instagram.png"
import twitter from "../../images/icons/twitter.png"
import linkedin from "../../images/icons/linkedin.png"
import github from "../../images/icons/github.png"

const SocialIcon = ({ name, link }) => (
  <a href={link} className="social-icon">
    {name === "facebook" ? <img src={facebook} alt={name} /> : null}
    {name === "twitter" ? <img src={twitter} alt={name} /> : null}
    {name === "instagram" ? <img src={instagram} alt={name} /> : null}
    {name === "linkedin" ? <img src={linkedin} alt={name} /> : null}
    {name === "github" ? <img src={github} alt={name} /> : null}
  </a>
)

SocialIcon.propTypes = {
  name: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "github",
    "web",
  ]),
  link: PropTypes.string,
}

SocialIcon.defaultProps = {
  name: `web`,
  link: `#`,
}

export default SocialIcon
