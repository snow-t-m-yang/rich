"use client";

import { useState } from "react";
import NativeModal from "../components/NativeModal";

type Props = {};
function Book({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-[100svh] max-w-md w-full border border-slate-400 rounded-3xl mx-auto px-3 py-3">
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <NativeModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <p>Modal Content</p>
      </NativeModal>
    </main>
  );
}
export default Book;
