import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View} from 'react-native';
import tw from 'twrnc';
import MainStackRouter from "./Source/Routing/MainStack";

export default function App() {
  return (
    <SafeAreaView style={tw `flex-1`}>
      <MainStackRouter/>
    </SafeAreaView>
  );
}

