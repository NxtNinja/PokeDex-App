import { atomWithStorage } from "jotai/utils";
import { PokeData } from "./PokeType";

const PokemonData = atomWithStorage<PokeData[]>("pokemonDetails", []);

export default PokemonData;
