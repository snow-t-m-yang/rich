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
    <div className="fixed z-10 w-full -top-5">
      <div className="w-full max-w-xl px-3 pb-5 mx-auto rounded-t-3xl bg-neutral-900/90 backdrop-blur-3xl pt-9">
        <section className="flex items-center justify-center w-full text-3xl gap-3">
          <p>{book.amount}</p>
        </section>
      </div>
    </div>
  );
}
