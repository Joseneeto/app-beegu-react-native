import { StyleSheet, View, SafeAreaView, ImageBackground, Text, ScrollView } from 'react-native'
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
                <Text style={styles.welcome}>Olá usuário!</Text>
            </View>
            <ImageBackground source={require('../assets/images/logo.png')} style={styles.ridesList} imageStyle={styles.image}>
                <Text style={styles.openRidesTitle}>Caronas abertas</Text>
                <ScrollView>
                    {lista.map(carona => (
                        <View key={carona.id}>
                            <Text style={styles.ride}>Horário: {carona.horario}</Text>
                            <Text style={styles.ride}>Número de vagas: {carona.vagas}</Text>
                            <Text style={styles.ride}>Ponto de partida: {carona.enderecoInicial}</Text>
                            <Text style={styles.ride}>Destino: {carona.enderecoFinal}</Text>
                        </View>
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
});

export default Home