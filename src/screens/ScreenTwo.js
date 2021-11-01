import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Header from '../components/Header';
import { Colors } from '../utils/Colors';
import { windowWidth } from '../utils/utils';

export default function ScreenTwo() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ height: 10 }} />
            <Header showIcon={true} text="Doctor's Profile" />
            <BuildTopComponent />

            <BuildSecondComponent />

            <Card style={{ elevation: 5, shadowColor: '#999', marginTop: 20, marginHorizontal: 16 }}>
                <BuildThirdCardComponent />

                <BuildFourthComponent />

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                    <TouchableOpacity style={{
                        width: '30%', height: 50, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: Colors.BLUE2, borderRadius: 12, elevation: 40,
                        shadowColor: '#999'
                    }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>11:00 AM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: '30%', height: 50, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: Colors.WHITE, borderRadius: 12, elevation: 6,
                    }}>
                        <Text style={{ color: Colors.LIGHTGRAY, fontSize: 16 }}>11:30 AM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: '30%', height: 50, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: Colors.WHITE, borderRadius: 12, elevation: 6,
                    }}>
                        <Text style={{ color: Colors.LIGHTGRAY, fontSize: 16 }}>12:00 AM</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: "center", marginVertical: 28 }}>
                    <Text style={{ color: Colors.BLUE2, fontSize: 18 }}>View All Slots</Text>
                </View>
            </Card>

            <Card style={{ elevation: 5, shadowColor: '#999', marginTop: 30, marginHorizontal: 16 }}>
                <BuildSixthCardComponent />

                <Card style={{ paddingHorizontal: 15, elevation: 5, shadowColor: '#999' }}>
                    <BuildFifthComponent />
                    <BuildFifthComponent />
                </Card>


                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                    <TouchableOpacity style={{
                        width: '30%', height: 50, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: Colors.BLUE2, borderRadius: 12,
                    }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>11:00 AM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: '30%', height: 50, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: Colors.WHITE, borderRadius: 12, elevation: 6,
                    }}>
                        <Text style={{ color: Colors.LIGHTGRAY, fontSize: 16 }}>11:30 AM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: '30%', height: 50, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: Colors.WHITE, borderRadius: 12, elevation: 6,
                    }}>
                        <Text style={{ color: Colors.LIGHTGRAY, fontSize: 16 }}>12:00 AM</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: "center", marginVertical: 28 }}>
                    <Text style={{ color: Colors.BLUE2, fontSize: 18 }}>View All Slots</Text>
                </View>
            </Card>

            <View style={{
                justifyContent: 'center', alignItems: 'center', marginVertical: 50
            }}>
                <TouchableOpacity style={styles.button_bookAppointment}>
                    <Text style={{ fontSize: 16, color: 'white', marginLeft: 4 }}>Book Appointment</Text>
                </TouchableOpacity>
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
        </ScrollView>
    )
}

const BuildTopComponent = () => {
    return (
        <View style={styles.shadow}>
            <View>
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                    style={{ width: 110, height: 110, borderRadius: 100 }}
                />
                <Card style={{
                    width: 14, height: 14, backgroundColor: '#51B7B7',
                    borderRadius: 100, position: 'absolute',
                    right: 5, bottom: 22, borderWidth: 2, borderColor: 'white',
                    elevation: 4, shadowColor: '#999'
                }} />
            </View>
            <View style={{ flexDirection: 'column', width: windowWidth - 162, marginLeft: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: Colors.BLACK }}>
                        Dr. Co Ekaterine
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Image
                            source={require("../../assets/heart-fill.png")}
                            style={{ width: 20, height: 20, tintColor: "#ff0000" }}
                        />
                        <View style={{ width: 10 }} />
                        <Image
                            source={require("../../assets/share.png")}
                            style={{ width: 22, height: 22 }}
                        />
                    </View>
                </View>
                <Text style={{ fontSize: 16, fontWeight: '300', color: Colors.BLACK }}>
                    Gynaecologist | MBBS, NBD
                </Text>
                <View style={{ height: 4 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 6 }}>
                    <Image
                        source={require('../../assets/location.png')}
                        style={{
                            width: 20, height: 20, tintColor: "#51B7B7",
                            marginRight: 4, marginLeft: -4,
                        }}
                    />
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: '300', }}>
                        Location: Delhi, India
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 6 }}>
                    <Image
                        source={require('../../assets/clock.png')}
                        style={{
                            width: 13, height: 13, tintColor: "#51B7B7",
                            marginRight: 8,
                        }}
                    />
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: '300' }}>
                        Available Time:
                    </Text>
                    <Text style={{ fontSize: 13, color: '#51B7B7', marginLeft: 4 }}>
                        9:00 am to 10:00 am
                    </Text>
                </View>
            </View>
        </View>
    );
}

