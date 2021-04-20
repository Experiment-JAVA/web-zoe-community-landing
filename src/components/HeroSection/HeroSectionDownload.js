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
          className="hero-section pt-100 background-img"
          style={{
            backgroundImage: "url('img/hero-bg-1.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9 col-lg-7">
                <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                  <h1 className="text-white mb-0">Download</h1>
                  <div className="custom-breadcrumb">
                    <ol className="breadcrumb d-inline-block bg-transparent list-inline py-0">
                      <li className="list-inline-item breadcrumb-item">
                        <a href="/#">Home</a>
                      </li>
                      <li className="list-inline-item breadcrumb-item">
                        <a href="/#">Pages</a>
                      </li>
                      <li className="list-inline-item breadcrumb-item active">
                        Download
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="list-inline counter-wrap">
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>2305</span>
                    <h6>Happy Client</h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>2145</span>
                    <h6>App Download</h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>2345</span>
                    <h6>Total Rates</h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>2245</span>
                    <h6>Awards win</h6>
                  </div>
                </li>
              </ul>
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
