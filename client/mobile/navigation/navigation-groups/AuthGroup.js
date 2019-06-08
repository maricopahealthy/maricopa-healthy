import React from 'react'
import ForgotPasswordScreen from "../../screens/Auth/ForgotPasswordScreen"
import LoginScreen from "../../screens/Auth/LoginScreen"
import ResetPasswordScreen from "../../screens/Auth/ResetPasswordScreen"
import SignUpScreen from "../../screens/Auth/SignUpScreen"

// navigation headers
import NavigationalHeaderBasic from "../../components/navigation-headers/NavigationalHeaderBasic";

export default {

  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Forgot Password"/>
    }
  },

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Login"/>
    }
  },

  ResetPassword: {
    screen: ResetPasswordScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Reset Password"/>
    }
  },

  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Sign Up"/>
    }
  },


}