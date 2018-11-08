import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PlayerComponent from './components/playerComponent';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlayerComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
