import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/utils';
import { useNavigation } from '@react-navigation/native';

export default function Header() {

    const navigation = useNavigation();

    return (
        <View style={{
            width: windowWidth, backgroundColor: 'white', flexDirection: 'row',
            alignItems: 'center', height: 52, paddingHorizontal: 20, justifyContent: 'space-between'
        }}>
            <View flexDirection='row'>
                <TouchableOpacity>
                    <Image
                        source={require("../../assets/arrow-back.png")}
                        style={{ width: 12, height: 20, tintColor: '#51B7B7' }}
                    />
                </TouchableOpacity>
                <View style={{ width: 20 }} />
                <Text style={{ fontSize: 15, color: '#51B7B7' }}>
                    Doctor's for 'Bad Stomach'
                </Text>
            </View>
            <TouchableOpacity style={{
                width: 30, height: 30, borderWidth: 1, borderColor: 'black',
                borderRadius: 100, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
                navigation.navigate("ScreenTwo")
            }}>
                <Image
                    source={require("../../assets/user.png")}
                    style={{ width: 24, height: 24, tintColor: '#000' }}
                />
            </TouchableOpacity>
        </View>
    )
}
