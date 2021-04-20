import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionTeam";
import TeamSection from "../components/TeamMember/team";
import ContactSection from "../components/Contact";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import SubscribeSection from "../components/Subscribe";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <TeamSection />
          <ContactSection />
          <TrustedCompany />
        </div>
        <SubscribeSection />
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
