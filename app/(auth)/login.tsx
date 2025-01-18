import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const LoginPage = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }}>
      <Text>LoginPage</Text>
      <Link href={"/"}>
        <Text style={{
          color: 'blue',
        }}>
          Go to Home
        </Text>
      </Link>
    </View>
  );
};

export default LoginPage;