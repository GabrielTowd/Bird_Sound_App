import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container : {
    paddingLeft: 40,
    paddingRight: 40,
    shadowOffset:{  width: 2,  height: 5,  },
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: .2,
    shadowRadius: 5,
  },
  image : {
    width: deviceWidth -80,
    height: deviceWidth -80,
    borderRadius : 15,
  }
})

export default class Album extends Component {
  onSwipeLeft() {
    this.props.nextSound();
  }

  onSwipeRight() {
    this.props.previousSound();
  }

  render() {
    return (
      <View style={styles.container}>
        <GestureRecognizer
          onSwipeLeft={() => this.onSwipeLeft()}
          onSwipeRight={() => this.onSwipeRight()}
        >
          <Image
            style={styles.image}
            source={{uri : this.props.url}}
            resizeMode="cover"
          />
        </GestureRecognizer>
      </View>
    )
  }
}