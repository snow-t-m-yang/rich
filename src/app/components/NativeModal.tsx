"use client";

import { useEffect, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

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
      console.log("event.target", event.target);
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
    <dialog
      id="dialog"
      className="w-3/4 max-w-full bg-slate-500/50 backdrop-blur-2xl text-white px-7 py-4 rounded-2xl"
      ref={modalRef}
      onChange={closeModal}
    >
      {children}
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
}
export default NativeModal;
