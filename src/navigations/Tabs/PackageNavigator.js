import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PackageScreen from '../../screens/PackageScreen/PackageScreen'


const Stack = createNativeStackNavigator()

const PackageNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CartScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="CartScreen" component={PackageScreen} />

        </Stack.Navigator>
    )
}

export default PackageNavigator