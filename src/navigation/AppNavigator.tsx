import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../@types/navigation';
import MainTabNavigator from './MainTabNavigator';
import {
  LoginScreen,
  WelcomeScreen,
  SignUpScreen,
  LoadingScreen,
} from '../screens';
import {useAuth} from '../context/AuthContext';
import React from 'react';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const {isLoggedIn, isLoading, user} = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{
            animationTypeForReplace: user ? 'push' : 'pop',
          }}
        />
      ) : (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
