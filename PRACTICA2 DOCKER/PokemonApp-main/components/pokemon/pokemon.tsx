import React, { FC } from 'react';
import { PokemonWrapper } from './pokemon.styled';

interface PokemonProps {}

const Pokemon: FC<PokemonProps> = () => (
 <PokemonWrapper data-testid="Pokemon">
    Pokemon Component
 </PokemonWrapper>
);

export default Pokemon;
