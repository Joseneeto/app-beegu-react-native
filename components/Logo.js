import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Logo() {
  return (
    <View style={ styles.container }>
        <Text style={ styles.texto }>EM CONSTRUÇÃO!!!!!!!!!!!</Text>
        <Image source={ require('../assets/logo.png') } style={ styles.logo }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    texto: {
        paddingBottom: 20
    },

    logo: {
        width: 281,
        height: 330,
    }
});

export default Logo