import React from 'react';
import './HomeBanner.scss';

const HomeBanner = ({ children, ...otherProps }) => {
  return (
    <div className="home-banner" {...otherProps}>
      {children}
    </div>
  );
};

export default HomeBanner;
