import { StyleSheet, View, SafeAreaView, ImageBackground, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Home = () => {
    const [lista, setaLista] = React.useState([]);

    const endpoint = 'https://github-sq75eata2q-uc.a.run.app/api/v1/carona';

    React.useEffect(() => {
        listarCaronaAll();   
    }, []);

    const listarCaronaAll = () => {     
      fetch(endpoint, {
        method: "GET",
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => setaLista(json))
      .catch(err => console.log(err))
    }
        

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.welcomeTitle}>Olá usuário!</Text>
            </View>
            <ImageBackground source={require('../assets/images/logo.png')} style={styles.ridesList} imageStyle={styles.image}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.openRidesTitle}>Caronas abertas</Text>
                    {lista.map(carona => (
                        <Pressable style={styles.ride} key={carona.id}>
                            <Text style={styles.rideInfo}>Horário: {carona.horario}</Text>
                            <Text style={styles.rideInfo}>Número de vagas: {carona.vagas}</Text>
                            <Text style={styles.rideInfo}>Ponto de partida: {carona.enderecoInicial}</Text>
                            <Text style={styles.rideInfo}>Destino: {carona.enderecoFinal}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
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

    welcomeTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#674461',
        paddingTop: 25,
    },

    ridesList: {
        alignItems: 'center',
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

    openRidesTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#674461',
    },

    scroll: {
        width: '100%',
        padding: 40,
    },

    ride: {
        marginTop: 20,
        backgroundColor: '#674461',
        borderRadius:10,
        padding: 15,
    },

    rideInfo: {
        fontSize: 16,
        color: '#FFF',
    },
});

export default Home