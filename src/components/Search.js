import React, { useContext, useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Image
} from "react-native";
import { Colors } from "../utils/Colors";


const Search = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 46, marginTop: 10 }}>
            <TextInput
                style={{
                    backgroundColor: Colors.INPUTFILLCOLOR, height: 50,
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