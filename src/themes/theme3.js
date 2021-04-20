import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection3";
import PromoSection from "../components/PromoSection";
import AboutSection from "../components/AboutUs";
import FeatureSection from "../components/Features/Feature3";
import VideoSection from "../components/Video";
import PricingSection from "../components/Pricing/Price3";
import Screenshots from "../components/Screenshots";
import TeamMember from "../components/TeamMember";
import ContactSection from "../components/Contact";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import SubscribeSection from "../components/Subscribe";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header bgColor="white" />
        <div className="main">
          <HeroSection />
          <PromoSection />
          <AboutSection />
          <FeatureSection />
          <VideoSection />
          <PricingSection hideFaq={true} />
          <Screenshots />
          <TeamMember />
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
