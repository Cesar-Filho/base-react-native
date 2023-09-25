import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ThemeProps, useThemeContext} from '@contexts/theme';
import {Typography} from '@components/Typography';

interface LineTextProps {
  label: string;
  value: string;
}

export const LineText = ({label, value}: LineTextProps) => {
  const {theme} = useThemeContext();
  const styles = styling(theme);

  return (
    <View style={styles.row}>
      <Typography style={styles.label} variation="subtitle">
        {label}:
      </Typography>
      <Typography style={styles.text} variation="subtitle">
        {value}
      </Typography>
    </View>
  );
};

const styling = (theme: ThemeProps) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      paddingVertical: theme.spacing.XS,
      minWidth: '50%',
      flexWrap: 'wrap',
    },
    label: {
      color: theme.colors.primary,
      marginRight: theme.spacing.XXS,
    },
    text: {
      color: theme.colors.secondary,
    },
  });
