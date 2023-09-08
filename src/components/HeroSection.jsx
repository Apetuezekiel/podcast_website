import React from 'react';
import ProfileCard from './ProfileCard';
import { profiles } from '../data/profile';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="text-center mb-5 pb-2">
              <h1 className="text-white">Listen to Pod Talk</h1>
              <p className="text-white">Listen to it everywhere. Explore your favorite podcasts.</p>
              <a href="#section_2" className="btn custom-btn smoothscroll mt-3">Start listening</a>
            </div>
            {/* Owl Carousel */}
            <div className="owl-carousel owl-theme">
              {/* Owl Carousel Item 1 */}
              <div className="owl-carousel-info-wrap item">
                <img
                  src="images/profile/smiling-business-woman-with-folded-hands-against-white-wall-toothy-smile-crossed-arms.jpg"
                  className="owl-carousel-image img-fluid"
                  alt=""
                />
                <div className="owl-carousel-info">
                  <h4 className="mb-2">
                    Candice
                    <img
                      src="images/verified.png"
                      className="owl-carousel-verified-image img-fluid"
                      alt=""
                    />
                  </h4>
                  <span className="badge">Storytelling</span>
                  <span className="badge">Business</span>
                </div>
                <div className="social-share">
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-twitter"></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-facebook"></a>
                    </li>
                  </ul>
                </div>
              {profiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
              ))} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
