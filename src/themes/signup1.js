import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionSignUp1";

class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
        </div>  
      </React.Fragment>
    );
  }
}

export default SignUp;
