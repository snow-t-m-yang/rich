"use client";

import { useAtomValue } from "jotai";
import { viewAtom } from "../atoms";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

type Props = {};
export default function DynamicBanner({}: Props) {
  const view = useAtomValue(viewAtom);
  const today = new Date().toDateString();
  return (
    <>
      {view === "add" && (
        <div className="fixed top-0 w-full z-10">
          <div className="w-full max-w-xl rounded-b-xl px-3 mx-auto bg-neutral-900/10 backdrop-blur-3xl py-7">
            <div className="flex flex-col items-center gap-3 justify-center w-full px-3">
              <h3>{`${today}`}</h3>
              <section className="flex gap-3 items-center justify-between w-full">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" className="w-1/2" />
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
