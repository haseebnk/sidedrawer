import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = () => {

    return(
        <TouchableOpacity style={styles.buttonStyle}>
    <Text style={styles.textStylee}>
        Buy Now
    </Text>

        </TouchableOpacity>
    
    );

};
const styles ={

textStylee:{

    alignSelf:'center',
    color:'#fff',
    fontSize:16,
    fontWeight: 'bold',
    paddingTop:10,
    paddingBottom:10,
},


    buttonStyle:{

flex:1,
alignSelf:'stretch',
backgroundColor: "#009688",
borderRadius:5,
borderwidth:1,
borderColor:'#007aff',
marginLeft:5,
marginRight:5,

    }
};

export default Button;