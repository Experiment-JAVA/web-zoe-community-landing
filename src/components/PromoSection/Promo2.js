import React from "react";
import { connect } from "react-redux";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section className={"promo-section ptb-100 " + (this.props.removeTopMargin ? '' : 'mt-5')}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10">
                <div className="section-heading mb-5">
                  <span className="badge badge-primary badge-pill">
                    Key features
                  </span>
                  <h5 className="h5 mt-3 mb-6">
                    We will helps you to build beautiful websites that stand out
                    and automatically adapt to your style.
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-lg-0">
                <div className="card single-promo-card single-promo-hover">
                  <div className="card-body">
                    <div className="pb-2">
                      <span className="ti-credit-card icon-md color-secondary"></span>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5>Modular</h5>
                      <p className="text-muted mb-0">
                        All components are built to be used in any combination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card single-promo-card single-promo-hover mb-lg-0">
                  <div className="card-body">
                    <div className="pb-2">
                      <span className="ti-control-record icon-md color-secondary"></span>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5>Responsive</h5>
                      <p className="text-muted mb-0">
                        Quick is optimized to work for most devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card single-promo-card single-promo-hover mb-lg-0">
                  <div className="card-body">
                    <div className="pb-2">
                      <span className="ti-vector icon-md color-secondary"></span>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5>Scalable</h5>
                      <p className="text-muted mb-0">
                        Remain consistent while developing new features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card single-promo-card single-promo-hover mb-lg-0">
                  <div className="card-body">
                    <div className="pb-2">
                      <span className="ti-receipt icon-md color-secondary"></span>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5>Customizable</h5>
                      <p className="text-muted mb-0">
                        Change a few variables and the whole theme adapts.
                      </p>
                    </div>
                  </div>
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
}))(PromoSection);
