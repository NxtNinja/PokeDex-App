export type Pokemon = PokeData[];

export interface PokeData {
  number: number;
  name: string;
  gen: number;
  species: string;
  types: string[];
  abilities: Ability[];
  height: string;
  weight: string;
  mega: boolean;
  baseStats: BaseStats;
  training: Training;
  breeding: Breeding;
  sprite: string;
}

export interface Ability {
  name: string;
  description: string;
  hidden: boolean;
}

export interface BaseStats {
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
}

export interface Training {
  evYield: string;
  catchRate: string;
  baseFriendship: string;
  baseExp: string;
  growthRate: string;
}

export interface Breeding {
  gender: string;
  eggGroups: string[];
  eggCycles: string;
}
