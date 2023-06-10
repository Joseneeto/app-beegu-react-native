import { StyleSheet, Text, View, TextInput, Pressable, ImageBackground } from 'react-native'
import React from 'react'

const Index = () => {
    return (
        <View>
            <ImageBackground source={ require('../assets/logo.png') } style={ styles.bgContainer } imageStyle={ styles.image }>
                <Text style={ styles.titulo }>Beegu</Text>
                <Text style={ styles.label }>Nome</Text>
                <TextInput style={ styles.caixaTexto } />
                <Text style={ styles.label }>Telefone</Text>
                <TextInput style={ styles.caixaTexto } keyboardType='numeric' />
                <Pressable style={ styles.botao }>
                    <Text style={ styles.txtBotao }>Entrar</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        
    },

    image: {
        flex:1,
        opacity: 0.1,
        resizeMode: 'cover',
    },

    titulo: {
        color: '#674461',
        fontSize: 64,
        fontWeight: 'bold',
        marginBottom: 60,
    },

    label: {
        color: '#674461',
        fontSize: 18,
        marginBottom: 5,
    },

    caixaTexto: {
        width: '100%',
        height: 30,
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#674461',
        marginBottom: 30,
        padding: 10,
    },

    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#674461',
        borderRadius: 3,
        padding: 8,
    },

    txtBotao: {
        fontWeight: 'bold',
        color: '#FFF',
    },
        
});

export default Index