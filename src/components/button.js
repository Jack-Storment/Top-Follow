import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"
import "../pages/app"

const Button = ({ children }) => (
  <button onClick={clickButton}
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 700,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
    }}
  >
    {children}
  </button>
)

const clickButton = (e) => {
 e.preventDefault();
 console.log('button working');
}

export default Button
