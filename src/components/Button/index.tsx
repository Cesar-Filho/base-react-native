import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {useThemeContext} from '@contexts/theme';
import {Typography} from '@components/Typography';
import {ThemeMain} from '@theme/index';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  mode?: 'container' | 'outlined' | 'text';
  primary?: boolean;
}

interface StylingProps {
  colors: typeof ThemeMain;
  mode?: 'container' | 'outlined' | 'text';
  primary?: boolean;
}

export function Button({
  style,
  mode = 'container',
  primary = true,
  disabled,
  title,
  ...props
}: ButtonProps) {
  const {
    theme: {colors},
  } = useThemeContext();
  const {buttonStyle} = styling({colors, mode, primary});

  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      activeOpacity={0.8}
      testID="ComponentButton"
      disabled={disabled}
      {...props}>
      {disabled ? (
        <ActivityIndicator color={colors.common.white} />
      ) : (
        <Typography variation="button">{title}</Typography>
      )}
    </TouchableOpacity>
  );
}

const styling = ({colors, mode, primary}: StylingProps) =>
  StyleSheet.create({
    buttonStyle: {
      borderRadius: 8,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor:
        mode === 'container'
          ? primary
            ? colors.primary
            : colors.secondary
          : 'transparent',
    },
  });
