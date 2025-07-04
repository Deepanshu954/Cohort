// counter.js
import { atom, selector } from "recoil";

export const counterAtom = atom({
  key: "counter",
  default: 0,
});

export const evenSelector = selector({
  key: "isEvenSelector",
  get: ({ get }) => get(counterAtom) % 2 === 0,
});