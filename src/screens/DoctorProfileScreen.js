import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { BuildIntroductionComponent, BuildPersonalInfoComponent, BuildSlotsTabComponent, BuildTabCardComponent, BuildTimeSlotsComponent, OverviewTabBlock } from '../components/components';
import CustomTextComponent from '../components/CustomTextComponent';
import Header from '../components/Header';
import { Colors } from '../utils/Colors';
import { windowWidth } from '../utils/utils';
import AwesomeButton from "react-native-really-awesome-button";
import Styles2 from '../utils/Styles'

export default function DoctorProfileScreen() {

    const [showTab, setShowTab] = useState("tab1");
    const [showTimeTab, setShowTimeTab] = useState("val1");
    const [showOverviewTab, setShowOverviewTab] = useState("o1");

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ height: 10 }} />
            <Header showIcon={true} text="Doctor's Profile" />
            <BuildIntroductionComponent
                image='https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                name="Dr. Co Ekaterine"
                info="Gynaecologist | MBBS, NBD"
                location="Delhi, India"
                time="9:00 am to 10:00 am"
            />

            <BuildPersonalInfoComponent
                text1="1000+"
                image1={require("../../assets/users.png")}
                text2="10 yes+"
                image2={require("../../assets/scholar.png")}
                text3="4.5"
                image3={require("../../assets/star.png")}
            />
            <Text />

            <Card style={{ elevation: 5, shadowColor: '#999', marginTop: 10, marginHorizontal: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <BuildTabCardComponent
                        showTab={showTab}
                        selectedVal="tab1"
                        onPress={() => { setShowTab("tab1"); setShowTimeTab("val1") }}
                        text="April"
                    />

                    <BuildTabCardComponent
                        showTab={showTab}
                        selectedVal="tab2"
                        onPress={() => { setShowTab("tab2"); setShowTimeTab("") }}
                        text="2021"
                    />

                    <CustomTextComponent
                        text={"₹ 500"} fs={20} fw={"normal"} textColor={Colors.BLUE2}
                    />
                </View>

                {showTab === "tab1"
                    ? <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <BuildTimeSlotsComponent
                            text1="Today"
                            text2="11 Slots"
                            selectedVal="val1"
                            showTimeTab={showTimeTab}
                            onPress={() => { setShowTimeTab("val1") }}
                        />

                        <BuildTimeSlotsComponent
                            text1="Tomorrow"
                            text2="40 Slots"
                            selectedVal="val2"
                            showTimeTab={showTimeTab}
                            onPress={() => { setShowTimeTab("val2") }}
                        />

                        <BuildTimeSlotsComponent
                            text1="10 May"
                            text2="No Slots"
                            selectedVal="val3"
                            showTimeTab={showTimeTab}
                            onPress={() => { setShowTimeTab("val3") }}
                        />
                    </View>
                    : <></>}

                {showTab === "tab2" ? <View style={styles.extraBlockStyle}>
                    <CustomTextComponent
                        text={"No data"} fs={20} fw={"normal"} textColor={Colors.BLACK90}
                    />
                </View> : <></>}

                {showTimeTab === "val1"
                    ? <View style={Styles2.time_tab}>
                        <BuildSlotsTabComponent
                            text="11:00 AM"
                            isSelected={true}
                            onPress={() => { }}
                        />

                        <BuildSlotsTabComponent
                            text="11:30 AM"
                            isSelected={false}
                            onPress={() => { }}
                        />

                        <BuildSlotsTabComponent
                            text="12:00 AM"
                            isSelected={false}
                            onPress={() => { }}
                        />
                    </View>
                    : <></>}

                {showTimeTab === "val2" ? <View style={styles.extraBlockStyle}>
                    <CustomTextComponent
                        text={"No Slots"} fs={20} fw={"normal"} textColor={Colors.BLACK90}
                    />
                </View> : <></>}

                {showTimeTab === "val3" ? <View style={styles.extraBlockStyle}>
                    <CustomTextComponent
                        text={"No Slots"} fs={20} fw={"normal"} textColor={Colors.BLACK90}
                    />
                </View> : <></>}

                {/* <TouchableOpacity activeOpacity={0.5} style={{
                    justifyContent: 'center', alignItems: "center", marginVertical: 28
                }}>
                    <Text style={{ color: Colors.BLUE2, fontSize: 18 }}>View All Slots</Text>
                </TouchableOpacity> */}
                <Text />
            </Card>
            <Text />

            <Card style={Styles2.card2}>
                <View style={Styles2.card2_container}>
                    <OverviewTabBlock
                        text="Overview"
                        showTab={showOverviewTab}
                        selectedVal="o1"
                        onPress={() => { setShowOverviewTab("o1") }}
                    />

                    <OverviewTabBlock
                        text="Fees"
                        showTab={showOverviewTab}
                        selectedVal="o2"
                        onPress={() => { setShowOverviewTab("o2") }}
                    />

                    <OverviewTabBlock
                        text="Reviews"
                        showTab={showOverviewTab}
                        selectedVal="o3"
                        onPress={() => { setShowOverviewTab("o3") }}
                    />
                </View>

                {showOverviewTab === "o1"
                    ? <Card style={{ paddingHorizontal: 15, elevation: 5, shadowColor: '#999' }}>
                        <BuildFifthComponent />
                        <BuildFifthComponent />
                        <Text />
                    </Card> : <></>}

                {showOverviewTab === "o2"
                    ? <Card style={{ paddingHorizontal: 15, elevation: 5, shadowColor: '#999' }}>
                        <BuildFifthComponent />
                        <Text />
                    </Card> : <></>}

                {showOverviewTab === "o3" ? <View style={styles.extraBlockStyle}>
                    <CustomTextComponent
                        text={"No Slots"} fs={20} fw={"normal"} textColor={Colors.BLACK90}
                    />
                </View> : <></>}


                {showTimeTab === "val1"
                    ? <View style={Styles2. slotTab_container}>
                        <BuildSlotsTabComponent
                            text="11:00 AM"
                            isSelected={true}
                            onPress={() => { }}
                        />

                        <BuildSlotsTabComponent
                            text="11:30 AM"
                            isSelected={false}
                            onPress={() => { }}
                        />

                        <BuildSlotsTabComponent
                            text="12:00 AM"
                            isSelected={false}
                            onPress={() => { }}
                        />
                    </View>
                    : <></>}
                <Text />
            </Card>

            <View style={Styles2.awesome_container
               
            }>
                <AwesomeButton width={200} height={50} borderRadius={100} backgroundColor={Colors.BLUE2}
                    backgroundShadow={"#368edd"} activeOpacity={0.5} backgroundDarker={"#3d7fba"}
                    onPress={() => { }}
                >
                    <CustomTextComponent
                        text={"Book Appointment"} fs={16} fw={"normal"} textColor={"white"}
                    />
                </AwesomeButton>
            </View>

            <View style={Styles2.bookapp_container}>
                <TouchableOpacity style={
                    Styles2.book_app
                }>
                    <Text style={Styles2.textStyle2}>Book Appointment</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const BuildFifthComponent = () => {
    return (
        <View style={Styles2.container}>
            <Card style={Styles2.card}>
                <View style={
                   Styles2.image1_container_wrapper
               }>
                    <View style={
                       Styles2.image1_container
                    }>
                        <Image
                            source={require("../../assets/arrow-down.png")}
                            style={Styles2.image1}
                        />
                    </View>
                    <Text style={Styles2.clinic_app}>
                        In-Clinic Appointment
                    </Text>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Text style={Styles2.textStyle1}>
                            Fees: $ 80.70
                        </Text>
                        <Text style={Styles2.textStyle1}>
                            ₹ 1400
                        </Text>
                    </View>
                </View>
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({
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
    },
    extraBlockStyle: {
        width: '94%', height: 80, justifyContent: 'center', alignItems: 'center',
        marginBottom: -10, borderWidth: 1, borderColor: '#eeeeee', margin: 12,
        borderRadius: 10
    }
});

