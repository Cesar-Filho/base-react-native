import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Navigator} from './navigators';
import {ThemeProvider} from '@contexts/theme';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {ErrorBoundary} from '@components/ErrorBoundary';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ThemeProvider>
              <NavigationContainer>
                <StatusBar
                  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                  backgroundColor={backgroundStyle.backgroundColor}
                />
                <Navigator />
              </NavigationContainer>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </SafeAreaView>
  );
}

export default App;
