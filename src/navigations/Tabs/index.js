import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import HomeNavigator from './HomeNavigator'
import PackageNavigator from './PackageNavigator'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        size = focused ? 30: 20;
                        return <Feather name='home' size={size} color="black" />
                    } else if (route.name === 'Package') {
                        size = focused ? 30: 20;
                        return <AntDesign name='customerservice' size={size} color={color} />;
                    }
                    
                },
            })}
        >
            <Tab.Screen name='Home' component={HomeNavigator} />
            <Tab.Screen name='Package' component={PackageNavigator} />

        </Tab.Navigator>
    )
}

export default TabsNavigator