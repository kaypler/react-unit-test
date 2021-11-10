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
    const ref = React.createRef<HTMLInputElement>(null);
    const spy = jest.spyOn(HTMLInputElement.prototype, 'focus');
    // 更改函数实现
    spy.mockImplementation((val) => val);
    mount(<Input ref={ref} />);
    ref.current.focus('mock');
    expect(spy).toHaveBeenCalledWith('mock');
    spy.mockRestore();
  })
});
