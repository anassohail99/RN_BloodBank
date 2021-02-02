import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Donors from './screens/Donors';
import Donate from './screens/Donate';
import colors from './config/colors';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welome' component={Welcome} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Donors' component={TabNavigator} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.primary,
        activeTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name='Donors'
        component={Donors}
        options={{
          tabBarIcon: ({ size, color }) => <Fontisto name='blood-drop' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Donate'
        component={Donate}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='blood-bag' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
