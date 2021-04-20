import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection5";
import PromoSection from "../components/PromoSection/Promo2";
import AboutSection from "../components/AboutUs/AboutUs5";
import FeatureSection from "../components/Features/Feature2";
import VideoSection from "../components/Video";
import PricingSection from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Screenshots from "../components/Screenshots";
import TeamMember from "../components/TeamMember";
import ContactSection from "../components/Contact";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <PromoSection removeTopMargin={true} />
          <AboutSection />
          <VideoSection showDownloadBtn={true} />
          <FeatureSection bgColor="gray" />
          <PricingSection hideFaq={true} />
          <Screenshots />
          <TeamMember />
          <Testimonial bgColor="gray" />
          <ContactSection bgColor="white" />
          <TrustedCompany bgColor="gray" />
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
