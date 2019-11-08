import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native';
import { Images, Profiles } from '../Themes';


export default function MiddleArea() {

  var haroldProfile = Profiles.harold;
  this.state = {
    profileImage: haroldProfile.image,
    name: haroldProfile.name,
    age: haroldProfile.age,
    occupation: haroldProfile.occupation
  };

  return (
    <View style = {styles.middle}>
      <View style = {styles.middleArea}>
        <Image style = {styles.profImage} source = {this.state.profileImage}/>
        <View style = {styles.profInfo}>
          <Text style = {{fontSize: 24 , fontWeight: 'bold'}}>
            {this.state.name + "," }
          </Text>
          <Text style = { {fontSize: 24}}>
            {this.state.age}
          </Text>
        </View>
        <Text style = {styles.job}>
          {this.state.occupation}
        </Text>
      </View>
    </View>
  )
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleArea: {
    width: .4* height,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#A5A5A5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profImage: {
    width: '100%',
    height: .4*height,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  profInfo: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
  },
  job: {
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 16,
    color: '#A5A5A5',
  },
});
