import React, { useState, useEffect } from 'react';
import PokemonModel from './../models/PokemonModel';
import { Carousel } from 'react-bootstrap';

const CarouselEvolutions = (props) => {

    const [evolutions, setEvolutions] = useState([])
    const pokemonModel = new PokemonModel()

    useEffect(() => {
        pokemonModel.getPokemonsById(props.evolutions.map(evo => evo[0]))
            .then(res => res.data.forEach((data, index) => {
                setEvolutions(evolutions => [...evolutions, { image: data.thumbnail, name: data.name.english, how: props.evolutions[index][1] }])
            }))
        //eslint-disable-next-line
    }, [])

    return <>{evolutions.length !== 0 ?
        <Carousel indicators={false}>
            {evolutions.map((evo, index) => {
                return <Carousel.Item key={index} className="carousel-item">
                    <img src={evo.image} alt={'Next evolution'} className="pokethumbnail" />
                    <p className="m-0 p-0 mb-2 mt-3 fw-bold">{evo.name}</p>
                    <p className="m-0 p-0 mb-3 mt-1">{evo.how}</p>
                </Carousel.Item>
            })}
        </Carousel> : <></>}
    </>
};

export default CarouselEvolutions;
