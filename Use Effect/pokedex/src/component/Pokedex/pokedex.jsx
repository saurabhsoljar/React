import PokimonList from '../PokemonList/PokimoList';
import Search from '../search/search';

//css import
import './Pokedex.css'

function pokedex(){

    return(
        <div className="pokedex-wrapper">
            <h1 id='pokedex-heading' >Pokedex</h1>
            <Search/>
            <PokimonList/>
        </div>
    )
}

export default pokedex;