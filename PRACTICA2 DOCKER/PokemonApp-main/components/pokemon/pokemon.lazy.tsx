import React, { lazy, Suspense } from 'react';

const LazyPokemon = lazy(() => import('./Pokemon'));

const Pokemon = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPokemon {...props} />
  </Suspense>
);

export default Pokemon;
