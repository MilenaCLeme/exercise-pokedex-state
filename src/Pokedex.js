import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();

        this.state = {
            atual: 0,
        };

        this.atualPokemon = this.atualPokemon.bind(this);
    }

    atualPokemon() {
        if(this.state.atual < this.props.pokemons.length) 
        this.setState({ atual: this.state.atual + 1 });
    }

    render() {
        return (
            <div className="pokedex">

                <Pokemon key={ this.props.pokemons[0].id } pokemon={ this.props.pokemons[this.state.atual] } />
                <div>
                   <button onClick={ this.atualPokemon }>Enviar</button> 
                </div>
            </div>
        );
    }
}

export default Pokedex;