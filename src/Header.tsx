/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Header() {
  return (
    <div class={tw`p-5 bg-blue-500 text-white mb-5 flex`}>
      <a href="/" class={tw`flex-grow font-bold`}>
        <h1 class={tw`text-4xl`}>Pokemon</h1>
      </a>
      <a href="/list">0</a>
    </div>
  );
}