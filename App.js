import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native';
import { Images, Profiles } from './App/Themes';

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
        <View style = {styles.topNavBar}>
          <Image style={styles.icons} source={Images.settings}/>
          <Image style={styles.tinderIcon} source={Images.logo}/>
          <Image style={styles.icons} source={Images.chat}/>
        </View>

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
