import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/utils';
import { useNavigation } from '@react-navigation/native';
import StylesComponent from '../utils/StylesComponent';
export default function Header({ showIcon, text }) {

    const navigation = useNavigation();

    return (
        <View style={
            StylesComponent.header_container
        }>
            <View style={StylesComponent.arrowback_container}>
                <TouchableOpacity>
                    <Image
                        source={require("../../assets/arrow-back.png")}
                        style={ StylesComponent.arrowback_img}
                    />
                </TouchableOpacity>
                <View style={{ width: showIcon ? "29%" : 20 }} />
                <Text style={{ fontSize: 18, color: showIcon ? "#000" : '#51B7B7' }}>
                    {text}
                </Text>
            </View>
            {showIcon
                ? <TouchableOpacity
                    style={
                       StylesComponent.show_touchable
                    }
                    onPress={() => {
                        navigation.navigate("ScreenTwo")
                    }}
                >
                    <Image
                        source={require("../../assets/user.png")}
                        style={StylesComponent.user_img}
                    />
                </TouchableOpacity> : <></>}
        </View>
    )
}
