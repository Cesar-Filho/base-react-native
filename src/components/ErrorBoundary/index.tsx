import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Typography} from '@components/Typography';

export class ErrorBoundary extends React.PureComponent<{
  children: React.ReactNode;
}> {
  state = {
    error: false,
  };

  static getDerivedStateFromError() {
    return {error: true};
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.container}>
          <Typography variation="title">
            Ocorreu um erro não esperando, por favor reiniciar a aplicação.
          </Typography>
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
});
