import React from 'react';
import { mount, shallow } from 'enzyme';
import Counter from '../index';

describe(`Counter`, () => {
  it(`could be mounted without errors`, () => {
    expect(() => mount(<Counter />)).not.toThrow();
  });

  it(`could be unmounted without errors`, () => {
    const wrapper = mount(<Counter />);
    expect(() => {
      wrapper.setProps({});
      wrapper.unmount();
    }).not.toThrow();
  });

  it('could call componentDidMount', () => {
    const spy = jest.spyOn(Counter.prototype, 'componentDidMount');
    const wrapper = mount(<Counter />);
    expect(spy).toHaveBeenCalledTimes(1);
    // 恢复原始实现
    spy.mockRestore();
  });

  it('could render an `.counter`', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('.counter')).toHaveLength(1);
  });
});
