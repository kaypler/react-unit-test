import React from 'react';
import { render, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import Input from '../index';

describe('Input', () => {
  it('should match snapshot', () => {
    const wrapper = render(<Input value="3" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('should bind ref currently', () => {
    const spy = jest.spyOn(HTMLInputElement.prototype, 'focus');
    const ref = React.createRef<HTMLInputElement>(null);
    mount(<Input ref={ref} />);
    ref.current.focus();
    expect(spy).toHaveBeenCalled();
  })
});
