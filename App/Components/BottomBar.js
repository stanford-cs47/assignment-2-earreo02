import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native';
import { Images, Profiles } from '../Themes';


export default function BottomBar() {
  return (
    <View style = {styles.botNavBar}>
      <View style = {styles.smallCircle}>
        <Image style={styles.smallImage} source={Images.rewind}/>
      </View>
      <View style = {styles.bigCircle}>
        <Image style={styles.bigImage} source={Images.nope}/>
      </View>
      <View style = {styles.smallCircle}>
        <Image style={styles.smallImage} source={Images.boost}/>
      </View>
      <View style = {styles.bigCircle}>
        <Image style={styles.bigImage} source={Images.like}/>
      </View>
      <View style = {styles.smallCircle}>
        <Image style={styles.smallImage} source={Images.superLike}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  botNavBar: {
    width: '80%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallCircle: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF'
  },
  bigCircle:{
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#FFFFFF'
  },
  smallImage:{
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  bigImage:{
    width:40,
    height:40,
    resizeMode: 'contain',
  },
});
