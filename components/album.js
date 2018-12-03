import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, TouchableOpacity, Text } from 'react-native';
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
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default class Album extends Component {
  constructor(props){
    super(props)
  }
  
  onSwipeLeft() {
    this.props.nextSound();
  }

  onSwipeRight() {
    this.props.previousSound();
  }

  render() {
    return (
      <View style={styles.slide}>
        <GestureRecognizer
          onSwipeLeft={() => this.onSwipeLeft()}
          onSwipeRight={() => this.onSwipeRight()}
        >
            <Image
              style={styles.image}
              source={{uri : this.props.albumCover}}
              resizeMode="cover"
            />
        </GestureRecognizer>
      </View>
    )
  }
}