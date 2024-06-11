// App.js
import React from 'react';
import { Text, View } from 'react-native';
import tw from './tailwind';

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-lg text-blue-500`}>
        Hello, Tailwind CSS in React Native!
      </Text>
    </View>
  );
}
