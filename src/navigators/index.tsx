import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '@screens/Login';
import {HomeScreen} from '@screens/Home';
import {Routes} from './routes';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const isLogged = true;

  return (
    <Stack.Navigator>
      {isLogged ? (
        <Stack.Screen
          name={Routes.LOGIN}
          component={LoginScreen}
          options={{
            title: 'Login',
            animationTypeForReplace: isLogged ? 'pop' : 'push',
          }}
        />
      ) : (
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};
