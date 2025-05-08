import { useEffect, useRef, type ReactNode } from "react";
import { useAnimation, type AnimationControls } from "framer-motion";

type AnimatedSectionProps = {
  children: (controls: AnimationControls) => ReactNode;
  threshold?: number;
};

export default function AnimatedSection({
  children,
  threshold = 0.3,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.set("hidden");
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, threshold]);

  return <section ref={ref}>{children(controls)}</section>;
}
