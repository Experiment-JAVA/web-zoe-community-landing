import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionBlog";
import BlogSection from "../components/Blog/blogRight";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <BlogSection />
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
