import React from "react";

class About extends React.Component {
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
        <section id="about" className="about-us ptb-100 gray-light-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="about-content-left section-heading">
                  <h2>
                    Use your android or ios device <br />
                    <span>to manage everything.</span>
                  </h2>

                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap d-flex align-items-center mb-2">
                      <div className="mr-3 icon-box">
                        <img
                          src="img/image-icon-1.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                        Proactively syndicate open-source e-markets after
                        low-risk high-yield synergy. Professionally simplify
                        visionary technology.
                      </p>
                    </div>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="mr-3 icon-box">
                        <img
                          src="img/image-icon-2.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                        Intrinsicly aggregate cutting-edge internal or "organic"
                        sources through pandemic manufactured products.
                        Synergistically.
                      </p>
                    </div>
                    <p></p>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="mr-3 icon-box">
                        <img
                          src="img/image-icon-3.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                        Completely administrate empowered e-tailers after
                        extensive experiences. Holisticly leverage existing
                        quality networks.
                      </p>
                    </div>
                    <p></p>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="mr-3 icon-box">
                        <img
                          src="img/image-icon-4.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                        Intrinsicly incentivize functionalized metrics whereas
                        go forward networks. Collaboratively fabricate
                        clicks-and-mortar intellectual.
                      </p>
                    </div>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-content-right d-flex justify-content-center justify-content-lg-end justify-content-md-end">
                  <img
                    src="img/image-14.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
