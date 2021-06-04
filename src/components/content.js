import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Minimal Features"
      description="TopFollow will allow Twitter users to curate collections of other Twitter users that they think are good follows according to niche categories they define."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>All of your interests in one place. With a community for each category.</h3>
        <p style={{ color: COLORS.gray }}>
          We make it easy to find what you're interested in. All of your favorite lists in one place with a community of people for each category. 
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