const BuildSecondComponent = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Card style={{
                flexDirection: 'column', elevation: 4, shadowColor: 'silver', height: 75,
                paddingHorizontal: 16, paddingTop: 11, width: windowWidth / 3 - 25,
                justifyContent: 'center', alignItems: 'center', borderRadius: 14
            }}>
                <Text style={{ fontSize: 14, color: 'grey', fontWeight: '300', textAlign: 'center' }}>
                    Patients
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Image
                        source={require("../../assets/users.png")}
                        style={{ width: 20, height: 20, marginRight: 6, tintColor: Colors.BLUE }}
                    />
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>1000+</Text>
                </View>
            </Card>

            <Card style={{
                flexDirection: 'column', elevation: 4, shadowColor: 'silver', height: 75,
                paddingHorizontal: 16, paddingTop: 11, width: windowWidth / 3 - 25,
                justifyContent: 'center', alignItems: 'center', borderRadius: 14
            }}>
                <Text style={{ fontSize: 14, color: 'grey', fontWeight: '300', textAlign: 'center' }}>
                    Experience
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Image
                        source={require("../../assets/scholar.png")}
                        style={{ width: 20, height: 20, marginRight: 6, tintColor: Colors.BLUE2 }}
                    />
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>10 yes+</Text>
                </View>
            </Card>

            <Card style={{
                flexDirection: 'column', elevation: 4, shadowColor: 'silver', height: 75,
                paddingHorizontal: 16, paddingTop: 11, width: windowWidth / 3 - 25,
                justifyContent: 'center', alignItems: 'center', borderRadius: 14
            }}>
                <Text style={{ fontSize: 14, color: 'grey', fontWeight: '300', textAlign: 'center' }}>
                    Rating
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Image
                        source={require("../../assets/star.png")}
                        style={{ width: 20, height: 20, marginRight: 6 }}
                    />
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>4.5</Text>
                </View>
            </Card>
        </View>
    );
}

const BuildThirdCardComponent = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Card style={{
                elevation: 5, shadowColor: '#999', paddingHorizontal: 20, paddingVertical: 12,
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'
                }}>
                    <Text style={{ color: Colors.BLUE, marginRight: 20 }}>April</Text>
                    <Image
                        source={require("../../assets/arrow-down.png")}
                        style={{ width: 15, height: 15, tintColor: Colors.BLUE }}
                    />
                </View>
            </Card>

            <View style={{
                flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'
            }}>
                <Text style={{ color: Colors.BLUE, marginRight: 20 }}>2021</Text>
                <Image
                    source={require("../../assets/arrow-down.png")}
                    style={{ width: 15, height: 15, tintColor: Colors.BLUE }}
                />
            </View>

            <Text style={{ color: '#3893e3', fontSize: 20 }}>₹ 500</Text>
        </View>
    );
}

const BuildFourthComponent = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', width: '33%',
                borderBottomWidth: 3, borderBottomColor: Colors.BLUE, paddingBottom: 4
            }}>
                <Text style={{ color: 'black', fontWeight: '600', marginRight: 6, fontSize: 12.5 }}>
                    Today
                </Text>
                <Text style={{ color: Colors.BLUE, fontWeight: '600', fontSize: 12.5 }}>11 Slots</Text>
            </View>

            <View style={{
                flexDirection: 'row', justifyContent: 'center', width: '33%', paddingBottom: 4
            }}>
                <Text style={{ color: 'black', fontWeight: '600', marginRight: 6, fontSize: 12.5 }}>
                    Tomorrow
                </Text>
                <Text style={{ color: Colors.BLUE, fontWeight: '600', fontSize: 12.5 }}>40 Slots</Text>
            </View>

            <View style={{
                flexDirection: 'row', justifyContent: 'center', width: '33%', paddingBottom: 4
            }}>
                <Text style={{ color: 'black', fontWeight: '600', marginRight: 6, fontSize: 12.5 }}>
                    10 May
                </Text>
                <Text style={{ color: "silver", fontWeight: '600', fontSize: 12.5 }}>No Slots</Text>
            </View>
        </View>
    );
}

const BuildFifthComponent = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Card style={{ elevation: 5, shadowColor: '#999', marginTop: 20 }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    paddingLeft: 15, paddingVertical: 10,
                    alignItems: 'center', width: "90%",
                }}>
                    <View style={{
                        width: 30, backgroundColor: '#eee', justifyContent: 'center',
                        alignItems: 'center', height: 30, borderRadius: 200,
                    }}>
                        <Image
                            source={require("../../assets/arrow-down.png")}
                            style={{ width: 15, height: 15, tintColor: Colors.BLUE }}
                        />
                    </View>
                    <Text style={{ color: "black", marginLeft: 4 }}>
                        In-Clinic Appointment
                    </Text>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Text style={{ color: Colors.LIGHTGRAY, fontWeight: '300' }}>
                            Fees: $ 80.70
                        </Text>
                        <Text style={{ color: Colors.LIGHTGRAY, fontWeight: '300' }}>
                            ₹ 1400
                        </Text>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const BuildSixthCardComponent = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Card style={{
                elevation: 0, backgroundColor: '#f7f8f9', width: "33.3%", paddingVertical: 12,
            }}>
                <Text style={{ color: Colors.BLUE, marginRight: 20, textAlign: 'center' }}>Overview</Text>
            </Card>

            <Card style={{
                elevation: 5, shadowColor: '#999', width: "33.3%", paddingVertical: 11,
            }}>
                <Text style={{ color: Colors.BLUE, marginRight: 20, textAlign: 'center' }}>Fees</Text>
            </Card>

            <Card style={{
                elevation: 0, backgroundColor: '#f7f8f9', width: "33.3%", paddingVertical: 12,
            }}>
                <Text style={{ color: Colors.BLUE, marginRight: 20, textAlign: 'center' }}>Reviews</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        flexDirection: 'row', marginVertical: 20,
        paddingHorizontal: 16, borderRadius: 8,
        justifyContent: 'space-between',
        width: windowWidth - 32,
        backgroundColor: 'white'
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
        paddingHorizontal: 32,
        paddingVertical: 18
    }
});

