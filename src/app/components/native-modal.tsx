"use client";

import { useEffect, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

function NativeModal({ isModalOpen, closeModal, children }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const currModalRef = modalRef.current;
    if (isModalOpen) {
      currModalRef?.showModal();
    } else {
      currModalRef?.close();
    }

    function keydownListener(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    function clickListener(event: MouseEvent) {
      if (event.target === modalRef.current) {
        currModalRef?.close();
        closeModal();
      }
    }

    currModalRef?.addEventListener("click", clickListener);

    document.addEventListener("keydown", keydownListener);

    return () => {
      document.removeEventListener("keydown", keydownListener);
      currModalRef?.removeEventListener("click", clickListener);
    };
  }, [isModalOpen, closeModal]);

  return (
    <AnimatePresence mode="wait">
      <motion.dialog
        // initial={{ opacity: 0, y: 100, scale: 0.5 }}
        // animate={{ opacity: 1, y: 0, scale: 1 }}
        // exit={{ opacity: 0 }}
        id="dialog"
        className="w-3/4 max-w-full py-4 text-white bg-slate-500/50 backdrop-blur-2xl px-7 rounded-2xl"
        ref={modalRef}
        onChange={closeModal}
      >
        {children}

        <button onClick={closeModal}>Close</button>
      </motion.dialog>
    </AnimatePresence>
  );
}
export default NativeModal;
