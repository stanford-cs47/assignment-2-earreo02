import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native';
import { Images, Profiles } from '../Themes';


export default function TopBar() {
  return (
    <View style = {styles.topNavBar}>
      <Image style={styles.icons} source={Images.settings}/>
      <Image style={styles.tinderIcon} source={Images.logo}/>
      <Image style={styles.icons} source={Images.chat}/>
    </View>
  )
}

const styles = StyleSheet.create({
  topNavBar: {
    height: Platform.OS == 'ios' ? 44 : 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icons: {
    height: 40,
    width: 40,
    tintColor: '#C5C5C5',
  },
  tinderIcon: {
    height: 40,
    width: '50%',
    resizeMode: 'contain'
  },
});
