import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '@screens/Login';
import {HomeScreen} from '@screens/Home';
import {Routes} from './routes';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const isLogged = false;

  return (
    <Stack.Navigator initialRouteName={isLogged ? Routes.HOME : Routes.LOGIN}>
      <Stack.Screen
        name={Routes.LOGIN}
        component={LoginScreen}
        options={{
          title: 'Login',
          animationTypeForReplace: isLogged ? 'pop' : 'push',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{title: 'Usuário', headerBackVisible: false}}
      />
    </Stack.Navigator>
  );
};
