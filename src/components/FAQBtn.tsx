interface LearnMoreButtonProps {
  sectionIndex: number;
  className?: string;
}

export const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
  sectionIndex,
  className = "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",
}) => {
  const handleClick = () => {
    // Déclencher l'événement personnalisé
    const event = new CustomEvent("openFaqSection", {
      detail: { index: sectionIndex },
    });
    window.dispatchEvent(event);
  };

  return (
    <button onClick={handleClick} className={className}>
      En savoir plus
    </button>
  );
};
