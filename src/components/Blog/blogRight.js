import React, { Component } from "react";
import { connect } from "react-redux";
import { search, comment } from "../../actions/index";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      url: "",
      comment: "",
      searchData: "",
      disableBtn: false,
      btnText: "Post Comment",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleComment = this.handleComment.bind(this);
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

  handleComment(event) {
    event.preventDefault();

    // disable the button
    this.setState({ disableBtn: true });

    // // get action
    const commentAction = comment(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(commentAction);

    // // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("Post Comment");

        // get action again to update state
        const commentAction = comment(this.state);

        // Dispatch the contact from data
        this.props.dispatch(commentAction);

        // clear form data
        this.setState({
          name: "",
          email: "",
          url: "",
          comment: "",
        });
      }.bind(this),
      3000
    );
  }

  handleSearch(event) {
    event.preventDefault();

    // get action
    const searchAction = search(this.state);

    // Dispatch the contact from data
    this.props.dispatch(searchAction);

    // // added delay to change button text to previous
    setTimeout(
      function() {
        // get action again to update state
        const searchAction = search(this.state);

        // Dispatch the contact from data
        this.props.dispatch(searchAction);

        // clear form data
        this.setState({
          searchData: "",
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
        <div className="module ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <article className="post">
                  <div className="post-preview">
                    <img
                      src="img/blog/1-w.jpg"
                      alt="article"
                      className="img-fluid"
                    />
                  </div>
                  <div className="post-wrapper">
                    <div className="post-header">
                      <h1 className="post-title">Minimalist Chandelier</h1>
                      <ul className="post-meta">
                        <li>November 18, 2016</li>
                        <li>
                          In <a href="/#">Branding</a>, <a href="/#">Design</a>
                        </li>
                        <li>
                          <a href="/#">3 Comments</a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-content">
                      <p>
                        Meh synth Schlitz, tempor duis single-origin coffee ea
                        next level ethnic fingerstache fanny pack nostrud.
                        Seitan High Life reprehenderit consectetur cupidatat
                        kogi about me. Photo booth anim 8-bit hella, PBR 3 wolf
                        moon beard Helvetica. Salvia esse nihil, flexitarian
                        Truffaut synth art party deep v chillwave. Seitan High
                        Life reprehenderit consectetur cupidatat kogi.
                      </p>
                      <p>
                        Exercitation photo booth stumptown tote bag Banksy, elit
                        small batch freegan sed. Craft beer elit seitan
                        exercitation, photo booth et 8-bit kale chips proident
                        chillwave deep v laborum. Aliquip veniam delectus, Marfa
                        eiusmod Pinterest in do umami readymade swag. Selfies
                        iPhone Kickstarter, drinking vinegar jean shorts fixie
                        consequat flexitarian four loko.
                      </p>
                      <blockquote className="blockquote">
                        <p>
                          To be yourself in a world that is constantly trying to
                          make you something else is the greatest
                          accomplishment.
                        </p>
                        <footer className="blockquote-footer">
                          Amanda Pollock, Google Inc.
                        </footer>
                      </blockquote>
                      <p>
                        Meh synth Schlitz, tempor duis single-origin coffee ea
                        next level ethnic fingerstache fanny pack nostrud.
                        Seitan High Life reprehenderit consectetur cupidatat
                        kogi about me. Photo booth anim 8-bit hella, PBR 3 wolf
                        moon beard Helvetica.
                      </p>
                      <p>
                        Meh synth Schlitz, tempor duis single-origin coffee ea
                        next level ethnic fingerstache fanny pack nostrud.
                        Seitan High Life reprehenderit consectetur cupidatat
                        kogi about me. Photo booth anim 8-bit hella, PBR 3 wolf
                        moon beard Helvetica. Salvia esse nihil, flexitarian
                        Truffaut synth art party deep v chillwave. Seitan High
                        Life reprehenderit consectetur cupidatat kogi.
                      </p>
                      <ol>
                        <li>Digital Strategy</li>
                        <li>Software Development</li>
                        <li>Interaction Design</li>
                      </ol>
                      <p>
                        Meh synth Schlitz, tempor duis single-origin coffee ea
                        next level ethnic fingerstache fanny pack nostrud.
                        Seitan High Life reprehenderit consectetur cupidatat
                        kogi about me. Photo booth anim 8-bit hella, PBR 3 wolf
                        moon beard Helvetica.
                      </p>
                      <p>
                        Exercitation photo booth stumptown tote bag Banksy, elit
                        small batch freegan sed. Craft beer elit seitan
                        exercitation, photo booth et 8-bit kale chips proident
                        chillwave deep v laborum. Aliquip veniam delectus, Marfa
                        eiusmod Pinterest in do umami readymade swag. Selfies
                        iPhone Kickstarter, drinking vinegar jean shorts fixie
                        consequat flexitarian four loko.
                      </p>
                    </div>
                    <div className="post-footer">
                      <div className="post-tags">
                        <a href="/#">Lifestyle</a>
                        <a href="/#">Music</a>
                        <a href="/#">News</a>
                        <a href="/#">Travel</a>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="comments-area mb-5">
                  <h5 className="comments-title">3 Comments</h5>
                  <div className="comment-list">
                    <div className="comment">
                      <div className="comment-author">
                        <img
                          className="avatar img-fluid rounded-circle"
                          src="img/client-2.jpg"
                          alt="comment"
                        />
                      </div>
                      <div className="comment-body">
                        <div className="comment-meta">
                          <div className="comment-meta-author">
                            <a href="/#">Jason Ford</a>
                          </div>
                          <div className="comment-meta-date">
                            <a href="/#">May 5, 2015 at 4:51 am</a>
                          </div>
                        </div>
                        <div className="comment-content">
                          <p>
                            Meh synth Schlitz, tempor duis single-origin coffee
                            ea next level ethnic fingerstache fanny pack
                            nostrud. Seitan High Life reprehenderit consectetur
                            cupidatat kogi about me. Photo booth anim 8-bit
                            hella, PBR 3 wolf moon beard Helvetica.
                          </p>
                        </div>
                        <div className="comment-reply">
                          <a href="/#">Reply</a>
                        </div>
                      </div>
                      <div className="children">
                        <div className="comment">
                          <div className="comment-author">
                            <img
                              className="avatar img-fluid rounded-circle"
                              src="img/client-3.jpg"
                              alt="comment"
                            />
                          </div>
                          <div className="comment-body">
                            <div className="comment-meta">
                              <div className="comment-meta-author">
                                <a href="/#">Harry Benson</a>
                              </div>
                              <div className="comment-meta-date">
                                <a href="/#">May 5, 2015 at 4:51 am</a>
                              </div>
                            </div>
                            <div className="comment-content">
                              <p>
                                Meh synth Schlitz, tempor duis single-origin
                                coffee ea next level ethnic fingerstache fanny
                                pack nostrud. Seitan High Life reprehenderit
                                consectetur cupidatat kogi about me. Photo booth
                                anim 8-bit hella.
                              </p>
                            </div>
                            <div className="comment-reply">
                              <a href="/#">Reply</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment">
                      <div className="comment-author">
                        <img
                          className="avatar img-fluid rounded-circle"
                          src="img/client-4.jpg"
                          alt="comment"
                        />
                      </div>
                      <div className="comment-body">
                        <div className="comment-meta">
                          <div className="comment-meta-author">
                            <a href="/#">Henry Cain</a>
                          </div>
                          <div className="comment-meta-date">
                            <a href="/#">May 5, 2015 at 4:51 am</a>
                          </div>
                        </div>
                        <div className="comment-content">
                          <p>
                            Meh synth Schlitz, tempor duis single-origin coffee
                            ea next level ethnic fingerstache fanny pack
                            nostrud. Seitan High Life reprehenderit consectetur
                            cupidatat kogi about me. Photo booth anim 8-bit
                            hella, PBR 3 wolf moon beard Helvetica.
                          </p>
                        </div>
                        <div className="comment-reply">
                          <a href="/#">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-respond">
                    <h5 className="comment-reply-title">Leave a Reply</h5>
                    <p className="comment-notes">
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                    <form
                      className="comment-form row"
                      method="post"
                      onSubmit={this.handleComment}
                    >
                      <div className="form-group col-md-4">
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
                      <div className="form-group col-md-4">
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
                      <div className="form-group col-md-4">
                        <input
                          value={this.state.url}
                          onChange={e => this.handleFormValueChange("url", e)}
                          type="text"
                          name="url"
                          className="form-control"
                          placeholder="www.yourdomain.com"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          className="form-control"
                          rows="8"
                          placeholder="Comment"
                          value={this.state.comment}
                          onChange={e =>
                            this.handleFormValueChange("comment", e)
                          }
                        >
                        </textarea>
                      </div>
                      <div className="form-submit col-md-12">
                        <button
                          className="btn solid-btn"
                          type="submit"
                          disabled={this.state.disableBtn}
                          onClick={() => {
                            this.changeBtnText("Posting...");
                          }}
                        >
                          {this.state.btnText}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="sidebar-right pl-4">
                  <aside className="widget widget-search">
                    <form method="get" onSubmit={this.handleSearch}>
                      <input
                        value={this.state.searchData}
                        onChange={e =>
                          this.handleFormValueChange("searchData", e)
                        }
                        type="search"
                        name="searchData"
                        className="form-control"
                        placeholder="Type Search Words"
                        required
                      />
                      <button className="search-button" type="submit">
                        <span className="ti-search"></span>
                      </button>
                    </form>
                  </aside>

                  <aside className="widget widget-categories">
                    <div className="widget-title">
                      <h6>Categories</h6>
                    </div>
                    <ul>
                      <li>
                        <a href="/#">
                          Journey <span className="float-right">112</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Development <span className="float-right">86</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Sport <span className="float-right">10</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Photography <span className="float-right">144</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Symphony <span className="float-right">18</span>
                        </a>
                      </li>
                    </ul>
                  </aside>

                  <aside className="widget widget-recent-entries-custom">
                    <div className="widget-title">
                      <h6>Recent Posts</h6>
                    </div>
                    <ul>
                      <li className="clearfix">
                        <div className="wi">
                          <a href="/#">
                            <img
                              src="img/blog/1.jpg"
                              alt="recent post"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="wb">
                          <a href="/#">
                            Map where your photos were taken and discover local
                            points.
                          </a>
                          <span className="post-date">May 8, 2016</span>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="wi">
                          <a href="/#">
                            <img
                              src="img/blog/2.jpg"
                              alt="recent post"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="wb">
                          <a href="/#">
                            Map where your photos were taken and discover local
                            points.
                          </a>
                          <span className="post-date">May 8, 2016</span>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="wi">
                          <a href="/#">
                            <img
                              src="img/blog/3.jpg"
                              alt="recent post"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="wb">
                          <a href="/#">
                            Map where your photos were taken and discover local
                            points.
                          </a>
                          <span className="post-date">May 8, 2016</span>
                        </div>
                      </li>
                    </ul>
                  </aside>

                  <aside className="widget widget-categories">
                    <div className="widget-title">
                      <h6>Newsletter</h6>
                    </div>
                    <p>
                      Enter your email address below to subscribe to my
                      newsletter
                    </p>
                    <form
                      action="/#"
                      method="post"
                      className="d-none d-md-block d-lg-block"
                    >
                      <input
                        type="text"
                        className="form-control input"
                        id="email-footer"
                        name="email"
                        placeholder="info@yourdomain.com"
                      />
                      <button
                        type="submit"
                        className="btn solid-btn btn-block btn-not-rounded mt-3"
                      >
                        Subscribe
                      </button>
                    </form>
                  </aside>

                  <aside className="widget widget-tag-cloud">
                    <div className="widget-title">
                      <h6>Tags</h6>
                    </div>
                    <div className="tag-cloud">
                      <a href="/#">e-commerce</a>
                      <a href="/#">portfolio</a>
                      <a href="/#">responsive</a>
                      <a href="/#">bootstrap</a>
                      <a href="/#">business</a>
                      <a href="/#">corporate</a>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state,
}))(Blog);
