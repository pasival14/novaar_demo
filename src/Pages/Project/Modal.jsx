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
      className="fixed md:flex justify-center inset-0 bg-black/50 z-50 cursor-pointer overflow-y-auto p-4 md:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[800px] h-auto md:min-w-[600px] md:max-h-screen cursor-default"
      >
        <ModalSlider additionalImages={selected.additionalImages} />
      </div>

      <motion.div layoutId={`card-${selected.id}`} className="h-full md:h-screen ml:h-[780px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 md:h-full"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">{selected.title}</h3>
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
          <p className="my-4 text-sm md:text-base">{selected.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
