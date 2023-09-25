import React from 'react';
import {
  Switch as ComponentSwitch,
  StyleProp,
  StyleSheet,
  SwitchProps,
  View,
  ViewStyle,
} from 'react-native';

import {ThemeProps, useThemeContext} from '@contexts/theme';
import {Typography} from '@components/Typography';

interface ISwitchProps extends SwitchProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export function Switch({containerStyle, label, ...props}: ISwitchProps) {
  const {theme} = useThemeContext();
  const styles = styling(theme);

  return (
    <View style={[styles.container, containerStyle]}>
      <Typography variation="subtitle" style={styles.label}>
        {label}
      </Typography>
      <ComponentSwitch
        trackColor={{
          true: theme.colors.primary,
          false: theme.colors.primary,
        }}
        ios_backgroundColor={theme.colors.primary}
        {...props}
      />
    </View>
  );
}

const styling = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    label: {color: theme.colors.primary, marginRight: theme.spacing.XS},
  });
