import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RenderOptions, render} from '@testing-library/react-native';

import {ThemeProvider} from '@contexts/theme';

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';

export {customRender as render};
