import React from "react";
import { connect } from "react-redux";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="hero-section ptb-100 background-img full-screen"
          style={{
            backgroundImage: "url('img/app-hero-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9 col-lg-7">
                <div className="error-content text-center text-white">
                  <div className="notfound-404">
                    <h1 className="text-white">404</h1>
                  </div>
                  <h3 className="text-white">Sorry, something went wrong</h3>
                  <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                  </p>
                  <a className="btn app-store-btn" href="/">
                    Go to Homepage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state,
}))(HeroSection);
