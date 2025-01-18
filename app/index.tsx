import { View, Text } from 'react-native';
import React from 'react';
import { Link, Redirect } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider';

const HomePage = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (isLoading) {
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

  if (!isLoggedIn) return (
    <Redirect href={"/login"} />
  );

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }}>
      <Text>HomePage</Text>
      <Link href={"/login"}>
        <Text style={{
          color: 'blue',
        }}>
          Go to Login
        </Text>
      </Link>
    </View>
  );
};

export default HomePage;