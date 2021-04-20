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
          className="hero-section background-img"
          style={{
            backgroundImage: "url('img/hero-bg-2.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="video-section-wrap">
            <div className="background-video-overly ptb-100">
              <div
                className="player"
                data-property="{videoURL:'https://www.youtube.com/watch?v=gOqlwlQjVis',containment:'.video-section-wrap', quality:'highres', autoPlay:true, showControls: false, startAt:0, mute:true, opacity: 1}"
              ></div>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-8 col-lg-7">
                    <div className="hero-content-left text-white text-center mt-5 ptb-100">
                      <h1 className="text-white">Build anything you want</h1>
                      <p className="lead">
                        We offer Digital Marketing / SEO in Kalawad Road Rajkot,
                        Gujarat. Find here details about our company.{" "}
                      </p>

                      <a href="#contact" className="btn google-play-btn page-scroll">
                        Contact with us
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-between">
                  <div className="col-md-12">
                    <div className="client-section-wrap d-flex flex-row align-items-center">
                      <p className="lead mr-5 mb-0 text-white">
                        Trusted by companies like:
                      </p>
                      <ul className="list-inline justify-content-between">
                        <li className="list-inline-item">
                          <img
                            src="img/client-1-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="img/client-2-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="img/client-3-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="img/client-4-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="img/client-5-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
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
  state
}))(HeroSection);
