import { View, Text,Dimensions } from 'react-native'
import React from 'react'


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function OnboardingScreen() {
  return (
    <View>
      <Text>OnboardingScreen</Text>
    </View>
  )
}