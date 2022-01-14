import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection1";
import PromoSection from "../components/PromoSection";
import AboutSection from "../components/AboutUs";
import FeatureSection from "../components/Features";
import DownloadSection from "../components/Download";
import PricingSection from "../components/Pricing";
import Testimonial from "../components/Testimonial";
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
        <Header />
        <div className="main">
          <HeroSection />
           {/* <PromoSection />
          <AboutSection />
          <FeatureSection />
          <DownloadSection />
          <PricingSection hideFaq={false} />
          <Testimonial />
          <Screenshots />
          <TeamMember />
          <ContactSection />
          <TrustedCompany /> */}
        </div>
       {/*  <SubscribeSection /> */}
        <FooterSection /> 
        
      </React.Fragment>
    );
  }
}

export default Theme;
