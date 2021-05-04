import React from "react"
import PropTypes from "prop-types"

const NPM = ({ color }) => {
  return (
    <svg viewBox="0 0 27.23 27.23">
      <rect fill={color} width="27.23" height="27.23" rx="2"></rect>
      <polygon
        fill="#fff"
        points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"
      ></polygon>
    </svg>
  )
}

NPM.propTypes = {
  color: PropTypes.string,
}

NPM.defaultProps = {
  color: "#000000",
}

export default NPM
