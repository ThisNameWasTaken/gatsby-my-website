import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { withRipple } from '@material/react-ripple';
import './Button.scss';

/**
 * @typedef {import('react')} React
 *
 * @typedef MDCButtonProps
 * @property {Boolean=} raised
 * @property {Boolean=} unelevated
 * @property {Boolean=} outlined
 * @property {Boolean=} dense
 * @property {Boolean=} disabled
 * @property {React.RefObject=} initRipple
 * @property {React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>=} icon
 * @property {React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>=} trailingIcon
 *
 * @typedef {React.AnchorHTMLAttributes & React.ButtonHTMLAttributes & MDCButtonProps} ButtonProps
 *
 * @type {React.SFC<ButtonProps>}
 */
export const Button = ({
  className,
  raised,
  unelevated,
  outlined,
  dense,
  disabled,
  icon,
  href,
  initRipple,
  children,
  trailingIcon,
  ...otherProps
}) => {
  const props = {
    className: classnames('mdc-button', className, {
      'mdc-button--raised': raised,
      'mdc-button--unelevated': unelevated,
      'mdc-button--outlined': outlined,
      'mdc-button--dense': dense,
    }),
    ref: initRipple,
    disabled,
    ...otherProps,
  };

  const commonChildren = (
    <>
      {renderIcon(icon)}
      <span className="mdc-button__label">{children}</span>
      {renderIcon(trailingIcon)}
    </>
  );

  if (href) {
    const INTERNAL_URL = /^\/(?!\/)/;
    if (INTERNAL_URL.test(href)) {
      return (
        <Link to={href} {...props}>
          {commonChildren}
        </Link>
      );
    }
    return (
      <a href={href} {...props}>
        {commonChildren}
      </a>
    );
  }

  return <button {...props}>{commonChildren}</button>;
};

const renderIcon = icon =>
  icon &&
  React.cloneElement(icon, {
    className: classnames('mdc-button__icon', icon.props.className),
  });

export default withRipple(Button);
