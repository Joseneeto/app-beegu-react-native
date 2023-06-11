import { StyleSheet, Text, View, TextInput, Pressable, ImageBackground, Alert } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Index = () => {
    const [fontsLoaded] = useFonts({
        'BalooBhai2-Regular': require('../assets/fonts/BalooBhai2-Regular.ttf'),
        'BalooBhai2-Bold': require('../assets/fonts/BalooBhai2-Bold.ttf')
    });

    const [nome, setaNome] = React.useState('');
    const [telefone, setaTelefone] = React.useState('');

    const endpoint = 'https://github-sq75eata2q-uc.a.run.app/api/v1/cadastro';

    const cadastraUser = () => {
        let usuario = {
            nome: nome,
            telefone: telefone,
        }

        let nomeValido = usuario.nome.length >= 3;
        let exp = new RegExp('^(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\-? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$');
        let numeroValido = usuario.telefone.match(exp) > 0;

        if (nomeValido && numeroValido) {
            fetch(endpoint, {
                method: "POST",
                body: JSON.stringify(usuario),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err))

            console.log(usuario)
            Alert.alert(`Bem-vindo(a) ao Beegu, ${usuario.nome}!`);
        } else {
            console.log(`Favor, inserir dados de registro válidos!`)
            Alert.alert(`Favor, inserir dados de registro válidos!`);
        }
    }

    return (
        <View>
            <ImageBackground source={require('../assets/images/logo.png')} imageStyle={styles.image}>
                <Text style={styles.titulo}>Beegu</Text>
                <Text style={styles.label}>Nome</Text>
                <TextInput style={styles.caixaTexto} value={nome} onChangeText={setaNome} />
                <Text style={styles.label}>Telefone</Text>
                <TextInput style={styles.caixaTexto} value={telefone} onChangeText={setaTelefone} keyboardType='numeric' />
                <Pressable style={styles.botao} onPress={cadastraUser}>
                    <Text style={styles.txtBotao}>Entrar</Text>
                </Pressable>
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
        top: -75,
        left: -75,
        bottom: 0,
    },

    titulo: {
        color: '#674461',
        fontSize: 64,
        fontWeight: 'bold',
        fontFamily: 'BalooBhai2-Bold',
        marginBottom: 80,
    },

    label: {
        color: '#674461',
        fontSize: 18,
        marginBottom: 5,
    },

    caixaTexto: {
        height: 35,
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
        borderRadius: 4,
        padding: 8,
    },

    txtBotao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },

});

export default Index