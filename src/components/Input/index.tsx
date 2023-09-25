import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {ThemeProps, useThemeContext} from '@contexts/theme';
import {Typography} from '@components/Typography';

interface InputProps extends TextInputProps {
  label: string;
}
function ComponentInput(
  {style, label, ...props}: InputProps,
  ref: React.LegacyRef<TextInput>,
) {
  const {theme} = useThemeContext();
  const styles = styling(theme);

  return (
    <View style={[styles.container, style]}>
      <Typography variation="body" style={styles.label}>
        {label}
      </Typography>
      <TextInput ref={ref} {...props} style={[styles.input]} />
    </View>
  );
}

const styling = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: theme.spacing.XS,
    },
    label: {
      marginBottom: theme.spacing.XXS,
      color: theme.colors.primary,
    },
    input: {
      width: '100%',
      borderWidth: StyleSheet.hairlineWidth,
      padding: theme.spacing.SM,
      borderRadius: theme.spacing.XS,
      borderColor: theme.colors.primary,
    },
  });

export const Input = forwardRef<TextInput, InputProps>(ComponentInput);
