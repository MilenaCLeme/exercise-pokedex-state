import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super();

        this.state = {
            atual: 0,
            renderPokemon: props.pokemons
        };

        this.atualPokemon = this.atualPokemon.bind(this);
        this.filtrarPokemon = this.filtrarPokemon.bind(this)
    }

    atualPokemon() {
        if (this.state.atual < this.props.pokemons.length - 1) {
            this.setState({ atual: this.state.atual + 1 });

        } else {
            this.setState({ atual: 0 });
        }

    }

    filtrarPokemon(event) {
        const filtrado = this.props.pokemons.filter(({ type }) => type === event.target.innerText);
        this.setState({renderPokemon: filtrado})
        return filtrado;
    }

    render() {
        return (
            <div className="pokedex">

                <Pokemon key={this.state.renderPokemon[0].id} pokemon={this.state.renderPokemon[this.state.atual]} />
                <div>
                    <button onClick={this.atualPokemon}>Enviar</button>
                </div>
                <div>
                    <button onClick={this.filtrarPokemon}>Fire</button>
                    <button onClick={this.filtrarPokemon}>Psychic</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;