import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalInfoScreen from '../BaiTap01/Screen/PersonalInfoScreen';
import HomeScreen from '../BaiTap01/Screen/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PersonalInfo">
                <Stack.Screen 
                    name="PersonalInfo" 
                    component={PersonalInfoScreen} 
                    options={{ title: 'Thông tin cá nhân' }} 
                />
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'Trang chủ' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
