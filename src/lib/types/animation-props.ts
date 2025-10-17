export type AnimationProps = {
  initial: {
    opacity?: number;
    y?: number;
  };
  animate: {
    opacity?: number;
    y?: number;
  };
  transition: {
    type?: "spring" | "tween";
    duration?: number;
    stiffness?: number;
    delay?: number;
  };
};
