import React from 'react';
import { createStackNavigator } from "react-navigation";
// screens
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import ResetPasswordScreen from "../screens/Auth/ResetPasswordScreen";

/**
 * AuthStack is a stackNavigator used for authentication flow.
 * @type {NavigationContainer}
 */
const AuthStack = createStackNavigator({
  OnBoarding: OnboardingScreen,
  SignUp: SignUpScreen,
  Login: LoginScreen,
  ResetPassword: ResetPasswordScreen,
});

export default AuthStack;