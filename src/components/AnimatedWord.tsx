import { motion, Variants } from "framer-motion";

// Define the interface for the component props
interface AnimatedLetters {
  word: string;
}

// Define the animation variants
export const AnimatedLetterAnimation: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 0.4 },
  },
  exit: {
    opacity: "40%",
    y: -300,
    transition: { ease: "easeOut", duration: 3 },
  },
};
// Define the animation variants for the parent
export const AnimatedWordAnimation: Variants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      duration: 3,
    },
  },
};

// Define the Word component
export const AnimatedWord: React.FC<AnimatedLetters> = ({ word }) => {
  return (
    <motion.span
      key={`${word}`}
      variants={AnimatedWordAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="inline-flex"
    >
      {[...word].map((letter, index) => (
        <motion.span
          key={index}
          variants={AnimatedLetterAnimation}
          className="inline-block" // Ensure spans are inline-block for proper spacing
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
