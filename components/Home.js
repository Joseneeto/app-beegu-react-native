import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'

const Home = () => {

    const [horario, setaHorario] = React.useState('');
    const [vagas, setaVagas] = React.useState('');
    const [enderecoInicial, setaEnderecoInicia] = React.useState('');
    const [enderecoFinal, setaEnderecoFnicia] = React.useState('');

    const endpoint = 'https://github-sq75eata2q-uc.a.run.app/api/v1/carona';

    const criarCarona = () => {     
    
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

    const listarCaronaAll = () => {     
     
      fetch(endpoint, {
        method: "GET",
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))      
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
});

export default Home