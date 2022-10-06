import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MainScreen from './screens/MainScreen';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}}/>
      {/* <Stack.Screen name="AddVehicleDetails" component={AddVehicleDetails} options={{headerShown:false}}/> */}

      

    </Stack.Navigator>

    </NavigationContainer>
  );
}
export default App;
