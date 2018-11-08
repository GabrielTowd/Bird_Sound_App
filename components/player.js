import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

export default class Player extends Component {
  constructor(props){
    super(props);

    this.state= {
      time : 0,
      whoosh : null
    };
  }

  playSound(){
    this.state.whoosh.play();
    setTimeout(
      function(){
        this.props.togglePlay();
      }.bind(this), 
      this.state.time + 500
    );
  }

  componentDidUpdate(prevProps){
    if(this.props.paused !== prevProps.paused && !this.props.paused){
      this.playSound();
    }
    if(this.props.data !== prevProps.data){
      this.setState({whoosh : this.state.whoosh = new Sound(this.props.data.sound, Sound.MAIN_BUNDLE)});
    }
  }

  componentDidMount(){
    this.setState({whoosh : new Sound(this.props.data.sound, Sound.MAIN_BUNDLE)});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {this.props.before();}}>
          <Icon name='fast-rewind' size={30} color={'#B5BFCA'}/>
        </TouchableOpacity>
        {this.props.paused ?
        <TouchableOpacity onPress={() => {this.props.togglePlay(); this.playSound()}} style={styles.iconShadow}>
          <Icon name='play-circle-outline' size={80} color={'#B5BFCA'}/>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => {this.props.togglePlay();}} style={styles.iconShadow}>
          <Icon name='pause-circle-outline' size={80} color={'#B5BFCA'}/>
        </TouchableOpacity>
        }
        <TouchableOpacity onPress={() => {this.props.after();}}>
          <Icon name='fast-forward' size={30} color={'#B5BFCA'}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    marginTop : 40,
    paddingHorizontal: 80,
    justifyContent : 'space-around',
    flexDirection : 'row',
    alignItems : 'center'
  },
  iconShadow : {
    shadowOffset:{  width: 2,  height: 5,  },
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: .2,
    shadowRadius: 5,
  }
})
