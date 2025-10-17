import type { AnimationProps } from "../types/animation-props";

type Params = {
  delay?: number;
  initialY?: number;
  stiffness?: number;
  duration?: number;
};

export const getDefaultAnimationProps = (params: Params): AnimationProps => {
  const initial: AnimationProps = {
    initial: {
      opacity: 0,
      y: params.initialY ?? -40,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      type: "spring",
      duration: params.duration ?? 0.1,
      stiffness: params.stiffness ?? 80,
      delay: params.delay ?? 0,
    },
  };
  return initial;
};
