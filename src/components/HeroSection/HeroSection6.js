import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../../actions/index";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      trustedCompany: [],
      video: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      isAgreed: false,
      disableBtn: false,
      btnText: "Send"
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

    // // get action
    const quoteAction = getQuote(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(quoteAction);

    // // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("Send");

        // get action again to update state
        const quoteAction = getQuote(this.state);

        // Dispatch the contact from data
        this.props.dispatch(quoteAction);

        // clear form data
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: "",
          isAgreed: false
        });
      }.bind(this),
      3000
    );
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
          className="hero-section background-img pt-100"
          style={{
            backgroundImage: "url('img/hero-bg-4.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content-left position-relative mt-lg-0 mt-md-0 mt-5 text-white">
                  <h1 className="text-white">
                    <span>Build anything</span> That you want
                  </h1>
                  <p className="lead">
                    Progressively monetize cost effective innovation vis-a-vis
                    cross-unit infrastructures. Uniquely e-enable front-end core
                    competencies vis-a-vis premier.
                  </p>

                  <div className="video-promo-content mt-4 d-flex align-items-center">
                    <a
                      href="https://www.youtube.com/watch?v=9No-FiEInLA"
                      className="popup-youtube video-play-icon"
                    >
                      <span className="ti-control-play"></span>{" "}
                    </a>
                    <span className="ml-4">Watch video overview</span>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="sign-up-form-wrap position-relative rounded p-5 gray-light-bg mt-5">
                  <div className="sign-up-form-header text-center mb-4">
                    <h4 className="mb-0">Get a quote today</h4>
                    <p>Get response within 24 hours</p>
                  </div>
                  <form
                    method="post"
                    className="sign-up-form"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group input-group">
                      <input
                        value={this.state.name}
                        onChange={e => this.handleFormValueChange("name", e)}
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group input-group">
                      <input
                        value={this.state.email}
                        onChange={e => this.handleFormValueChange("email", e)}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="form-group input-group">
                      <input
                        value={this.state.subject}
                        onChange={e => this.handleFormValueChange("subject", e)}
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Enter subject"
                        required
                      />
                    </div>
                    <div className="form-group input-group">
                      <textarea
                        onChange={e => this.handleFormValueChange("message", e)}
                        value={this.state.message}
                        name="message"
                        id="msg"
                        className="form-control"
                        placeholder="Write your message"
                        cols="30"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        onClick={() => {
                          this.changeBtnText("Sending...");
                        }}
                        disabled={this.state.disableBtn}
                        type="submit"
                        name="submit"
                        id="submit"
                        className="btn solid-btn btn-block"
                        value={this.state.btnText}
                      />
                    </div>
                    <div className="form-check d-flex align-items-center text-center">
                      <input
                        checked={this.state.isAgreed}
                        onChange={e =>
                          this.handleFormValueChange("isAgreed", e)
                        }
                        type="checkbox"
                        name="isAgreed"
                        className="form-check-input mt-0 mr-3"
                        id="ckbAgree"
                      />
                      <label className="form-check-label" htmlFor="ckbAgree">
                        I agree your <a href="/#">terms & conditions</a>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="section-shape position-absolute">
            <img src="img/wave-shap.svg" alt="shape" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(HeroSection);
