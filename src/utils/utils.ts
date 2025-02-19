import Astro from "../assets/cards/astro.jpg";
import Bootstrap from "../assets/cards/bootstrap.jpg";
import Css from "../assets/cards/css.jpg";
import Html from "../assets/cards/html.jpg";
import Js from "../assets/cards/js.jpg";
import React from "../assets/cards/react.jpg";
import Laravel from "../assets/cards/laravel.jpg";
import Vue from "../assets/cards/vue.jpg";
import Svelte from "../assets/cards/svelte.jpg";
import Tailwind from "../assets/cards/tailwind.jpg";
import Vite from "../assets/cards/vite.jpg";
import Vscode from "../assets/cards/vscode.jpg";

export interface ICardInfo {
  open: boolean;
  id?: string;
  image: string;
  code: string;
}

export const CardCollections: ICardInfo[] = [
  {
    code: "ASTRO",
    image: Astro,
    open: false,
  },
  {
    code: "BOOTSTRAP",
    image: Bootstrap,
    open: false,
  },
  {
    code: "CSS",
    image: Css,
    open: false,
  },
  {
    code: "HTML",
    image: Html,
    open: false,
  },
  {
    code: "JS",
    image: Js,
    open: false,
  },
  {
    code: "REACT",
    image: React,
    open: false,
  },
  {
    code: "LARAVEL",
    image: Laravel,
    open: false,
  },
  {
    code: "VUE",
    image: Vue,
    open: false,
  },
  {
    code: "SVELTE",
    image: Svelte,
    open: false,
  },
  {
    code: "TAILWIND",
    image: Tailwind,
    open: false,
  },
  {
    code: "VITE",
    image: Vite,
    open: false,
  },
  {
    code: "VS CODE",
    image: Vscode,
    open: false,
  },
];

export function getRandomIndex({
  amountOfCards,
  uniqueCards,
}: {
  amountOfCards: number;
  uniqueCards: number;
}) {
  const indexs: number[] = [];

  while (indexs.length < uniqueCards) {
    const currentIndex = Math.floor(Math.random() * amountOfCards);
    if (!indexs.includes(currentIndex)) {
      indexs.push(currentIndex);
    }
  }

  return indexs;
}

export function shuffle(array: number[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const formatTime = ({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}): string => {
  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
};
