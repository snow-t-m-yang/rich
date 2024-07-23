"use client";

import { useAtomValue } from "jotai";
import { usePathname } from "next/navigation";
import { viewAtom } from "../atoms";

type Props = {};
export default function DynamicBanner({}: Props) {
  const pathname = usePathname();
  const view = useAtomValue(viewAtom);

  return (
    <div className="fixed -top-5 w-full z-10">
      <div className="w-full max-w-xl rounded-t-3xl px-3 mx-auto bg-neutral-100/10 backdrop-blur-3xl pt-7 pb-3">
        <h1>{pathname === "/" ? "Home" : pathname}</h1>
        <p>{view}</p>
      </div>
    </div>
  );
}
