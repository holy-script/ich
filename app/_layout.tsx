import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { GlobalProvider } from '@/context/GlobalProvider';
import * as SplashScreen from "expo-splash-screen";
import { Stack } from 'expo-router';
import '../global.css';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { useFonts } from 'expo-font';
import { Iceberg_400Regular } from '@expo-google-fonts/iceberg';
import { Karla_300Light, Karla_500Medium } from '@expo-google-fonts/karla';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true
});

NavigationBar.setVisibilityAsync('hidden');

NavigationBar.setBehaviorAsync('overlay-swipe');

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    Iceberg_400Regular,
    Karla_300Light,
    Karla_500Medium,
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

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