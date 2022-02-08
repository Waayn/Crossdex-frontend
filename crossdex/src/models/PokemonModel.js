import axios from 'axios';

export default class PokemonModel {

    getAllPokemons() {
        return new Promise((resolve, reject) => {
            try {
                axios.get('https://crossdex.herokuapp.com/pokemons')
                    .then(res => resolve(res))
                    .catch(err => reject(err))
            } catch (err) {
                reject({ error: "Unable to access server" })
            }
        })
    }

    getPokemonById(id) {
        return new Promise((resolve, reject) => {
            try {
                axios.get('https://crossdex.herokuapp.com/pokemons/' + id)
                    .then(res => resolve(res))
                    .catch(err => reject(err))
            } catch (err) {
                reject({ error: "Unable to access server" })
            }
        })
    }

    getPokemonsById(ids) {
        return new Promise((resolve, reject) => {
            try {
                axios.post('https://crossdex.herokuapp.com/pokemons/selectedPokemons', { ids: [...ids] })
                    .then(res => resolve(res))
                    .catch(err => reject(err))
            } catch (err) {
                reject({ error: "Unable to access server" })
            }
        })
    }
}