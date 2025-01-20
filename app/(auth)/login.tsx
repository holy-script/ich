import { View, Text, Platform, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const LoginPage = () => {
  return (
    <SafeAreaView
      className='bg-secondary flex-1 justify-start items-center gap-10'
    >
      <View
        className='bg-primary w-full h-1/2 rounded-b-[53px] -mt-5 flex justify-center items-center'
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
      >
        <Text
          style={{
            fontFamily: 'Iceberg_400Regular',
            fontSize: 100,
          }}
          className='text-white'
        >
          ICH
        </Text>
        <Text
          style={{
            fontFamily: 'Karla_300Light',
            fontSize: 35,
          }}
          className='text-white'
        >
          ISI Code Hub
        </Text>
      </View>
      <View
        className='flex flex-col gap-3 w-3/5 mt-5'
      >
        <Text
          style={{
            fontFamily: 'Karla_500Medium',
            fontSize: 30,
          }}
          className='text-white'
        >
          Login
        </Text>
        <Text
          style={{
            fontFamily: 'Karla_500Medium',
            fontSize: 15,
          }}
          className='text-white'
        >
          Please sign in to continue
        </Text>
        <View
          className='flex flex-col gap-6 mt-8'
        >
          <TextInput
            placeholder='Username'
            className='border-2 border-primary rounded-md h-12 px-3 text-tertiary'
            placeholderTextColor={'#BCBCBC'}
          />
          <TextInput
            placeholder='Password'
            className='border-2 border-primary rounded-md h-12 px-3 text-tertiary'
            placeholderTextColor={'#BCBCBC'}
          />
          <View
            className='items-center mt-3'
          >
            <TouchableOpacity
              className='bg-white h-12 w-3/4 rounded-full flex flex-row justify-center items-center gap-2'
            >
              <Text
                style={{
                  fontFamily: 'Karla_500Medium',
                  fontSize: 15,
                }}
              >
                Login
              </Text>
              <MaterialIcons
                name='arrow-forward'
                size={21}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          className='flex items-center justify-center mt-4'
        >
          <Link
            href={'/'}
            className='underline text-primary'
            style={{
              fontFamily: 'Karla_500Medium',
              fontSize: 15,
            }}
          >
            Forgot Password?
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;