import React, { useContext, useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Image
} from "react-native";
import { Card } from "react-native-paper";
import { Colors } from "../utils/Colors";


const Search = () => {
    return (
        // <Card style={{ elevation: 4, shadowColor: '#999' }}>
        <View style={{
            flexDirection: 'row', alignItems: 'center', marginTop: 10,
            borderRadius: 10,
            elevation: 5, shadowColor: '#999', overflow: 'hidden',
        }}>
            <TextInput
                style={{
                    backgroundColor: Colors.WHITE, height: 50,
                    color: "white", width: "100%", paddingLeft: 24,
                    borderRadius: 10,
                }}
                onChangeText={(text) => { }}
                placeholder="Search by doctor name or location"
                placeholderTextColor={Colors.ICONCOLOR}
            />
            <Image
                source={require("../../assets/mail-filter.png")}
                style={{
                    width: 28, height: 28, position: 'absolute',
                    tintColor: Colors.BLACK, right: 20
                }}
            />
        </View>
        // </Card>
    );
};

export default Search;

const styles = StyleSheet.create({
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15,
    },
    searchResults: {
        position: "absolute",
        zIndex: 1,
        top: 50,
    },
    singleResult: {
        borderRadius: 5,
        padding: 10,
        margin: 0.5,
        shadowColor: "black",
        elevation: 5,
    },
});