import { StyleSheet, View, SafeAreaView, ImageBackground, Text, ScrollView, TouchableHighlight, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';

const Home = ({ navigation }) => {
    const [lista, setaLista] = React.useState([]);
    const [nomeUsuario, setaNomeUsuario] = React.useState("");


    const endpoint = 'https://github-sq75eata2q-uc.a.run.app/api/v1/carona';
    const endpoint_user = 'https://github-sq75eata2q-uc.a.run.app/api/v1/cadastro';

    React.useEffect(() => {
        const fetchNomeUsuario = async () => {
            const data = await listarUltimoUsuario();
            setaNomeUsuario(data.nome);
        }
        
        fetchNomeUsuario();
    
    }, []);

    useFocusEffect(
        React.useCallback(() => {
               listarCaronaAll();
        }, [])
    )

    const listarUltimoUsuario = async () => {
        try {
            const response = await fetch(endpoint_user, {
                method: "GET",
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    const listarCaronaAll = () => {
        fetch(endpoint, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => setaLista(json))
            .catch(err => console.log(err))
    }

    // const listarCaronaById = (id) => {
    //     fetch(`${endpoint}/${id}`, {
    //         method: "GET",
    //         headers: { "Content-type": "application/json; charset=UTF-8" }
    //     })
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err))
    // }

    const getCaronaById = (id) => {
        navigation.navigate('EditarCarona', { id });
    }
    
    const deletarCaronaById = (id) => {
        fetch(`${endpoint}/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {console.log(json); listarCaronaAll();})
            .catch(err => console.log(err))

        Alert.alert('A carona foi excluída.');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.welcomeTitle}>Olá, {nomeUsuario}!</Text>
            </View>

            <ImageBackground source={require('../assets/images/logo.png')} style={styles.ridesList} imageStyle={styles.image}>
                <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 150 }}>
                    <Text style={styles.openRidesTitle}>Caronas abertas</Text>

                    {lista.map(carona => (
                        <TouchableHighlight style={styles.ride} underlayColor="#674461" onPress={() => {}} key={carona.id}>
                            <View >
                                <View style={styles.rideHeader}>
                                    <Text style={styles.rideInfo}>Horário: {carona.horario}</Text>

                                    <View style={styles.buttons}>
                                        <TouchableOpacity onPress={() => { getCaronaById(carona.id) }}>
                                            <Image source={require('../assets/images/lapis.png')} style={styles.pencil}></Image>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => { deletarCaronaById(carona.id) }}>
                                            <Image source={require('../assets/images/lixo.png')} style={styles.trash}></Image>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <Text style={styles.rideInfo}>Número de vagas: {carona.vagas}</Text>
                                <Text style={styles.rideInfo}>Ponto de partida: {carona.enderecoInicial}</Text>
                                <Text style={styles.rideInfo}>Destino: {carona.enderecoFinal}</Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </ScrollView>
            </ImageBackground>

            <TouchableHighlight style={styles.addRide} underlayColor="#FFF400" onPress={() => {
                navigation.navigate("CriarCarona");
            }}>
                <Image source={require('../assets/images/addCarona.png')} style={styles.addRideIcon} />
            </TouchableHighlight>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    topBar: {
        width: '100%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEDF00',
    },

    welcomeTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4C2F47',
        paddingTop: 120,
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
        paddingRight: 45,
        paddingBottom: 30,
        paddingLeft: 45,
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

    rideHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    pencil: {
        width: 25,
        height: 25,
        marginRight: 8,
    },

    trash: {
        width: 25,
        height: 25,
        marginLeft: 8,
    },

    addRide: {
        width: 75,
        height: 75,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: '7%',
        bottom: '5%',
        backgroundColor: '#FEDF00',
        borderRadius: 50,

    },

    addRideIcon: {
        width: 55,
        height: 55,
    },
});

export default Home