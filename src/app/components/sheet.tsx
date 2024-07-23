"use client";

import { useAtom, useAtomValue } from "jotai";
import { bookAtom, viewAtom } from "../atoms";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};
export default function Sheet({}: Props) {
  const view = useAtomValue(viewAtom);
  const [book, setBook] = useAtom(bookAtom);

  const today = new Date().toDateString();

  //TODO: Extract book logic to specific component, leave a generic sheet
  return (
    <>
      <AnimatePresence>
        {view === "add" && (
          <motion.div
            className="fixed top-0 z-10 w-full"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            layout
          >
            <div className="w-full max-w-xl px-3 pt-24 mx-auto border border-neutral-700 border-t-transparent rounded-b-xl bg-neutral-900/10 backdrop-blur-3xl pb-7">
              <div className="flex flex-col items-center justify-center w-full px-3 gap-3">
                <h3>{`${today}`}</h3>
                <section className="flex items-center justify-between w-full text-3xl gap-3">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    className="w-1/2 text-3xl p-7"
                    onChange={(e) =>
                      setBook((prevBook) => ({
                        ...prevBook,
                        amount: Number(e.target.value),
                      }))
                    }
                    value={book.amount === 0 ? "" : book.amount}
                  />
                </section>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
