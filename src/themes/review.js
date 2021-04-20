import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionReview";
import ReviewSection from "../components/Review";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <ReviewSection />
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
