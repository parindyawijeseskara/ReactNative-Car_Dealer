import { View, Text, Button} from 'react-native'
import React from 'react'
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>

    </NavigationContainer>
  );
}
export default App;
