import React from 'react';
import {act, fireEvent, render} from '@utils/test-utils';
import {LoginScreen} from '@screens/Login';
import {useSignInMutation} from '@store/modules/api';

jest.mock('@store/modules/api', () => ({
  ...jest.requireActual('@store/modules/api'),
  useSignInMutation: jest.fn(() => [jest.fn(), {isLoading: false}]),
}));

describe('LoginScreen', () => {
  it('renders the component', () => {
    const {getByText, getByPlaceholderText} = render(<LoginScreen />);

    expect(getByText('Nome do usuário')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu nome de usuário')).toBeTruthy();
    expect(getByText('Senha')).toBeTruthy();
    expect(getByPlaceholderText('Digite sua senha')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('handles input changes correctly', () => {
    const {getByPlaceholderText} = render(<LoginScreen />);
    const usernameInput = getByPlaceholderText('Digite seu nome de usuário');
    const passwordInput = getByPlaceholderText('Digite sua senha');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'testpassword');

    expect(usernameInput.props.value).toBe('testuser');
    expect(passwordInput.props.value).toBe('testpassword');
  });

  it('calls signIn function when the "Entrar" button is pressed', async () => {
    const signInMock = jest.fn();
    useSignInMutation.mockReturnValue([
      signInMock.mockReturnValue({unwrap: jest.fn()}),
      {isLoading: false},
    ]);

    const username = 'user_name_text';
    const password = 'password_text';

    const {getByText, getByPlaceholderText} = render(<LoginScreen />);
    const usernameInput = getByPlaceholderText('Digite seu nome de usuário');
    const passwordInput = getByPlaceholderText('Digite sua senha');

    fireEvent.changeText(usernameInput, username);
    fireEvent.changeText(passwordInput, password);
    const signInButton = getByText('Entrar');

    await act(() => {
      fireEvent.press(signInButton);
    });

    expect(signInMock).toBeCalledWith({username, password});
  });
});
