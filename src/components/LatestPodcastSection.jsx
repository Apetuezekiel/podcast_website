import React from 'react';

function LatestPodcastSection() {
  return (
    <section className="latest-podcast-section section-padding pb-0" id="section_2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Latest episodes</h4>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block d-flex">
              <div>
                <div className="custom-block-icon-wrap">
                  <div className="section-overlay"></div>
                  <a href="detail-page.html" className="custom-block-image-wrap">
                    <img
                      src="images/podcast/11683425_4790593.jpg"
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                    <a href="#" className="custom-block-icon">
                      <i className="bi-play-fill"></i>
                    </a>
                  </a>
                </div>

                <div className="mt-2">
                  <a href="#" className="btn custom-btn">
                    Subscribe
                  </a>
                </div>
              </div>

              <div className="custom-block-info">
                <div className="custom-block-top d-flex mb-1">
                  <small className="me-4">
                    <i className="bi-clock-fill custom-icon"></i>
                    50 Minutes
                  </small>

                  <small>Episode <span className="badge">15</span></small>
                </div>

                <h5 className="mb-2">
                  <a href="detail-page.html">Modern Vintage</a>
                </h5>

                <div className="profile-block d-flex">
                  <img
                    src="images/profile/woman-posing-black-dress-medium-shot.jpg"
                    className="profile-block-image img-fluid"
                    alt=""
                  />

                  <p>
                    Elsa
                    <img
                      src="images/verified.png"
                      className="verified-image img-fluid"
                      alt=""
                    />
                    <strong>Influencer</strong>
                  </p>
                </div>

                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                <div className="custom-block-bottom d-flex justify-content-between mt-3">
                  <a href="#" className="bi-headphones me-1">
                    <span>120k</span>
                  </a>

                  <a href="#" className="bi-heart me-1">
                    <span>42.5k</span>
                  </a>

                  <a href="#" className="bi-chat me-1">
                    <span>11k</span>
                  </a>

                  <a href="#" className="bi-download">
                    <span>50k</span>
                  </a>
                </div>
              </div>

              <div className="d-flex flex-column ms-auto">
                <a href="#" className="badge ms-auto">
                  <i className="bi-heart"></i>
                </a>

                <a href="#" className="badge ms-auto">
                  <i className="bi-bookmark"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="custom-block d-flex">
              <div>
                <div className="custom-block-icon-wrap">
                  <div className="section-overlay"></div>
                  <a href="detail-page.html" className="custom-block-image-wrap">
                    <img
                      src="images/podcast/12577967_02.jpg"
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                    <a href="#" className="custom-block-icon">
                      <i className="bi-play-fill"></i>
                    </a>
                  </a>
                </div>

                <div className="mt-2">
                  <a href="#" className="btn custom-btn">
                    Subscribe
                  </a>
                </div>
              </div>

              <div className="custom-block-info">
                <div className="custom-block-top d-flex mb-1">
                  <small className="me-4">
                    <i className="bi-clock-fill custom-icon"></i>
                    15 Minutes
                  </small>

                  <small>Episode <span className="badge">45</span></small>
                </div>

                <h5 className="mb-2">
                  <a href="detail-page.html">Daily Talk</a>
                </h5>

                <div className="profile-block d-flex">
                  <img
                    src="images/profile/handsome-asian-man-listening-music-through-headphones.jpg"
                    className="profile-block-image img-fluid"
                    alt=""
                  />

                  <p>
                    William
                    <strong>Vlogger</strong>
                  </p>
                </div>

                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                <div className="custom-block-bottom d-flex justify-content-between mt-3">
                  <a href="#" className="bi-headphones me-1">
                    <span>140k</span>
                  </a>

                  <a href="#" className="bi-heart me-1">
                    <span>22.4k</span>
                  </a>

                  <a href="#" className="bi-chat me-1">
                    <span>16k</span>
                  </a>

                  <a href="#" className="bi-download">
                    <span>62k</span>
                  </a>
                </div>
              </div>

              <div className="d-flex flex-column ms-auto">
                <a href="#" className="badge ms-auto">
                  <i className="bi-heart"></i>
                </a>

                <a href="#" className="badge ms-auto">
                  <i className="bi-bookmark"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestPodcastSection;