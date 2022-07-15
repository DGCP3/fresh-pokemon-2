/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { Pokemon } from "../utils/types.ts";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div class={tw`rounded-xl border-1 p-5`}>
      <div class={tw`text-2xl font-bold mb-2`}>{pokemon.name}</div>
      <img
        src={`https://4he1myaw.directus.app/assets/${pokemon.image}?access_token=6ufWWYoxYX9bCBCHGJ-dp6kWf--APWHG`}
      />
      <div class={tw`mt-5 flex`}>
        <a class={tw`underline flex-grow`} href={`/pokemon/${pokemon.id}`}>
          View Details...
        </a>
      </div>
    </div>
  );
}
