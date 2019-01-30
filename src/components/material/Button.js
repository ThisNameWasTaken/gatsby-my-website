import React, { Component, createRef, cloneElement } from 'react';
import { string, bool, element } from 'prop-types';
import classnames from 'classnames';
import { MDCRipple } from '@material/ripple';
import './Button.scss';
import { navigate } from 'gatsby';

/**
 * @typedef {import('react')} React
 */

/**
 * @typedef {Object} Props
 * @property {Boolean} raised
 * @property {Boolean} unelevated
 * @property {Boolean} outlined
 * @property {Boolean} dense
 * @property {Boolean} noRipple
 * @property {React.ReactElement} icon
 * @property {String} to
 */

/**
 * @typedef {React.AnchorHTMLAttributes & React.ButtonHTMLAttributes} ButtonTypes
 * @typedef {Props & ButtonTypes} ButtonProps
 */

/**
 * @extends {Component<ButtonProps>}
 */
export default class Button extends Component {
  static propTypes = {
    className: string,
    raised: bool,
    unelevated: bool,
    outlined: bool,
    dense: bool,
    noRipple: bool,
    icon: element,
    to: string
  };

  static defaultProps = {
    className: undefined,
    raised: false,
    unelevated: false,
    outlined: false,
    dense: false,
    noRipple: false,
    icon: undefined,
    to: undefined
  };

  /**
   * @param {ButtonProps} props 
   */
  constructor(props) {
    super(props);

    const {
      className,
      raised,
      unelevated,
      outlined,
      dense,
      icon,
    } = props;

    this.classNames = classnames('mdc-button', {
      'mdc-button--raised': raised,
      'mdc-button--unelevated': unelevated,
      'mdc-button--outlined': outlined,
      'mdc-button--dense': dense
    }, className);

    this.icon = icon && cloneElement(icon, {
      className: classnames('mdc-button__icon', icon.props.className)
    });

    this.htmlElement = createRef();
  }

  componentDidMount() {
    if (!this.props.noRipple) {
      this.ripple = new MDCRipple(this.htmlElement.current);
    }
  }

  componentWillUnmount() {
    if (this.ripple) {
      this.ripple.destroy();
    }
  }

  render() {
    const {
      className,
      raised,
      unelevated,
      outlined,
      dense,
      noRipple,
      icon,
      to,
      href,
      children,
      ...otherProps
    } = this.props;

    const onClick = to && (
      event => {
        event.preventDefault();
        navigate(to);
      }
    );

    if (to || href) {
      return (
        <a
          onClick={onClick}
          href={to || href}
          ref={this.htmlElement}
          className={this.classNames}
          {...otherProps}
        >
          {this.icon}
          <span className="mdc-button__label">
            {children}
          </span>
        </a>
      );
    }

    return (
      <button
        ref={this.htmlElement}
        className={this.classNames}
        {...otherProps}
      >
        {this.icon}
        <span className="mdc-button__label">
          {children}
        </span>
      </button>
    );
  }
}
