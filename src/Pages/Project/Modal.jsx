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
        className="relative md:w-[1000px] h-auto md:min-w-[600px] md:max-h-screen cursor-default"
      >
        <ModalSlider additionalImages={selected.additionalImages} />
      </div>

      <motion.div layoutId={`card-${selected.id}`} className="md:h-[80vh] md:w-[25vw] ml:h-[780px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 text-white p-4 md:p-12 md:h-full"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">{selected.title}</h3>
          <div className="flex justify-between">
            <div className="flex flex-wrap mt-2">
              {selected.tags.map((tag) => (
                <div
                  className="badge bg-base-300 border-white text-white mr-1 mb-1"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>Location</p>
              <p>N/A</p>
            </div>
          </div>
          <p className="hidden md:block my-4 text-sm md:text-base">{selected.description2}</p>
          <p className="md:hidden my-4 text-sm md:text-base">{selected.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
