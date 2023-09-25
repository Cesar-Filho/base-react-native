import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const ThemeDark = Colors.dark;
export const ThemeLight = Colors.light;
export const ThemeMain = Colors.main;
export const Spacing = {
  none: 0,
  XXS: 4,
  XS: 8,
  SM: 12,
  MD: 16,
  LG: 24,
  XL: 32,
};

export const typography = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    fontSize: 14,
  },
  button: {
    fontSize: 16,
    fontWeight: '700',
  },
});
