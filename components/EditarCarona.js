import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditarCarona = () => {
    const [horario, setaHorario] = React.useState('');
    const [vagas, setaVagas] = React.useState('');
    const [enderecoInicial, setaEnderecoInicial] = React.useState('');
    const [enderecoFinal, setaEnderecoFinal] = React.useState('');

    const endpoint = 'https://github-sq75eata2q-uc.a.run.app/api/v1/carona';

    let carona = {
        horario: horario,
        vagas: vagas,
        enderecoInicial: enderecoInicial,
        enderecoFinal: enderecoFinal,
    }

    const listarCaronaById = (id) => {
        fetch(`${endpoint}/${id}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    const atualizarCaronaById = (id) => {
        fetch(`${endpoint}/${id}`, {
            method: "PUT",
            body: JSON.stringify(carona),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }

    const deletarCaronaById = (id) => {
        fetch(`${endpoint}/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }

    return (
        <View>
            <Text>EditarCarona</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default EditarCarona