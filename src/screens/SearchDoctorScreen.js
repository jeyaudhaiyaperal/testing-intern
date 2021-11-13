import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from "react-native-paper";
import Header from '../components/Header';
import Search from '../components/Search';
import { Colors } from '../utils/Colors';
import { windowWidth } from '../utils/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/core';
import CustomTextComponent from '../components/CustomTextComponent';
import AwesomeButton from "react-native-really-awesome-button";
import Styles2 from "../utils/Styles"

export default function SearchDoctorScreen() {
    const navigation = useNavigation();
    return (
        <>
            <ScrollView style={{ backgroundColor: 'white', paddingTop: 10 }}>
                <Header showIcon={false} text="Doctor's for 'Bad Stomach'" />
                <View style={{ paddingHorizontal: 16 }}>
                    <Search />
                    {
                        [1, 2, 3, 4, 5, 6].map((data, index) => {
                            return (
                                <View key={index}>
                                    <BuildCustomCardComponent
                                        navigation={navigation}
                                        drName="Dr. Co Ekaterine"
                                        drInfo="Dynaecologist | MBBS, NBD"
                                        image='https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                        desc="English, Hindi, Gujarati, Maharathi"
                                    />
                                </View>
                            );
                        })
                    }
                </View>
                <View style={Styles2.bookapp_container}>
                    <AwesomeButton width={windowWidth - 10} height={58}
                        backgroundColor={"#EFA860"} justifyContent='center' alignItems='center'
                        backgroundShadow={"#fff"} activeOpacity={0.5} backgroundDarker="#fff"
                        onPress={() => { navigation.navigate("DoctorProfileScreen") }}
                    >
                        <Text style={Styles2.textStyle2}>Book Appointment</Text>
                    </AwesomeButton>
                    {/* <TouchableOpacity style={{
                        borderRadius: 8,
                        shadowColor: "#999999", shadowOpacity: 0.1, elevation: 9,
                        shadowRadius: 2, shadowOffset: { height: 2, width: 0 },
                    }}>
                        
                    </TouchableOpacity> */}
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
                style={Styles2.buildcard_image}
            />
            <Text style={Styles2.textStyle3}>{text}</Text>
        </TouchableOpacity>
    );
}

const BuildCustomCardComponent = ({ navigation, drName, drInfo, desc, rating, image }) => {
    return (
        <Card style={Styles2.customcard_container}>
            <View style={styles.shadow}>
                <View>
                    <Image
                        source={{ uri: image }}
                        style={Styles2.customcard_image1}
                    />
                    <Card style={Styles2.custom_card1
                     
                    } />
                </View>
                <View style={Styles2.docinfo_container}>
                    <View style={Styles2.docinfo }>
                        <CustomTextComponent
                            text={drName} fs={16} fw={"bold"} textColor={Colors.BLACK}
                        />
                        <View style={Styles2.starimg_container}>
                            <Image
                                source={require("../../assets/star.png")}
                                style={Styles2.star_img}
                            />
                            <CustomTextComponent
                                text={rating} fs={16} fw={"bold"} textColor={Colors.BLACK}
                            />
                            <View style={Styles2.heartimg_container} />
                            <Image
                                source={require("../../assets/heart.png")}
                                style={Styles2.heart_img}
                            />
                        </View>
                    </View>
                    <CustomTextComponent
                        text={drInfo} fs={14} fw={"300"} textColor={Colors.BLACK}
                    />
                    <View style={{ height: 8 }} />

                    <View style={Styles2.docyears_container}>
                        <BuildCardButtonComponent
                            image={require("../../assets/user.png")}
                            text={"8 Years"}
                        />
                        <View style={Styles2.place_container} />
                        <BuildCardButtonComponent
                            image={require("../../assets/location.png")}
                            text={"Ahmedabad, IN"}
                        />
                    </View>

                    <View style={Styles2.globeimg_container}>
                        <Image
                            source={require('../../assets/globe.png')}
                            style={
                              Styles2.globe_img
                            }
                        />
                        <CustomTextComponent
                            text={"Speaks: "} fs={13} fw={"bold"} textColor={Colors.BLACK}
                        />
                        <CustomTextComponent
                            text={desc} fs={13} fw={"normal"} textColor={"silver"}
                        />
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={
                  Styles2.divider_line
                } />
            </View>
            <View style={Styles2.appointment_container
             
            }>
                <Text style={Styles2.fee_text}>₹ 700</Text>
                <AwesomeButton width={160} height={50} borderRadius={100} backgroundColor={Colors.BLUE2}
                    backgroundShadow={"#368edd"} activeOpacity={0.5} backgroundDarker={"#3d7fba"}
                    onPress={() => { navigation.navigate("DoctorProfileScreen") }}
                >
                    <Text style={Styles2.appointment_text}>Book Appointment</Text>
                </AwesomeButton>
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
