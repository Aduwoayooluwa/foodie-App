import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/onBoarding/OnBoardingScreen2';
import OnBoardingScreen from './src/screens/onBoarding/OnBoardingScreen';
import OnBoardingScreen2 from './src/screens/onBoarding/OnBoardingScreen2';
import OnBoardingScreen3 from './src/screens/onBoarding/OnBoardingScreen3';
import { View, Text, StyleSheet } from 'react-native';
import SignInScreen from './src/screens/auth/SignInScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={OnBoardingScreen} options={{headerShown: false}}/>
            <Stack.Screen name="OnBoardSecond" component={OnBoardingScreen2} options={{headerShown: false}}/>
            <Stack.Screen name="OnBoardingScreen3" component={OnBoardingScreen3} options={{headerShown: false}}/>
            <Stack.Screen name="Signin" component={SignInScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={SignUpScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
