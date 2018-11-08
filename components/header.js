import React, { Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';

export default class Header extends Component{
  render(){
    return (
  <View style={styles.container}>
    <Text style={styles.title}>{this.props.birdName}</Text>
    <View style={styles.locationContainer}>
      <Image
        style={styles.locationImg}
        source={require('../assets/location.png')}
        resizeMode="contain"
      />
      <Text style={styles.locationText}>{this.props.birdLocation}</Text>
    </View>
  </View>
    )
  }
};

const deviceWidth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container : {
    paddingTop: deviceWidth * 15 / 100,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: deviceWidth * 5 / 100,
    flexDirection: 'column'
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 40,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems : 'center'
  },
  locationImg: {
    width:20,
    paddingRight: 5
  },
  locationText: {
    textAlign: 'left',
    fontWeight: '300',
    fontSize: 25,
  }
});