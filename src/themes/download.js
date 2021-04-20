import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionDownload";
import DownloadSection from "../components/Download/download";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <DownloadSection />
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
