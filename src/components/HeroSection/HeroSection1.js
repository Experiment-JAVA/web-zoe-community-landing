import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";
import _data from "../../data";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      email: "",
      disableBtn: false,
      btnText: "Subscribe"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeBtnText = btnText => {
    this.setState({ btnText });
  };

  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  handleSubmit(event) {
    event.preventDefault();

    // disable the button
    this.setState({ disableBtn: true });

    // get action
    const subscribeAction = subscribe(this.state);

    // Dispatch the contact from data
    this.props.dispatch(subscribeAction);

    // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("Subscribe");

        // get action again to update state
        const subscribeAction = subscribe(this.state);

        // Dispatch the contact from data
        this.props.dispatch(subscribeAction);

        // clear form data
        this.setState({
          email: ""
        });
      }.bind(this),
      3000
    );
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      hero: _data.hero
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="hero-section pt-100 background-img"
          style={{
            backgroundImage: `url(${this.state.hero.bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between py-5">
              <div className="col-md-7 col-lg-6">
                <div className="hero-content-left text-white">
                  <h1 className="text-white">
                    <span>ZOE Community</span> 
                  </h1>
                  <p className="lead">
                    {this.state.hero.description}
                  </p>

                    
                      <button
                        type="submit"
                        className="button btn solid-btn"
                        id="submit"
                        value={this.state.btnText}
                        disabled={this.state.disableBtn}
                        onClick={() => {
                          this.changeBtnText("Subscribing...");
                        }}
                      />
                    

                  <div className="video-promo-content py-4 d-flex align-items-center">
                    <a
                      href="https://www.youtube.com/watch?v=9No-FiEInLA"
                      className="popup-youtube video-play-icon-without-bip video-play-icon mr-3"
                    >
                      <span className="ti-control-play"></span>
                    </a>{" "}
                    Watch Video Overview
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="hero-animation-img">
                  <img
                    src="img/app-product.png"
                    alt="app"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-img-absolute">
            <img
              src="img/hero-bg-shape-1.svg"
              alt="wave shape"
              className="img-fluid"
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(HeroSection);
