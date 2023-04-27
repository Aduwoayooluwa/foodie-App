import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';

const Stack = createStackNavigator()

const AppNavigation = () => {
    return <>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
            <Stack.Screen name="Details" component={OnBoardingScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </>
}

export default AppNavigation