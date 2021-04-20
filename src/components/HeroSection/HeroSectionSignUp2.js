import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/index";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      name: "",
      email: "",
      password: "",
      isAgreed: false,
      disableBtn: false,
      btnText: "Sign up",
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
    const signUpAction = signUp(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(signUpAction);

    // // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("Sign up");

        // get action again to update state
        const signUpAction = signUp(this.state);

        // Dispatch the contact from data
        this.props.dispatch(signUpAction);

        // clear form data
        this.setState({
          name: "",
          email: "",
          password: "",
          isAgreed: false,
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
                    backgroundImage: "url('img/hero-bg-2.jpg')",
                  }}
                >
                  <div className="position-absolute login-signup-content">
                    <div className="position-relative text-white col-md-12 col-lg-7">
                      <h2 className="text-white">Create Your Account</h2>
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
              <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5">
                <div className="login-signup-wrap px-4 px-lg-5 my-5">
                  <h1 className="text-center mb-1">Signup</h1>

                  <p className="text-muted text-center mb-5">
                    Free access to our dashboard.
                  </p>

                  <form
                    className="login-signup-form"
                    method="post"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <label className="pb-1">Your Name</label>
                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-user color-primary"></span>
                        </div>
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
                    </div>
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
                      <label className="pb-1">Password</label>
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
                      <label className="form-check-label small" htmlFor="ckbAgree">
                        I agree your <a href="/#">terms and conditions</a>
                      </label>
                    </div>
                    <button
                      className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                      id="signIn"
                      disabled={this.state.disableBtn}
                      onClick={() => {
                        this.changeBtnText("Signing Up...");
                      }}
                    >
                      {this.state.btnText}
                    </button>

                    <div className="text-center">
                      <small className="text-muted text-center">
                        Already have an account? <a href="login2">Log in</a>.
                      </small>
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
