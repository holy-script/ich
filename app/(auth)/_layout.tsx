import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          title: 'Login',
        }}
      />
    </Stack>
  );
};

export default AuthLayout;