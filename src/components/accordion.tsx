import React from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  openIndex: number | null;
  onOpenChange: (index: number | null) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  openIndex,
  onOpenChange,
}) => {
  return (
    <div className="w-full space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-grey rounded-lg overflow-hidden"
        >
          <button
            onClick={() => onOpenChange(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-grey" />
                ) : (
                  <Plus className="h-5 w-5 text-grey" />
                )}
              </motion.div>
              <span className="text-left font-medium text-blue-900 text-lg">
                {item.title}
              </span>
            </div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.2 },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.2 },
                    opacity: { duration: 0.1 },
                  },
                }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
