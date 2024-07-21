"use client";

import { useState } from "react";
import NativeModal from "../components/NativeModal";
import { motion } from "framer-motion";

type Props = {};
function Book({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-[100svh] max-w-md w-full border border-slate-400 rounded-3xl mx-auto px-3 py-3 bg-slate-900/70 backdrop-blur-3xl">
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <NativeModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <p>Modal Content</p>
      </NativeModal>

      <button onClick={() => setIsOpen(!isOpen)}>Open Native Modal</button>
      <div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-red-500 w-36 h-72 bg-white"
          >
            Native Modal Content
          </motion.div>
        )}
      </div>
    </main>
  );
}
export default Book;
