import React from "react";
import { motion } from "framer-motion";
import { MdCancel } from "react-icons/md";
import ModalSlider from "./ModalSlider";

export default function Modal({ selected, setSelected }) {
  if (!selected) {
    return null;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default"
      >
        <motion.div layoutId={`card-${selected.id}`} className="relative">
          <ModalSlider additionalImages={selected.additionalImages} />
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4"
        >
          <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
          <div className="flex flex-wrap mt-2">
            {selected.tags.map((tag) => (
              <div
                className="badge bg-base-300 border-none text-zinc-600 mr-1 mb-1"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
          <p className="my-4">{selected.description}</p>
        </motion.div>
        </motion.div>
        
      </div>
    </div>
  );
}
