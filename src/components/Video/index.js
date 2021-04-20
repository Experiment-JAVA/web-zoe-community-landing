import React from "react";
import { connect } from "react-redux";

class Video extends React.Component {
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
          id="download"
          className="video-promo ptb-100 background-img"
          style={{
            backgroundImage: "url('img/video-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="video-promo-content mt-4 text-center">
                  <a
                    href="https://www.youtube.com/watch?v=9No-FiEInLA"
                    className="popup-youtube video-play-icon d-inline-block"
                  >
                    <span className="ti-control-play"></span>{" "}
                  </a>
                  <h5 className="mt-4 text-white">Watch video overview</h5>
                  {this.props.showDownloadBtn &&
                    this.props.showDownloadBtn === true && (
                      <div className="download-btn mt-5">
                        <a href="/#" className="btn google-play-btn mr-3">
                          <span className="ti-android"></span> Google Play
                        </a>
                        <a href="/#" className="btn app-store-btn">
                          <span className="ti-apple"></span> App Store
                        </a>
                      </div>
                    )}
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
}))(Video);
