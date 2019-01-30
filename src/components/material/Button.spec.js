import React from 'react';
import { mount, configure } from 'enzyme';
import Button from './Button';
import Adapter from 'enzyme-adapter-react-16';
import { MDCRipple } from '@material/ripple';

configure({ adapter: new Adapter() });

jest.mock('@material/ripple', () => ({ MDCRipple: jest.fn() }));

beforeEach(jest.resetAllMocks);

it('adds the css classes specified by the className prop', () => {
  const button = mount(<Button className="lorem ipsum" />).childAt(0);
  expect(button.hasClass('mdc-button')).toBe(true);
  expect(button.hasClass('lorem')).toBe(true);
  expect(button.hasClass('ipsum')).toBe(true);
});

it('renders a raised button', () => {
  const button = mount(<Button raised />).childAt(0);
  expect(button.hasClass('mdc-button--raised')).toBe(true);
});

it('renders a unelevated button', () => {
  const button = mount(<Button unelevated />).childAt(0);
  expect(button.hasClass('mdc-button--unelevated')).toBe(true);
});

it('renders an outlined button', () => {
  const button = mount(<Button outlined />).childAt(0);
  expect(button.hasClass('mdc-button--outlined')).toBe(true);
});

it('renders a dense button', () => {
  const button = mount(<Button dense />).childAt(0);
  expect(button.hasClass('mdc-button--dense')).toBe(true);
});

it('renders a button tag', () => {
  const button = mount(<Button />).childAt(0);
  expect(button.type()).toBe('button');
});

it('renders an anchor tag when a href prop is passed', () => {
  const button = mount(<Button href='https://google.com' />).childAt(0);
  expect(button.type()).toBe('a');
});

test('renders icon', () => {
  const button = mount(<Button icon={<i className="test-icon" />} />).childAt(0);
  expect(button.find('.test-icon').hasClass('mdc-button__icon')).toBe(true);
});

it('does not render an icon if an icon prop is not passed', () => {
  const button = mount(<Button />).childAt(0);
  expect(button.exists('.mdc-button__icon')).toBe(false);
});

it('renders ripples', () => {
  mount(<Button />);
  expect(MDCRipple).toHaveBeenCalled();
});

it('does not render ripples if a noRipple prop is passed', () => {
  mount(<Button noRipple />);
  expect(MDCRipple).not.toHaveBeenCalled();
});
