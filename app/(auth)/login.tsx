import { View, Text, Platform } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = () => {
  return (
    <SafeAreaView
      className='bg-secondary flex-1 justify-start items-center gap-10'
    >
      <View
        className='bg-primary w-full h-1/2 rounded-b-[53px] -mt-5'
        style={Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,
          },
          android: {
            elevation: 15,
          }
        })}
      ></View>
      <Text>LoginPage</Text>
      <Link href={"/"}>
        <Text style={{
          color: 'blue',
        }}>
          Go to Home
        </Text>
      </Link>
    </SafeAreaView>
  );
};

export default LoginPage;