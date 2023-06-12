import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

const CriarCarona = () => {
  const [horario, setaHorario] = React.useState('');
  const [vagas, setaVagas] = React.useState('');
  const [enderecoInicial, setaEnderecoInicia] = React.useState('');
  const [enderecoFinal, setaEnderecoFnicia] = React.useState('');

  const endpoint = 'https://github-sq75eata2q-uc.a.run.app/api/v1/carona';

  const adicionarCarona = () => {
      let carona = {
        horario: horario,
        vagas: vagas,
        enderecoInicial: enderecoInicial,
        enderecoFinal: enderecoFinal,          
      }
      
      let exp = new RegExp('^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$');
      let horarioValido = carona.horario.match(exp) > 0; 
    
      if (horarioValido) {
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(carona),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log(err))

      } else {
          console.log(`Favor, inserir horário válido no formato HH:MM:SS`)
          Alert.alert(`Favor, inserir horário válido no formato HH:MM:SS`);
      }            
  }

  const listarCaronaById = (id) => { 
  fetch(`${endpoint}/${id}`, {
      method: "GET",
      headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => console.log(response))
  .catch(err => console.log(err))   
  }

  const atualizarCaronaById = (id) => {
  fetch(`${endpoint}/${id}`, {
      method: "PUT",
      body: JSON.stringify(carona),
      headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err))
  }

  const deletarCaronaById = (id) => {
  fetch(`${endpoint}/${id}`, {
      method: "DELETE",
      headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
          <Text style={styles.welcomeTitle}>Criar Carona</Text>
      </View>
      <ImageBackground source={require('../assets/images/logo.png')} style={styles.ridesList} imageStyle={styles.image}>
          <ScrollView style={styles.scroll} contentContainerStyle={{paddingBottom: 150}}>
              <Text style={styles.openRidesTitle}>Detalhes da carona</Text>
          </ScrollView>
      </ImageBackground>
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
})

export default CriarCarona;