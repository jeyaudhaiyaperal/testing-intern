import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ScreenOne"
                component={ScreenOne}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ScreenTwo"
                component={ScreenTwo}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ScreenThree"
                component={ScreenThree}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default NavigationStack;

const styles = StyleSheet.create({
    larrow: {
        height: 18,
        width: 18,
        resizeMode: 'cover',
    },
    splashText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    logo: {
        height: 110,
        width: 110,
        resizeMode: 'cover',
    },
})
