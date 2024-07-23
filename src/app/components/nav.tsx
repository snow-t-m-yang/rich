"use client";

import { atom, useAtom } from "jotai";
import Link from "next/link";
import { LuPlus, LuX } from "react-icons/lu";
import { viewAtom } from "../atoms";

type Props = {};
export default function Nav({}: Props) {
  const [view, setView] = useAtom(viewAtom);
  
  return (
    <div className="fixed bottom-0 w-full">
      <nav className="flex justify-center w-full max-w-xl px-3 mx-auto bg-neutral-100/10 backdrop-blur-3xl py-3">
        <button onMouseDown={() => setView(view === "add" ? "nil" : "add")}>
          <LuPlus
            className={`${
              view === "add" ? "rotate-45" : ""
            } w-12 h-12 text-primary duration-300 transition-all bg-transparent`}
          />
        </button>
      </nav>
    </div>
  );
}
