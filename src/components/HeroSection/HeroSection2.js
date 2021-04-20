import React from "react";
import { connect } from "react-redux";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section className="hero-section pt-100 background-img"
        style={{
          backgroundImage: "url('img/hero-bg-1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover"
        }}>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-6">
                    <div className="hero-content-left text-white mt-5">
                        <h1 className="text-white"><span>We Deliver</span> your Product More Firster</h1>
                        <p className="lead">Quickly morph client-centric results through performance based applications.
                            Proactively facilitate professional human capital for cutting-edge.</p>

                        <a href="#download" className="btn app-store-btn">Download Now</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="hero-animation-img">
                        <img src="img/image-14.png" alt="img" className="img-fluid" />
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
  state
}))(HeroSection);
