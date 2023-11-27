import { useEffect, useState } from "react";
import { animated, config, useSpring } from "react-spring";

interface AnimatedSectionProps {
  children: React.ReactNode;
  height: number;
}

export function AnimatedSection({ children, height }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > height);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsVisible, height]);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    config: config.slow,
    delay: isVisible ? 0 : 1000,
  });

  return <animated.div style={springProps}>{children}</animated.div>;
}
