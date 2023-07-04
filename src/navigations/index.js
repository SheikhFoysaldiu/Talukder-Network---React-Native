import { NavigationContainer } from '@react-navigation/native'
;
import TabsNavigator from './Tabs';


const AppNavigator = () => {
    return (
        <NavigationContainer> 
            <TabsNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator