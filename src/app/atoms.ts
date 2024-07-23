import { atom } from "jotai";
 
export const viewAtom = atom<"nil" | "add">("nil");

export const bookAtom = atom({
  amount: 0,
  category: "food",
  account: "cash",
  member: "self"
})