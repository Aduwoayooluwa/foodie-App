import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen2 from '../screens/OnBoardingScreen2';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import OnBoardingScreen3 from '../screens/OnBoardingScreen3';

const Stack = createStackNavigator()

const AppNavigation = () => {
    return <>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={OnBoardingScreen} />
            <Stack.Screen name="OnBoardSecond" component={OnBoardingScreen2} />
            <Stack.Screen name="OnBoardingScreen3" component={OnBoardingScreen3} />
            
        </Stack.Navigator>
        </NavigationContainer>
    </>
}

export default AppNavigation