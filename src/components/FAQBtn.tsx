import { motion } from "framer-motion";

interface LearnMoreButtonProps {
  sectionIndex: number;
  className?: string;
}

export const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
  sectionIndex,
}) => {
  const handleClick = () => {
    // Déclencher l'événement personnalisé
    const event = new CustomEvent("openFaqSection", {
      detail: { index: sectionIndex },
    });
    window.dispatchEvent(event);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="px-10 py-2 bg-blue-700 text-blue-50 rounded-lg font-medium"
    >
      En savoir plus
    </motion.button>
  );
};
