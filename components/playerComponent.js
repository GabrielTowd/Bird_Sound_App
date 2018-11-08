import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './header';
import Album from './album';
import Player from './player';
import data from '../assets/data/bird.json';
    
export default class PlayerComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      paused: true
    };
  }

  nextSound = () => {
    if(this.state.count + 1 < data.length){
      this.setState({count : this.state.count + 1})
    } else {
      this.setState({count : 0})
    }
  }

  previousSound = () => {
    if(this.state.count + 1 < data.length){
      this.setState({count : this.state.count + 1})
    } else {
      this.setState({count : 0})
    }
  }

  togglePlay = () => {
    this.setState({paused : !this.state.paused})
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          birdName={data[this.state.count].name} 
          birdLocation={data[this.state.count].location}
        />
        <Album 
          url={data[this.state.count].image}
          nextSound={this.nextSound}
          previousSound={this.previousSound}
        />
        <Player 
          after={this.nextSound} 
          before={this.previousSound} 
          data={data[this.state.count]}
          paused={this.state.paused}
          togglePlay={this.togglePlay}
          sound={this.whoosh}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
