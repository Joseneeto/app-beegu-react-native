import { StyleSheet, View, SafeAreaView, ImageBackground, Text, ScrollView, TouchableHighlight} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = () => {
    const [lista, setaLista] = React.useState([]);

    const endpoint = 'https://github-sq75eata2q-uc.a.run.app/api/v1/carona';

    React.useEffect(() => {
        listarCaronaAll();
    }, []);

    const listarCaronaAll = () => {
        fetch(endpoint, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" }
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
                <ScrollView style={styles.scroll} contentContainerStyle={{paddingBottom: 150}}>
                    <Text style={styles.openRidesTitle}>Caronas abertas</Text>
                    {lista.map(carona => (
                        <TouchableHighlight style={styles.ride} underlayColor="#674461" onPress={() => {}} key={carona.id}>
                            <View>
                                <Text style={styles.rideInfo}>Horário: {carona.horario}</Text>
                                <Text style={styles.rideInfo}>Número de vagas: {carona.vagas}</Text>
                                <Text style={styles.rideInfo}>Ponto de partida: {carona.enderecoInicial}</Text>
                                <Text style={styles.rideInfo}>Destino: {carona.enderecoFinal}</Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </ScrollView>
            </ImageBackground>
            <TouchableHighlight style={styles.addRideIcon} underlayColor="#FFF400" onPress={() => {}}>
                <Icon name='car' size={30} color={'#4C2F47'} />
            </TouchableHighlight>
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
        color: '#4C2F47',
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
        marginBottom: 30,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4C2F47',
    },

    scroll: {
        width: '100%',
        paddingTop: 30,
        paddingRight: 40,
        paddingBottom: 30,
        paddingLeft: 40,
    },

    ride: {
        marginBottom: 20,
        backgroundColor: '#4C2F47',
        borderRadius: 10,
        padding: 15,
    },

    rideInfo: {
        fontSize: 16,
        color: '#FFF',
    },
    
    addRideIcon: {
        position:'absolute',
        width:65,
        height:65,
        alignItems:'center',
        justifyContent:'center',
        right:'7%',
        bottom:'5%',
        backgroundColor:'#FEDF00',
        borderRadius: 50,
    }
});

export default Home