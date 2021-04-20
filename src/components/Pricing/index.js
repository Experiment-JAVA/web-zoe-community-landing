import React from "react";
import _data from "../../data";

export default class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="overflow-hidden">
          <section
            id="pricing"
            className={"package-section ptb-100 " + (this.props.bgColor && this.props.bgColor === 'gray' ? 'gray-light-bg' : 'background-shape-right')} >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="section-heading text-center mb-5">
                    {this.props.showTitle && this.props.showTitle === true && (
                      <span className="badge badge-primary badge-pill">
                        Our Pricing Package
                      </span>
                    )}
                    <h2>
                      Afforadble Pricing and Packages <br />
                      <span>choose your best one</span>
                    </h2>
                    <p className="lead">
                      Monotonectally grow strategic process improvements
                      vis-a-vis integrated resources.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {(this.state.price.packages || []).map((_package, index) => {
                  return (
                    <div className="col-lg-4 col-md" key={index}>
                      <div
                        className={
                          "card text-center single-pricing-pack " +
                          (_package.isFeatured ? "popular-price" : "")
                        }
                      >
                        <div className="pt-4">
                          <h5>{_package.license}</h5>
                        </div>
                        <div className="pricing-img mt-4">
                          <img
                            src="img/basic.svg"
                            alt="pricing img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-header py-4 border-0 pricing-header">
                          <div className="h1 text-center mb-0">
                            <span className="price font-weight-bolder">
                              {_package.price}
                            </span>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                            {(_package.features || []).map(feature => {
                              return <li key={feature}>{feature}</li>;
                            })}
                          </ul>
                          <a
                            href="/#"
                            className={
                              "btn mb-3 " +
                              (_package.isFeatured
                                ? "solid-btn"
                                : "outline-btn")
                            }
                            target="_blank"
                          >
                            Purchase now
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 text-center">
                <p className="mb-2">
                  If you need custom services or Need more?{" "}
                  <a href="/#" className="color-secondary">
                    Contact us
                  </a>
                </p>
              </div>
              {!(this.props.hideFaq && this.props.hideFaq === true) && this.props.theme !== "four" && (
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div id="accordion-1" className="accordion accordion-faq">
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-1-1"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-1-1"
                          aria-expanded="false"
                          aria-controls="collapse-1-1"
                        >
                          <h6 className="mb-0">
                            <span className="ti-receipt mr-3"></span> Which
                            license do I need?
                          </h6>
                        </div>
                        <div
                          id="collapse-1-1"
                          className="collapse"
                          aria-labelledby="heading-1-1"
                          data-parent="#accordion-1"
                        >
                          <div className="card-body">
                            <p>
                              Uniquely leverage other's distinctive
                              infomediaries rather than leveraged supply chains.
                              Continually seize distributed collaboration and
                              idea-sharing whereas user.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-1-2"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-1-2"
                          aria-expanded="false"
                          aria-controls="collapse-1-2"
                        >
                          <h6 className="mb-0">
                            <span className="ti-gallery mr-3"></span> How do I
                            get access to a theme?
                          </h6>
                        </div>
                        <div
                          id="collapse-1-2"
                          className="collapse"
                          aria-labelledby="heading-1-2"
                          data-parent="#accordion-1"
                        >
                          <div className="card-body">
                            <p>
                              Rapidiously incentivize virtual e-commerce and
                              exceptional e-tailers. Progressively network
                              focused catalysts for change without orthogonal
                              benefits. Dramatically empower.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-1-3"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-1-3"
                          aria-expanded="false"
                          aria-controls="collapse-1-3"
                        >
                          <h6 className="mb-0">
                            <span className="ti-wallet mr-3"></span> How do I
                            see previous orders?
                          </h6>
                        </div>
                        <div
                          id="collapse-1-3"
                          className="collapse"
                          aria-labelledby="heading-1-3"
                          data-parent="#accordion-1"
                        >
                          <div className="card-body">
                            <p>
                              Proactively monetize long-term high-impact
                              innovation and scalable relationships. Dynamically
                              mesh principle-centered functionalities before
                              next-generation best practices. Distinctively
                              empower.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div id="accordion-2" className="accordion accordion-faq">
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-2-1"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-2-1"
                          aria-expanded="false"
                          aria-controls="collapse-2-1"
                        >
                          <h6 className="mb-0">
                            <span className="ti-receipt mr-3"></span> Which
                            license do I need?
                          </h6>
                        </div>
                        <div
                          id="collapse-2-1"
                          className="collapse"
                          aria-labelledby="heading-2-1"
                          data-parent="#accordion-2"
                        >
                          <div className="card-body">
                            <p>
                              Distinctively recaptiualize customer directed
                              channels before installed base communities.
                              Continually disintermediate distinctive web
                              services vis-a-vis team building e-commerce.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-2-2"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-2-2"
                          aria-expanded="false"
                          aria-controls="collapse-2-2"
                        >
                          <h6 className="mb-0">
                            <span className="ti-lock mr-3"></span> How do I get
                            access to a theme?
                          </h6>
                        </div>
                        <div
                          id="collapse-2-2"
                          className="collapse"
                          aria-labelledby="heading-2-2"
                          data-parent="#accordion-2"
                        >
                          <div className="card-body">
                            <p>
                              Quickly recaptiualize revolutionary meta-services
                              and multimedia based channels. Seamlessly impact
                              diverse deliverables rather than cooperative
                              strategic theme areas.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-2-3"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-2-3"
                          aria-expanded="false"
                          aria-controls="collapse-2-3"
                        >
                          <h6 className="mb-0">
                            <span className="ti-widget mr-3"></span> How do I
                            see previous orders?
                          </h6>
                        </div>
                        <div
                          id="collapse-2-3"
                          className="collapse"
                          aria-labelledby="heading-2-3"
                          data-parent="#accordion-2"
                        >
                          <div className="card-body">
                            <p>
                              Efficiently supply B2B networks vis-a-vis
                              best-of-breed schemas. Dramatically parallel task
                              reliable technology with cross functional core
                              competencies. Phosfluorescently.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!(this.props.hideFaq && this.props.hideFaq === true) && this.props.theme === "four" && (
                <div className="row pt-5">
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>How can I pay for this?</h5>
                      <p>
                        Intrinsicly implement high standards in strategic theme
                        areas via inexpensive solutions. Assertively
                        conceptualize prospective bandwidth whereas client-based
                        imperatives.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Is it possible to pay yearly?</h5>
                      <p>
                        Assertively iterate user friendly innovation without
                        open-source markets. Monotonectally extend resource
                        sucking manufactured products without high-payoff
                        paradigms. Objectively customize ubiquitous information
                        before economically sound relationships.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Do you offer discounts on multiple items?</h5>
                      <p>
                        Dramatically target focused testing procedures after
                        holistic ideas. Collaboratively maximize high-payoff ROI
                        and value-added products. Distinctively deliver
                        cooperative collaboration and idea-sharing whereas
                        customized
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Is VAT included in plan prices?</h5>
                      <p>
                        Distinctively simplify high-quality initiatives for
                        highly efficient applications. Monotonectally repurpose
                        integrated customer service after magnetic e-services.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Will I pay more for some features?</h5>
                      <p>
                        Enthusiastically pontificate resource-leveling supply
                        chains whereas scalable markets. Authoritatively
                        streamline resource maximizing methods of empowerment
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>
                        Why are there no limits on the number of messages?
                      </h5>
                      <p>
                        Assertively target turnkey ideas for market-driven
                        portals. Appropriately e-enable world-class intellectual
                        capital whereas 2.0 mindshare.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
