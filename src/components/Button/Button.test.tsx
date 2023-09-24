import React from 'react';
import {StyleSheet} from 'react-native';

import {fireEvent, render} from '@utils/test-utils';
import {Button} from '@components/Button';

const {BUTTON_STYLE} = StyleSheet.create({
  BUTTON_STYLE: {
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

describe('Render Button', () => {
  test('it renders a default button', () => {
    const title = 'Test Button';
    const {getByTestId} = render(<Button title={title} />);
    const component = getByTestId('ComponentButton');

    expect(component).toHaveTextContent(title);
    expect(component).toHaveStyle(BUTTON_STYLE);
  });

  test('it calls the onPress callback when clicked', () => {
    const title = 'Test Button';
    const click = jest.fn();
    const {getByTestId} = render(<Button title={title} onPress={click} />);
    const component = getByTestId('ComponentButton');

    fireEvent.press(component);

    expect(click).toBeCalledTimes(1);
  });
});
