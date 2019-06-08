import React from 'react';
import { createStackNavigator } from "react-navigation";
// screens
import AuthGroup from "./navigation-groups/AuthGroup"
import Carousel from "../screens/Onboarding/Carousel";

/**
 * AuthStack is a stackNavigator used for authentication flow.
 * @type {NavigationContainer}
 */
const AuthStack = createStackNavigator({
  Carousel: Carousel,
  SignUp: AuthGroup.SignUp,
  Login: AuthGroup.Login,
  ResetPassword: AuthGroup.ResetPassword,
  ForgotPassword: AuthGroup.ForgotPassword,
});

export default AuthStack;