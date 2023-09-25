import React, {useRef, useState} from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {ThemeProps, useThemeContext} from '@contexts/theme';
import {useSignInMutation} from '@store/modules/api';
import {useAppDispatch} from '@store/hook';
import {AuthActions} from '@store/modules/auth';
import {Button} from '@components/Button';
import {Input} from '@components/Input';

export function LoginScreen() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, {isLoading}] = useSignInMutation();

  const {theme} = useThemeContext();
  const styles = styling(theme);
  const dispatch = useAppDispatch();

  const passwordRef = useRef<TextInput>(null);

  const onSubmit = async () => {
    const payload = await signIn({username, password}).unwrap();

    if (payload?.id) {
      dispatch(AuthActions.setAuth(payload));
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <Input
            autoFocus
            label="Nome do usuário"
            value={username}
            placeholder="Digite seu nome de usuário"
            returnKeyType="next"
            autoCapitalize="none"
            onSubmitEditing={() => passwordRef?.current?.focus()}
            onChangeText={setEmail}
          />
          <Input
            ref={passwordRef}
            label="Senha"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
          <Button
            title="Entrar"
            disabled={isLoading}
            style={styles.button}
            onPress={onSubmit}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styling = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      padding: theme.spacing.MD,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginVertical: theme.spacing.XS,
    },
  });
