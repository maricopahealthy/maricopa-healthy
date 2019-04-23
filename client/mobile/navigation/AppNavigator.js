/**
 * @file Creates top-level navigation container and links it to the app environment.
 * @author Oscar Sandoval
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from "../screens/LoadingScreen";

// Navigators
import AuthStack from './AuthStack'
import AppStack from './AppStack'

/**
 * The purpose of SwitchNavigator is to only ever show one screen at a time. By, default
 * it does not handle back actions and it resets routes to their default state when you
 * switch away. This is the behavior that we want from the authentication flow.
 */
const switchNavigator = createSwitchNavigator(
    {
      AuthLoading: LoadingScreen,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: "AuthLoading",
    }
);

export default createAppContainer(switchNavigator);