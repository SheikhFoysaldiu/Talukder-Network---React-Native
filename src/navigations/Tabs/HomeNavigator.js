import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import PackageScreen from '../../screens/PackageScreen/PackageScreen'
import WebVeiwScreen from '../../screens/WebVeiwScreen'


const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PackageScreen" component={PackageScreen} />
            <Stack.Screen
                name="WebViewScreen"
                component={WebVeiwScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator