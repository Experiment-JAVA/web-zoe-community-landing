import React, { Component } from "react";

class Blog extends Component {
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
        <section className="our-blog-section ptb-100 gray-light-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="section-heading mb-5">
                  <h2>Our Latest News</h2>
                  <p>
                    Enthusiastically drive revolutionary opportunities before
                    emerging leadership. Distinctively transform tactical
                    methods of empowerment via resource sucking core.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-primary">
                    Lifestyle
                  </span>
                  <img
                    src="img/blog/1.jpg"
                    className="card-img-top position-relative"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item">Jan 21, 2019</li>
                        <li className="list-inline-item">
                          <span>45</span> Comments
                        </li>
                        <li className="list-inline-item">
                          <span>10</span> Share
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="/#">Appropriately productize fully</a>
                    </h3>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk.
                    </p>
                    <a href="/#" className="detail-link">
                      Read more <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-danger">
                    Technology
                  </span>
                  <img
                    src="img/blog/2.jpg"
                    className="card-img-top position-relative"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item">May 26, 2019</li>
                        <li className="list-inline-item">
                          <span>30</span> Comments
                        </li>
                        <li className="list-inline-item">
                          <span>5</span> Share
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="/#">Quickly formulate backend</a>
                    </h3>
                    <p className="card-text">
                      Synergistically engage effective ROI after customer
                      directed partnerships.
                    </p>
                    <a href="/#" className="detail-link">
                      Read more <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-info">
                    Science
                  </span>
                  <img
                    src="img/blog/3.jpg"
                    className="card-img-top"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item">Apr 25, 2019</li>
                        <li className="list-inline-item">
                          <span>41</span> Comments
                        </li>
                        <li className="list-inline-item">
                          <span>30</span> Share
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="/#">Objectively extend extensive</a>
                    </h3>
                    <p className="card-text">
                      Holisticly mesh open-source leadership rather than
                      proactive users.{" "}
                    </p>
                    <a href="/#" className="detail-link">
                      Read more <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-primary">
                    Lifestyle
                  </span>
                  <img
                    src="img/blog/4.jpg"
                    className="card-img-top position-relative"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item">Jan 21, 2019</li>
                        <li className="list-inline-item">
                          <span>45</span> Comments
                        </li>
                        <li className="list-inline-item">
                          <span>10</span> Share
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="/#">Appropriately re-engineer high </a>
                    </h3>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk.
                    </p>
                    <a href="/#" className="detail-link">
                      Read more <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-danger">
                    Technology
                  </span>
                  <img
                    src="img/blog/5.jpg"
                    className="card-img-top position-relative"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item">May 26, 2019</li>
                        <li className="list-inline-item">
                          <span>30</span> Comments
                        </li>
                        <li className="list-inline-item">
                          <span>5</span> Share
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="/#">Progressively visualize enabled</a>
                    </h3>
                    <p className="card-text">
                      Synergistically engage effective ROI after customer
                      directed partnerships.
                    </p>
                    <a href="/#" className="detail-link">
                      Read more <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-info">
                    Science
                  </span>
                  <img
                    src="img/blog/6.jpg"
                    className="card-img-top"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item">Apr 25, 2019</li>
                        <li className="list-inline-item">
                          <span>41</span> Comments
                        </li>
                        <li className="list-inline-item">
                          <span>30</span> Share
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="/#">Credibly implement maximizing</a>
                    </h3>
                    <p className="card-text">
                      Holisticly mesh open-source leadership rather than
                      proactive users.{" "}
                    </p>
                    <a href="/#" className="detail-link">
                      Read more <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <nav className="custom-pagination-nav mt-4">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        <span className="ti-angle-left"></span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="/#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        <span className="ti-angle-right"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
