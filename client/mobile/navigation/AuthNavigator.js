import React from 'react';
import { createStackNavigator } from "react-navigation";
// screens
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import ResetPasswordScreen from "../screens/Auth/ResetPasswordScreen";

/**
 * AuthNavigator is a stackNavigator used for authentication flow.
 * @type {NavigationContainer}
 */
const AuthNavigator = createStackNavigator({
  OnBoarding: OnboardingScreen,
  SignUp: SignUpScreen,
  Login: LoginScreen,
  ResetPassword: ResetPasswordScreen,
});

export default AuthNavigator;