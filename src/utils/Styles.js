import React from 'react'
import {StyleSheet} from 'react-native'
import { Colors } from '../utils/Colors';
import { windowWidth } from '../utils/utils';
const Styles2=StyleSheet.create({
    time_tab:{
        flexDirection: 'row',
         justifyContent: 'space-around',
          marginTop: 30
    },
    book_app:{
        width: windowWidth - 2,
         height: 58,
         backgroundColor: '#EFA860',
         justifyContent: 'center',
         alignItems: 'center', 
         borderRadius: 8,
        shadowColor: "#999999",
         shadowOpacity: 0.1,
          elevation: 9,
         shadowRadius: 2,
          shadowOffset: { height: 2, width: 0 }
    },
    textStyle1:{
        color: Colors.LIGHTGRAY,
        fontWeight: '300'
    },
    clinic_app:{
        color: "black", 
        marginLeft: 4
    },
    image1:{
        width: 15,
         height: 15,
        tintColor: Colors.BLUE
    },
    container:{
        flexDirection: 'row',
         justifyContent: 'space-evenly',
          alignItems: 'center'
    },
    image1_container_wrapper:{
        flexDirection: 'row',
         justifyContent: 'space-between',
        paddingLeft: 15,
       paddingVertical: 10,
        alignItems: 'center', width: "90%",
    },

    image1_container:{
        width: 30,
         backgroundColor: '#eee',
         justifyContent: 'center',
         alignItems: 'center',
         height: 30, 
         borderRadius: 200,
    },
    card:{
        elevation: 5,
         shadowColor: '#999',
          marginTop: 20
    },
    card2:{
        elevation: 5,
        shadowColor: '#999',
        marginTop: 12,
        marginHorizontal: 16
    },
    card2_container:{
        flexDirection: 'row',
         justifyContent: 'space-between', 
         alignItems: 'center'
    },
    slotTab_container:{
        flexDirection: 'row', 
        justifyContent: 'space-around',
         marginTop: 30
    },
    awesome_container:{
        justifyContent: 'center',
         alignItems: 'center',
          marginVertical: 50
    },
    bookapp_container:{
        justifyContent: 'center',
         alignItems: 'center'
    },
    textStyle2:{
        fontSize: 18,
         color: 'white'
    },
    Scrollview:{
        backgroundColor: 'white',
         paddingTop: 10 
    },
    awesome_container2:{
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buildcard_image:{
        width: 18,
         height: 18,
          tintColor: '#3387d2'
    },
    textStyle3:{
        fontSize: 12,
         color: 'black',
          marginLeft: 4 
    },
    customcard_container:{
        elevation: 10,
         marginVertical: 16,
         shadowColor: "silver",
         paddingBottom: 10
    },
    customcard_image1:{
        width: 75,
         height: 75,
         borderRadius: 100 
    },
    custom_card1:{
        width: 14,
         height: 14,
         backgroundColor: '#51B7B7',
        borderRadius: 100,
         position: 'absolute',
         right: 0,
         top: 54, 
        borderWidth: 2,
         borderColor: 'white',
         elevation: 4,
         shadowColor: '#999'
    },
    docinfo_container:{
        flexDirection: 'column',
        width: windowWidth - 148
    },
    docinfo:{
        flexDirection: 'row',
         justifyContent: 'space-between'
    },
    starimg_container:{
        flexDirection: 'row',
         alignItems: 'flex-start'
    },
    star_img:{
        width: 20,
         height: 20
    },
    heartimg_container:{
        width: 12
    },
   heart_img:{
    width: 22,
    height: 22,
   tintColor: Colors.SILVER
   },
   docyears_container:{
    flexDirection: 'row',
     marginVertical: 4 
   },
   place_container:{
    width: 12
   },
   globeimg_container:{
    flexDirection: 'row',
     alignItems: 'center',
      marginVertical: 6 
   },
   globe_img:{
    width: 16, 
    height: 16, 
    tintColor: "#51B7B7",
    marginRight: 4,
   },
   divider_line:{
    width: windowWidth - 70,
     backgroundColor: '#eee',
     height: 1.3,
    marginTop: -8,
   },
   appointment_container:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
     paddingHorizontal: 20,
    alignItems: 'center',
     marginTop: 8
   },
   fee_text:{
    fontSize: 26,
     color: 'black',
      fontWeight: '600'
   },
   appointment_text:{
    fontSize: 16,
     color: 'white',
      marginLeft: 4
   }

    


    


    
})
export default Styles2