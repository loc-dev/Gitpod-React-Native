import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function BoasVindas(props) {

    const [mensagem, setMensagem] = useState("Seja Bem-Vindo(a)!");
    
    return (
        <View style={styles.container}> 
            <Text style={styles.textos}>Olá! {props.saudacao}</Text>
            <Text style={styles.textos}>{mensagem}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#081a31",
        width: 300,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    textos: {
        fontSize: 14,
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default BoasVindas;