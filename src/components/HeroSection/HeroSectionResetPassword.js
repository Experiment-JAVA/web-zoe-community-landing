import React from "react";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/index";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      email: "",
      disableBtn: false,
      btnText: "Reset Password",
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
    const resetPasswordAction = resetPassword(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(resetPasswordAction);

    // // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("Reset Password");

        // get action again to update state
        const resetPasswordAction = resetPassword(this.state);

        // Dispatch the contact from data
        this.props.dispatch(resetPasswordAction);

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
        <section className="hero-section full-screen gray-light-bg">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
                <div
                  className="bg-cover vh-100 ml-n3 background-img"
                  style={{
                    backgroundImage: "url('img/hero-bg-3.jpg')",
                  }}
                >
                  <div className="position-absolute login-signup-content">
                    <div className="position-relative text-white col-md-12 col-lg-7">
                      <h2 className="text-white">
                        Forgot Password ? <br /> Don't Worry You Can Reset
                      </h2>
                      <p className="lead">
                        Keep your face always toward the sunshine - and shadows
                        will fall behind you. Continually pursue fully
                        researched niches whereas timely platforms. Credibly
                        parallel task optimal catalysts for change after focused
                        catalysts for change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                <div className="login-signup-wrap px-4 px-lg-5 my-5">
                  <h1 className="text-center mb-1">Password Reset</h1>
                  <p className="text-muted text-center mb-5">
                    Enter your email to get a password reset link.
                  </p>

                  <form
                    className="login-signup-form"
                    method="post"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-email color-primary"></span>
                        </div>
                        <input
                          value={this.state.email}
                          onChange={e => this.handleFormValueChange("email", e)}
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="name@yourdomain.com"
                          required
                        />
                      </div>
                    </div>

                    <button
                      className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                      id="signIn"
                      disabled={this.state.disableBtn}
                      onClick={() => {
                        this.changeBtnText("Sending...");
                      }}
                    >
                      {this.state.btnText}
                    </button>

                    <p className="text-center">
                      <small className="text-muted text-center">
                        Remember your password? <a href="login1">Log in</a>.{" "}
                      </small>
                    </p>
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
