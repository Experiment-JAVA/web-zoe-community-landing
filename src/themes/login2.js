import React, { Component } from "react";

import HeroSection from "../components/HeroSection/HeroSectionLogin2";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <HeroSection />
        </div>  
      </React.Fragment>
    );
  }
}

export default Login;
