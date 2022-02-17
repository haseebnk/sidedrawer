import React from 'react';
import { View , Text } from 'react-native';

const Header = (props) => {
    const {textStyle , viewStyle} = styles;
    
return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View> 
);
}



const styles = {
viewStyle:{
backgroundColor:'#009688',
justifyContent:'center',
alignItems:'center',
height:60,
paddingTop:15,
shadowColor: '#000',
shadowOffset: { width: 0, height: 12 },
shadowOpacity: 0.8,
elevation: 2,
position: 'relative',


},

textStyle: {
    fontWeight:'bold',
    color:'#fff',
    fontSize:22,
}
}

export default Header;



// import React from 'react';
// import { View, Text} from 'react-native';

// const Header = () => {
//     return(
//         <View>
//             <Text style={{ color: 'yellow', fontSize: 30}}>
//                 Albums!!
//             </Text>
//         </View>
//     );
// }

// export default Header;