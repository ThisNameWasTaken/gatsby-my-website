import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { Button } from './Button';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

beforeEach(jest.resetAllMocks);

it('adds the css classes specified by the className prop', () => {
  const button = shallow(<Button className="lorem ipsum" />);
  expect(button.hasClass('mdc-button')).toBe(true);
  expect(button.hasClass('lorem')).toBe(true);
  expect(button.hasClass('ipsum')).toBe(true);
});

it('renders a raised button', () => {
  const button = shallow(<Button raised />);
  expect(button.hasClass('mdc-button--raised')).toBe(true);
});

it('renders a unelevated button', () => {
  const button = shallow(<Button unelevated />);
  expect(button.hasClass('mdc-button--unelevated')).toBe(true);
});

it('renders an outlined button', () => {
  const button = shallow(<Button outlined />);
  expect(button.hasClass('mdc-button--outlined')).toBe(true);
});

it('renders a dense button', () => {
  const button = shallow(<Button dense />);
  expect(button.hasClass('mdc-button--dense')).toBe(true);
});

it('renders a button tag', () => {
  const button = shallow(<Button />);
  expect(button.type()).toBe('button');
});

it('renders button attributes', () => {
  const button = shallow(<Button type="submit" />);
  expect(button.prop('type')).toBe('submit');
});

it('renders an anchor tag when a href prop is passed', () => {
  const button = shallow(<Button href="https://google.com" />);
  expect(button.type()).toBe('a');
});

it('renders anchor attributes', () => {
  const button = shallow(<Button href="https://google.com" target="_blank" />);
  expect(button.prop('target')).toBe('_blank');
});

test('renders an icon', () => {
  const button = shallow(<Button icon={<i className="test-icon" />} />);
  expect(button.find('.test-icon').hasClass('mdc-button__icon')).toBe(true);
});

test('renders a trailing icon', () => {
  const button = shallow(<Button trailingIcon={<i className="test-icon" />} />);
  expect(button.find('.test-icon').hasClass('mdc-button__icon')).toBe(true);
});

it('does not render an icon if an icon prop is not passed', () => {
  const button = shallow(<Button />);
  expect(button.exists('.mdc-button__icon')).toBe(false);
});

it('calls the init ripple function', () => {
  const initRipple = jest.fn(() => {});
  mount(<Button initRipple={initRipple} />);
  expect(initRipple).toHaveBeenCalled();
});
