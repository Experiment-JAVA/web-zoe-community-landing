import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      disableBtn: false,
      btnText: "Subscribe",
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
    const subscribeAction = subscribe(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(subscribeAction);

    // // added delay to change button text to previous
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
          email: "",
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
          className="hero-section ptb-100 background-img full-screen"
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
                <div className="hero-content-left text-white text-center">
                  <h1 className="text-white">Thank You !</h1>

                  <p className="lead">
                    We will be in touch shortly. We're looking forward to your
                    demo. If you have any questions prior to your demo feel free
                    to give us a call.
                  </p>

                  <div className="mb-5">
                    <h5 className="mb-0 text-white">
                      {" "}
                      <span className="ti-mobile mr-2 align-items-center"></span>{" "}
                      (612) 255-461
                    </h5>
                  </div>
                  <form
                    method="post"
                    className="subscribe-form text-center m-auto"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="d-flex align-items-center">
                      <input
                        value={this.state.email}
                        onChange={e => this.handleFormValueChange("email", e)}
                        type="text"
                        id="email"
                        name="email"
                        className="form-control input"
                        placeholder="info@yourdomain.com"
                        required
                      />
                      <input
                        type="submit"
                        className="button btn solid-btn"
                        id="submit"
                        value={this.state.btnText}
                        disabled={this.state.disableBtn}
                        onClick={() => {
                          this.changeBtnText("Subscribing...");
                        }}
                      />
                    </div>
                  </form>
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
