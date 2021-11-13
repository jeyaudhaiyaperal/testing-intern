import React from "react"
import {StyleSheet} from 'react-native'
import { Colors } from '../utils/Colors';
import { windowWidth } from '../utils/utils';

const StylesComponent=StyleSheet.create({

    img1:{
        width: 100,
         height: 100,
          borderRadius: 100
    },
    docinfo_container:{
        flexDirection: 'column',
        width: windowWidth - 162, marginLeft: 16
    },
    doc_container:{
        flexDirection: 'row',
         justifyContent: 'space-between'
    },
    heartimg_container:{
        flexDirection: 'row',
         alignItems: 'flex-start'
    },
    heartimg:{
        width: 20,
         height: 20,
          tintColor: "#ff0000"
    },
    share_img:{
        width: 22,
         height: 22
    },
    location_container:{
        flexDirection: 'row',
         alignItems: 'center', 
         marginVertical: 6
    },
    location_img:{
        width: 20,
         height: 20,
         tintColor: "#51B7B7",
        marginRight: 4,
         marginLeft: -4,
    },
    clock_container:{
        flexDirection: 'row',
         alignItems: 'center', 
         marginVertical: 6
    },
    clock_img:{
        width: 13,
         height: 13,
          tintColor: "#51B7B7",
        marginRight: 8,
    },
    personal_container:{
        flexDirection: 'row',
         justifyContent: 'space-evenly'
    },
    personalInfo_card:{
        flexDirection: 'column',
         elevation: 4,
          shadowColor: 'silver',
           height: 75,
            paddingHorizontal: 16,
             paddingTop: 11,
              width: windowWidth / 3 - 25,
            justifyContent: 'center', 
            alignItems: 'center',
             borderRadius: 14
    },
    personalcard_image:{
        width: 20,
         height: 20,
         marginRight: 6,
          tintColor: Colors.BLUE2
    },
   tabcard_touchable:{
    flexDirection: 'row',
     justifyContent: 'space-evenly',
     alignItems: 'center'
   },
   arrowdown_img:{
    width: 15,
     height: 15,
      tintColor: Colors.BLUE
   },
   header_container:{
    width: windowWidth,
     backgroundColor: 'white',
      flexDirection: 'row',
    alignItems: 'center', 
    height: 52,
     paddingHorizontal: 20,
      justifyContent: 'space-between'
   },
   arrowback_container:{
    flexDirection: 'row',
     justifyContent: 'space-between'
   },
   arrowback_img:{
    width: 12,
     height: 20,
     tintColor: '#51B7B7'
   },
  show_touchable:{
    justifyContent: 'center',
     alignItems: 'center',
    width: 25,
 height: 25,
  borderWidth: 1,
    borderColor: 'black',
     borderRadius: 100,
  },
  user_img:{
    width: 22,
    height: 22,
   tintColor: '#000'
  },
  search_container:{
    flexDirection: 'row', 
    alignItems: 'center',
     marginTop: 10,
    borderRadius: 10,
    elevation: 5,
     shadowColor: '#999',
      overflow: 'hidden',
  },
  search_text:{
    backgroundColor: Colors.WHITE, 
    height: 50,
    color: "white", 
    width: "100%",
     paddingLeft: 24,
    borderRadius: 10,
  },
  mail_img:{
    width: 28,
     height: 28,
     position: 'absolute',
    tintColor: Colors.BLACK,
     right: 20
  }
  

})
export default StylesComponent