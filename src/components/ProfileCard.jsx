import React from 'react';

const ProfileCard = ({ name, imageSrc, categories, socialLinks }) => {
  return (
    <div className="owl-carousel-info-wrap item">
      <img src={imageSrc} className="owl-carousel-image img-fluid" alt="" />
      <div className="owl-carousel-info">
        <h4 className="mb-2">{name}</h4>
        {categories.map((category, index) => (
          <span key={index} className="badge">{category}</span>
        ))}
      </div>
      <div className="social-share">
        <ul className="social-icon">
          {socialLinks.map((link, index) => (
            <li key={index} className="social-icon-item">
              <a href={link.href} className={`social-icon-link ${link.iconClass}`}></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;