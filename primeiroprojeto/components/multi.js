import React from "react";
import {Text} from "react-native";

import estilo from "./estilo";

export default function Comp(){
    return <Text style={estilo.Tamanho_Fonte}>Comp #oficial</Text>
}

export function Comp1(){
    return <Text style={estilo.Tamanho_Fonte}>Comp #01</Text>
}

export function Comp2(){
    return <Text style={estilo.Tamanho_Fonte}>Comp #02</Text>
}