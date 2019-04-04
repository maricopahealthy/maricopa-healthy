import React from 'react';
import { createStackNavigator } from "react-navigation";
// screens
import OnBoardingScreen from "../screens/OnBoardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

/**
 * AuthNavigator is a stackNavigator used for authentication flow.
 * @type {NavigationContainer}
 */
const AuthNavigator = createStackNavigator({
  OnBoarding: OnBoardingScreen,
  SignUp: SignUpScreen,
  Login: LoginScreen,
  ResetPassword: ResetPasswordScreen,
});

export default AuthNavigator;