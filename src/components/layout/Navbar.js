import React, { useState } from 'react';
import classnames from 'classnames';
import './Navbar.scss';

export const Navbar = ({
  className = '',
  fixed = false,
  transparent = false,
  children,
  ...otherProps
}) => {
  const [isTransparent, setIsTransparent] = useState(transparent);

  if (transparent) {
    document.addEventListener('scroll', event =>
      setIsTransparent(window.scrollY <= 16)
    );
  }

  return (
    <nav
      className={classnames('navbar', className, {
        'navbar--fixed': fixed,
        'navbar--transparent': isTransparent,
      })}
      {...otherProps}
    >
      <div className="navbar__background" />
      {children}
    </nav>
  );
};

export const NavbarLeft = ({ className = '', children, ...otherProps }) => (
  <ul className={classnames('navbar__left', className)} {...otherProps}>
    {children}
  </ul>
);

export const NavbarCenter = ({ className = '', children, ...otherProps }) => (
  <ul className={classnames('navbar__center', className)} {...otherProps}>
    {children}
  </ul>
);

export const NavbarRight = ({ className = '', children, ...otherProps }) => (
  <ul className={classnames('navbar__right', className)} {...otherProps}>
    {children}
  </ul>
);

export const NavbarItem = ({ className = '', children, ...otherProps }) => (
  <li className={classnames('navbar__item', className)} {...otherProps}>
    {children}
  </li>
);
