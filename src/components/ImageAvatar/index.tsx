import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {ThemeProps, useThemeContext} from '@contexts/theme';

export function ImageAvatar({uri}: {uri: string}) {
  const {theme} = useThemeContext();
  const styles = styling(theme);

  return (
    <Image
      source={{uri}}
      resizeMode="center"
      style={styles.container}
      testID="image-avatar"
    />
  );
}

const styling = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      borderWidth: StyleSheet.hairlineWidth * 4,
      borderColor: theme.colors.primary,
      height: 180,
      width: 180,
      borderRadius: 90,
      alignSelf: 'center',
      marginVertical: theme.spacing.XS,
    },
  });
