import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const deviceHeight = Dimensions.get('window').height;
export default function App() {
  return (
    <View style={s.bg}>
      Hi
    </View>);
}
const s = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(236, 239, 240)',
  }
})