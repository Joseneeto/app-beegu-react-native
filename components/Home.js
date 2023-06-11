import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
        <ImageBackground source={require('../assets/images/logo.png')} imageStyle={styles.image}>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        opacity: 0.1,
        resizeMode: 'contain',
        position: 'absolute',
        width: 600,
        height: 1000,
        top: -475,
        left: -125,
    },
})

export default Home