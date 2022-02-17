import React from 'react';
import {View, Text, ScrollView ,Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  return(
    <ScrollView>
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image 
          style={styles.thumbnailStyle}
          source={require('../components/images/user.png')} />
        </View>
        <View style={styles.headerContentStyle}>
        <Text style={styles.nameTextStyle}>{props.album.name}</Text>
        <Text>{props.album.email}</Text>
        </View>
      </CardSection>
    <CardSection>
      <Image 
      style={styles.imageStyle}
      source={require('../components/images/taylor.jpg')} />
    </CardSection>
    <CardSection>
      <Button/>
    </CardSection>
    </Card>
    </ScrollView>
  );
};

const styles ={
 headerContentStyle:{
    flexDirection: 'column',
    justifyContent:'space-around',
    
 },
 nameTextStyle:{
fontSize:20,
fontWeight: 'bold',
 },

 thumbnailStyle:{
  height:50,
  width:50,
},
thumbnailContainerStyle:{
  justifyContent:'center',
  alignItems:'center',
  marginLeft:10,
  marginRight:10,
},

imageStyle:{
  height:300,
  flex:1,
  width:null,
  }


};

export default AlbumDetail;