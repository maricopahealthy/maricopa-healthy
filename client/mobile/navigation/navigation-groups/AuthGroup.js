import React from 'react'
import ForgotPasswordScreen from "../../screens/Auth/ForgotPasswordScreen"
import LoginScreen from "../../screens/Auth/LoginScreen"
import ResetPasswordScreen from "../../screens/Auth/ResetPasswordScreen"
import SignUpScreen from "../../screens/Auth/SignUpScreen"

// navigation headers
import NavigationalHeaderAuth from "../../components/navigation-headers/NavigationalHeaderAuth";

export default {

  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      header: <NavigationalHeaderAuth title="Forgot Password"/>
    }
  },

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: <NavigationalHeaderAuth title="Login"/>
    }
  },

  ResetPassword: {
    screen: ResetPasswordScreen,
    navigationOptions: {
      header: <NavigationalHeaderAuth title="Reset Password"/>
    }
  },

  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: <NavigationalHeaderAuth title="Sign Up"/>
    }
  },


}