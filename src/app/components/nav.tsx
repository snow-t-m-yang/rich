"use client";

import Link from "next/link";
import { LuPlus } from "react-icons/lu";

type Props = {};
export default function Nav({}: Props) {
  return (
    <div className="fixed bottom-0 w-full">
      <nav className="flex justify-center w-full max-w-xl px-3 mx-auto bg-background/30 backdrop-blur-xl py-7">
        <button onMouseDown={(e) => console.log(e)}>
          <LuPlus className="w-12 h-12" />
        </button>
      </nav>
    </div>
  );
}
