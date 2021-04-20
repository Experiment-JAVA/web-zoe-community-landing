import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/index";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      email: "",
      password: "",
      disableBtn: false,
      btnText: "Sign In",
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
    const loginAction = login(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(loginAction);

    // // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("Sign In");

        // get action again to update state
        const loginAction = login(this.state);

        // Dispatch the contact from data
        this.props.dispatch(loginAction);

        // clear form data
        this.setState({
          email: "",
          password: "",
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
                    backgroundImage: "url('img/hero-bg-1.jpg')",
                  }}
                >
                  <div className="position-absolute login-signup-content">
                    <div className="position-relative text-white col-md-12 col-lg-7">
                      <h2 className="text-white">Welcome Back !</h2>
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
                  <h1 className="text-center mb-1">Sign In</h1>
                  <p className="text-center mb-5">
                    Free access to our dashboard.
                  </p>

                  <form
                    className="login-signup-form"
                    method="post"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <label className="pb-1">Email Address</label>
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
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <label className="pb-1">Password</label>
                        </div>
                        <div className="col-auto">
                          <a
                            href="password-reset.html"
                            className="form-text small text-muted"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-lock color-primary"></span>
                        </div>
                        <input
                          value={this.state.password}
                          onChange={e =>
                            this.handleFormValueChange("password", e)
                          }
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </div>

                    <button
                      className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                      id="signIn"
                      disabled={this.state.disableBtn}
                      onClick={() => {
                        this.changeBtnText("Signing...");
                      }}
                    >
                      {this.state.btnText}
                    </button>

                    <p className="text-center">
                      <small className="text-muted text-center">
                        Don't have an account yet?{" "}
                        <a href="signup2">Sign up</a>.
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
