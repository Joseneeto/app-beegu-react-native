import { StyleSheet, View, SafeAreaView, ImageBackground, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
            <Text style={styles.welcome}>Olá usuário!</Text>
        </View>
        <ImageBackground source={require('../assets/images/logo.png')} style={styles.ridesList} imageStyle={styles.image}>
            <Text style={styles.openRidesTitle}>Caronas abertas</Text>
            <Text style={styles.ride}>objeto de uma lista aqui!</Text>

        </ImageBackground>
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    topBar: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEDF00',
    },

    welcome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#674461',
    },

    ridesList: {
        marginTop: 30,
        alignItems: 'center',
    },

    ride: {
        marginTop: 30,
        fontSize: 16,
    },

    openRidesTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#674461',
    },

    image: {
        flex: 1,
        opacity: 0.1,
        resizeMode: 'contain',
        position: 'absolute',
        width: 600,
        height: 1000,
        top: -75,
        left: 75,
    },
})

export default Home