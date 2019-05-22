import React from 'react';
import { createStackNavigator } from "react-navigation";
// screens
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import ResetPasswordScreen from "../screens/Auth/ResetPasswordScreen";
import Carousel from "../screens/Onboarding/Carousel";

/**
 * AuthStack is a stackNavigator used for authentication flow.
 * @type {NavigationContainer}
 */
const AuthStack = createStackNavigator({
  Carousel: Carousel,
  SignUp: SignUpScreen,
  Login: LoginScreen,
  ResetPassword: ResetPasswordScreen,
});

export default AuthStack;