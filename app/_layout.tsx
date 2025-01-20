import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { GlobalProvider } from '@/context/GlobalProvider';
import * as SplashScreen from "expo-splash-screen";
import { Stack } from 'expo-router';
import '../global.css';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true
});

NavigationBar.setVisibilityAsync('hidden');

NavigationBar.setBehaviorAsync('overlay-swipe');

const RootLayout = () => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
            title: 'Auth',
          }}
        />
      </Stack>
      <StatusBar backgroundColor='#0466C8' />
    </GlobalProvider>
  );
};

export default RootLayout;