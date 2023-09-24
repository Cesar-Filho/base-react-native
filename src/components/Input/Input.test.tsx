import React from 'react';

import {Input} from '@components/Input';
import {fireEvent, render} from '@utils/test-utils';

describe('Render Input', () => {
  it('should render the Input component correctly', () => {
    const {getByText, getByPlaceholderText} = render(
      <Input label="Name" placeholder="Enter your name" />,
    );

    const labelElement = getByText('Name');
    const inputElement = getByPlaceholderText('Enter your name');

    expect(labelElement).toBeTruthy();
    expect(inputElement).toBeTruthy();
  });

  it('should reflect the passed properties', () => {
    const {getByPlaceholderText} = render(
      <Input
        label="Email"
        placeholder="Enter your email"
        value="example@email.com"
      />,
    );

    const inputElement = getByPlaceholderText('Enter your email');
    expect(inputElement.props.value).toBe('example@email.com');
  });

  it('should call the onChangeText function when text is changed', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <Input
        label="Password"
        placeholder="Enter your password"
        onChangeText={onChangeTextMock}
      />,
    );

    const inputElement = getByPlaceholderText('Enter your password');
    fireEvent.changeText(inputElement, 'newPassword123');

    expect(onChangeTextMock).toHaveBeenCalledWith('newPassword123');
  });
});
