import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pokedex">

                <Pokemon key={ this.props.pokemons[0].id } pokemon={ this.props.pokemons[0] } />
                <div>
                   <button>Enviar</button> 
                </div>
            </div>
        );
    }
}

export default Pokedex;