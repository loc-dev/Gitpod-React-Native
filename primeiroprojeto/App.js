import React from 'react';
import {Text, View, StyleSheet} from "react-native";

import PrimeiroComponente from "./components/primeiro";
import CompPadrao, {Comp1, Comp2} from "./components/multi";

import estilo from "./components/estilo";

export default () => (
  <View style={style.App}>
    <Text style={estilo.Tamanho_Fonte}>{1 + 1}</Text>
    <CompPadrao/>
    <Comp1/>
    <Comp2/>
    <PrimeiroComponente/>
  </View>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})