import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native';
import { Images, Profiles } from './App/Themes';
import TopBar from './App/Components/TopBar'
import MiddleArea from './App/Components/MiddleArea'
import BottomBar from './App/Components/BottomBar'

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.padding}/>
        <TopBar/>
        <MiddleArea/>
        <BottomBar/>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#F2F2F2'
  },
  padding: {
    height: 25,
  },
});
