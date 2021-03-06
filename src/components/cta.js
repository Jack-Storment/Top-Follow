import React from "react"


import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Stay Updated"
      description="Follow @xqgl99 on Twitter for the latest updates!"
    />
    <Button>Get Early Access</Button>
  </div>
)

export default CallToAction
