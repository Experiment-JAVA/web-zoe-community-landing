import React, { Component } from "react";
import { connect } from "react-redux";
import { submitContact } from "../../actions/index";

class ContactUsPageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      disableContactBtn: false,
      contactBtnText: "Send Message"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeBtnText = contactBtnText => {
    this.setState({ contactBtnText });
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
    this.setState({ disableContactBtn: true });

    // get action
    const contactAction = submitContact(this.state);

    // Dispatch the contact from data
    this.props.dispatch(contactAction);

    // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableContactBtn: false });

        // change to button name
        this.changeBtnText("Send Message");

        // get action again to update state
        const contactAction = submitContact(this.state);

        // Dispatch the contact from data
        this.props.dispatch(contactAction);

        // clear form data
        this.setState({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      }.bind(this),
      3000
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="contact-us-section ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-9">
                <div className="section-heading mb-4">
                  <h2>Reach us quickly</h2>
                  <p className="lead">
                    We provide professional services for grow your business and
                    increases sell digital product. Increase sales by showing
                    true dynamics of your website.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <form
                  method="POST"
                  id="contactForm1"
                  className="contact-us-form"
                  noValidate="novalidate"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          value={this.state.name}
                          onChange={e => this.handleFormValueChange("name", e)}
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Enter name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          value={this.state.company}
                          onChange={e =>
                            this.handleFormValueChange("company", e)
                          }
                          type="text"
                          name="company"
                          size="40"
                          className="form-control"
                          id="company"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          value={this.state.email}
                          onChange={e => this.handleFormValueChange("email", e)}
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          value={this.state.phone}
                          onChange={e => this.handleFormValueChange("phone", e)}
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          onChange={e =>
                            this.handleFormValueChange("message", e)
                          }
                          value={this.state.message}
                          name="message"
                          id="message"
                          className="form-control"
                          rows="7"
                          cols="25"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-3">
                      <button
                        type="submit"
                        className="btn solid-btn"
                        id="btnContactUs"
                        disabled={this.state.disableContactBtn}
                        onClick={() => {
                          this.changeBtnText("Sending...");
                        }}
                      >
                        {this.state.contactBtnText}
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-message"></p>
              </div>
              <div className="col-md-5">
                <div className="contact-info-wrap">
                  <ul className="list-creative">
                    <li>
                      <dl className="list-terms-medium address">
                        <dt>Address</dt>
                        <dd>
                          <p>
                            212 Prospect Ave, Brooklyn, New York <br /> United
                            States{" "}
                          </p>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl className="list-terms-medium phone">
                        <dt>Phones</dt>
                        <dd>
                          <ul className="list-comma">
                            <li>
                              Support:{" "}
                              <a href="tel:+1-800-700-6200">+1-800-700-6200 </a>
                            </li>
                            <li>
                              Sales:{" "}
                              <a href="tel:+1-800-955-4567">+1-800-955-4567</a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl className="list-terms-medium email">
                        <dt>E-mails</dt>
                        <dd>
                          <ul className="list-comma">
                            <li>
                              Support:{" "}
                              <a href="mailto:support@yourdomain.com">
                                support@yourdomain.com
                              </a>
                            </li>
                            <li>
                              Query:{" "}
                              <a href="mailto:query@yourdomain.com">
                                query@yourdomain.com
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                  </ul>
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
}))(ContactUsPageSection);
