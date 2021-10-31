import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from "react-native-paper";
import Header from '../components/Header';
import Search from '../components/Search';
import { Colors } from '../utils/Colors';
import { windowWidth } from '../utils/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'native-base';

export default function ScreenOne() {
    return (
        <>
            <ScrollView style={{ backgroundColor: 'white', paddingTop: 10 }}>
                <Header />
                <View style={{ paddingHorizontal: 16 }}>
                    <Search />
                    <BuildCustomCardComponent />
                    <BuildCustomCardComponent />
                    <BuildCustomCardComponent />
                    <BuildCustomCardComponent />
                    <BuildCustomCardComponent />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        width: windowWidth - 2, height: 58, backgroundColor: '#EFA860',
                        justifyContent: 'center', alignItems: 'center', borderRadius: 8,
                        shadowColor: "#999999", shadowOpacity: 0.1, elevation: 9,
                        shadowRadius: 2, shadowOffset: { height: 2, width: 0 },
                    }}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Book Appointment</Text>
                    </TouchableOpacity>
                </View>
                <Text />
            </ScrollView>

        </>
    )
}

const BuildCardButtonComponent = ({ image, text }) => {
    return (
        <TouchableOpacity style={styles.button_shadow}>
            <Image
                source={image}
                style={{ width: 18, height: 18, tintColor: '#3387d2' }}
            />
            <Text style={{ fontSize: 12, color: 'black', marginLeft: 4 }}>{text}</Text>
        </TouchableOpacity>
    );
}

const BuildCustomCardComponent = () => {
    return (
        <Card style={{ elevation: 10, marginVertical: 16, shadowColor: "silver", paddingBottom: 10 }}>
            <View style={styles.shadow}>
                <View>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={{ width: 60, height: 60, borderRadius: 100 }}
                    />
                    <Card style={{
                        width: 14, height: 14, backgroundColor: '#51B7B7',
                        borderRadius: 100, position: 'absolute',
                        right: 5, top: 48, borderWidth: 2, borderColor: 'white',
                        elevation: 4, shadowColor: '#999'
                    }} />
                </View>
                <View style={{ flexDirection: 'column', width: windowWidth - 140 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.BLACK }}>
                            Dr. Co Ekaterine
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Image
                                source={require("../../assets/star.png")}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{
                                fontSize: 16, fontWeight: 'bold', color: Colors.BLACK,
                                marginHorizontal: 6
                            }}>4.5</Text>
                            <Image
                                source={require("../../assets/heart.png")}
                                style={{ width: 22, height: 22, tintColor: Colors.SILVER }}
                            />
                        </View>
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: '300', color: Colors.BLACK }}>
                        Gynaecologist | MBBS, NBD
                    </Text>
                    <View style={{ height: 8 }} />

                    <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                        <BuildCardButtonComponent
                            image={require("../../assets/user.png")}
                            text={"8 Years"}
                        />
                        <View style={{ width: 12 }} />
                        <BuildCardButtonComponent
                            image={require("../../assets/location.png")}
                            text={"Ahmedabad, IN"}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 6 }}>
                        <Image
                            source={require('../../assets/globe.png')}
                            style={{
                                width: 16, height: 16, tintColor: "#51B7B7",
                                marginRight: 4,
                            }}
                        />
                        <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Speaks : </Text>
                        <Text style={{ fontSize: 13, color: 'silver' }}>
                            English, Hindi, Gujarati, Marathi
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    width: windowWidth - 70, backgroundColor: '#eee', height: 1.3,
                    marginTop: -8,
                }} />
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20,
                alignItems: 'center', marginTop: 8
            }}>
                <Text style={{ fontSize: 26, color: 'black', fontWeight: '600' }}>₹ 700</Text>
                <TouchableOpacity style={styles.button_bookAppointment}>
                    <Text style={{ fontSize: 16, color: 'white', marginLeft: 4 }}>Book Appointment</Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    shadow: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginVertical: 20,
        width: windowWidth - 32,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    button_shadow: {
        flexDirection: 'row',
        shadowColor: "#999999",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 4,
        borderRadius: 30,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    button_bookAppointment: {
        flexDirection: 'row',
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 12,
        borderRadius: 30,
        backgroundColor: '#3893e4',
        paddingHorizontal: 16,
        paddingVertical: 12
    }
});
