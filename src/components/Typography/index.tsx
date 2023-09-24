import React from 'react';
import {Text, TextProps} from 'react-native';

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
    <Text {...props} style={[style, typography[variation]]}>
      {children}
    </Text>
  );
}
