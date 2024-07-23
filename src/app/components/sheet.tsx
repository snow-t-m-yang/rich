"use client";

import { useAtomValue } from "jotai";
import { viewAtom } from "../atoms";

type Props = {};
export default function DynamicBanner({}: Props) {
  const view = useAtomValue(viewAtom);

  return (
    <>
      {view === "add" && (
        <div className="fixed top-0 w-full z-10">
          <div className="w-full max-w-xl rounded-t-3xl px-3 mx-auto bg-neutral-300/30 py-7">
            <p>
              
            </p>
          </div>
        </div>
      )}
    </>
  );
}
