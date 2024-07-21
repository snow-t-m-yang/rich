"use client";

import { useState } from "react";
import NativeModal from "./components/NativeModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-[100svh] max-w-md w-full border border-slate-400 rounded-3xl mx-auto">
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
