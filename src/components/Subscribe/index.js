import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";
import _data from "../../data";

class Subscribe extends React.Component {
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
        <div className="shape-img subscribe-wrap">
          <img
            src="img/footer-top-shape.png"
            alt="footer shape"
            className="img-fluid"
          />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form
                  method="post"
                  className="subscribe-form subscribe-form-footer d-none d-md-block d-lg-block"
                  onSubmit={this.handleSubmit}
                >
                  <div className="d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control input"
                      id="email-footer"
                      name="email"
                      placeholder="info@yourdomain.com"
                      value={this.state.email}
                      onChange={e => this.handleFormValueChange("email", e)}
                    />
                    <input
                      type="submit"
                      className="button btn solid-btn"
                      id="submit-footer"
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
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(Subscribe);
