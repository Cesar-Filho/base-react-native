import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {ThemeProps, useThemeContext} from '@contexts/theme';

export function Loading() {
  const {theme} = useThemeContext();
  const styles = styling(theme);

  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.primary} testID="Loading" />
    </View>
  );
}

const styling = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.MD,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
