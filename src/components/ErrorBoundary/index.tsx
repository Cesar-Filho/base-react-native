import React from 'react';
import {StyleSheet, View} from 'react-native';
import RNRestart from 'react-native-restart';

import {Typography} from '@components/Typography';
import {Button} from '@components/Button';

export class ErrorBoundary extends React.PureComponent<{
  children: React.ReactNode;
}> {
  state = {
    error: false,
  };

  static getDerivedStateFromError() {
    return {error: true};
  }

  handleBackToSignIn = async () => {
    RNRestart.Restart();
  };

  render() {
    if (this.state.error) {
      return (
        <View style={styles.container}>
          <Typography variation="title" style={styles.label}>
            Ocorreu um erro não esperado, por favor reinicie o aplicativo.
          </Typography>
          <Button
            title="Reiniciar aplicativo"
            onPress={this.handleBackToSignIn}
          />
        </View>
      );
    } else {
      return this.props.children;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  label: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 24,
  },
});
