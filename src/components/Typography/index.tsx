import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

import {typography} from '@theme/index';

interface TypographyProps extends TextProps {
  variation: keyof typeof typography;
}

export function Typography({
  children,
  variation,
  style,
  ...props
}: TypographyProps) {
  return (
    <Text {...props} style={[styles.fontColor, style, typography[variation]]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  fontColor: {color: '#FFF'},
});
