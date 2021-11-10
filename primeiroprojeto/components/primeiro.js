import React from "react";
import {Text} from "react-native";

import estilo from "./estilo";

export default () => {
    console.warn("Opa!")

    return (
        <Text style={estilo.Tamanho_Fonte}>Teste React</Text>
    )
}