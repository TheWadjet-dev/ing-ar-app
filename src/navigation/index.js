{/* Importamos librerias */}
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SingInScreen/SingInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/CofirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen/index';
import {Auth, Hub} from 'aws-amplify';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  
  const [user, setUser] = useState(undefined);

  const checkUser = async() => {
    try{
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    }catch(e){
      setUser(null);
    }
  };
  
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() =>{
    const listener = (data) => {
      if(data.payload.event === 'signIn' || data.payload.event === 'signOut'){
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return() => Hub.remove('auth', listener);
  }, [])

  if (user === undefined){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name='Home' component={HomeScreen}/>
        ): (
          <>
          <Stack.Screen name='SignIn' component={SignInScreen}/>
          <Stack.Screen name='SignUp' component={SignUpScreen}/>
          <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen}/>
          <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
          <Stack.Screen name='ResetPassword' component={ResetPasswordScreen}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;