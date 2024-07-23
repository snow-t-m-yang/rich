"use client";

import { useAtomValue } from "jotai";
import { usePathname } from "next/navigation";
import { bookAtom, viewAtom } from "../atoms";

type Props = {};
export default function DynamicBanner({}: Props) {
  const pathname = usePathname();
  const view = useAtomValue(viewAtom);
  const book = useAtomValue(bookAtom);

  //TODO: book amount need to listen to real time updates

  return (
    <div className="fixed -top-5 w-full z-10">
      <div className="w-full max-w-xl rounded-t-3xl px-3 mx-auto bg-neutral-900/90 backdrop-blur-3xl pt-9 pb-5">
        <section className="text-3xl flex gap-3 items-center justify-center w-full">
          <p>{book.amount}</p>
        </section>
      </div>
    </div>
  );
}
