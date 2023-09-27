import React from 'react';
import {act, fireEvent, render} from '@utils/test-utils';

import {AuthActions} from '@store/modules/auth';
import {LoginScreen} from '@screens/Login';
import {signMocked} from './Login.mocks';
import {Navigator} from '@navigators/index';

const SIGN_MOCKED = signMocked;
jest.mock('@store/modules/api', () => ({
  ...jest.requireActual('@store/modules/api'),
  useSignInMutation: jest.fn(() => [
    jest.fn().mockReturnValue({unwrap: jest.fn().mockReturnValue(SIGN_MOCKED)}),
    {isLoading: false},
  ]),
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
    const setAuthMocked = jest.spyOn(AuthActions, 'setAuth');
    const username = 'testuser';
    const password = 'testpassword';

    const {getByText, getByPlaceholderText, queryByPlaceholderText} = render(
      <Navigator />,
    );
    const usernameInput = getByPlaceholderText('Digite seu nome de usuário');
    const passwordInput = getByPlaceholderText('Digite sua senha');

    fireEvent.changeText(usernameInput, username);
    fireEvent.changeText(passwordInput, password);
    const signInButton = getByText('Entrar');

    await act(async () => {
      await fireEvent.press(signInButton);
    });
    const passwordInput2 = queryByPlaceholderText('Digite sua senha');

    expect(passwordInput2).not.toBeOnTheScreen();
    expect(setAuthMocked).toBeCalledWith(SIGN_MOCKED);
  });
});
