import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <nav className={"navbar navbar-expand-lg fixed-top " + (this.props.bgColor && this.props.bgColor === 'white' ? 'custom-nav white-bg' : 'bg-transparent')}>
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src={this.props.bgColor && this.props.bgColor === 'white' ? "img/logo-color-1x.png" : "img/logo-white-1x.png"}
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="ti-menu"></span>
              </button>

              <div
                className="collapse navbar-collapse main-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link page-scroll dropdown-toggle"
                      href="/#"
                      id="navbarDropdownHome"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <div
                      className="dropdown-menu submenu"
                      aria-labelledby="navbarDropdownHome"
                    >
                      <a className="dropdown-item" href="/theme1">
                        Demo Template 1
                      </a>
                      <a className="dropdown-item" href="/theme2">
                        Demo Template 2
                      </a>
                      <a className="dropdown-item" href="/theme3">
                        Demo Template 3
                      </a>
                      <a className="dropdown-item" href="/theme4">
                        Demo Template 4
                      </a>
                      <a className="dropdown-item" href="/theme5">
                        Demo Template 5
                      </a>
                      <a className="dropdown-item" href="/theme6">
                        Demo Template 6
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#screenshots">
                      Screenshots
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link page-scroll dropdown-toggle" href="/#" id="navbarDropdownPage" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Pages <span className="custom-nav-badge badge badge-danger badge-pill">New</span>
                      </a>
                      <div className="dropdown-menu submenu" aria-labelledby="navbarDropdownPage">
                          <a className="dropdown-item" href="login1">Login Page 1</a>
                          <a className="dropdown-item" href="login2">Login Page 2</a>
                          <a className="dropdown-item" href="signup1">Signup Page 1</a>
                          <a className="dropdown-item" href="signup2">Signup Page 2</a>
                          <a className="dropdown-item" href="resetPassword">Password Reset</a>
                          <a className="dropdown-item" href="changePassword">Change Password</a>
                          <a className="dropdown-item" href="download">Download Page</a>
                          <a className="dropdown-item" href="review">Review Page</a>
                          <a className="dropdown-item" href="faq">FAQ Page</a>
                          <a className="dropdown-item" href="404">404 Page</a>
                          <a className="dropdown-item" href="comingSoon">Coming Soon</a>
                          <a className="dropdown-item" href="thankyou">Thank You</a>
                          <a className="dropdown-item" href="team">Team Page</a>
                          <a className="dropdown-item" href="singleTeam">Team Single</a>
                      </div>
                  </li>
                  <li className="nav-item dropdown">
                        <a className="nav-link page-scroll dropdown-toggle" href="/#" id="navbarBlogPage" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog <span className="custom-nav-badge badge badge-danger badge-pill">New</span>
                        </a>

                        <div className="dropdown-menu submenu" aria-labelledby="navbarBlogPage">
                            <a className="dropdown-item" href="blog">Blog Grid</a>
                            <a className="dropdown-item" href="blogLeft">Blog Left Sidebar</a>
                            <a className="dropdown-item" href="blogRight">Details Right Sidebar</a>
                        </div>
                    </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(Header);
