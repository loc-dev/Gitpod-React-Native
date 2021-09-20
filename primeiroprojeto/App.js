import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import BoasVindas from './components/BoasVindas.js';

export default class App extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <BoasVindas saudacao="Bom dia!"></BoasVindas>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4e8c1",
  },
});
