import React from 'react';
import { mount } from 'enzyme';
import Button from '../index';

describe(`Button`, () => {
  let instance;
  const mockFn = jest.fn();

  beforeAll(() => {
    instance = mount(<Button onClick={mockFn}></Button>)
  })

  afterAll(() => {
    instance.unmount();
  })

  it(`could call the onClick event`, () => {
    instance.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it(`could change the props`, () => {
    instance.setProps({ type: 'success' });
    expect(instance.props().type).toEqual('success');
  });
});
