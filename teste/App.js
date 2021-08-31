/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

const App: () => Node = () => {
  const linking = {
    prefixes: ['deeplink://'],
    config: {
      initialRouteName: 'home',
      screens: {home: {path: 'home'}, login: {path: 'login'}},
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName={'home'}>
        <Stack.Screen name={'home'} component={HomeScreen} />
        <Stack.Screen name={'login'} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
