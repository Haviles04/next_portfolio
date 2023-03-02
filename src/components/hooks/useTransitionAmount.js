import { useState, useEffect } from "react";

export default function useTransitionAmount(ref) {
  const [transitionAmt, setTransitionAmt] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(addRemoveListener, {
      threshold: 1 / 2,
    });
    observer.observe(ref.current);
  });

  const addRemoveListener = ([entry]) => {
    if (entry.isIntersecting) {
      return ["scroll", "touchmove", "touchstart"].forEach((evt) =>
        window.addEventListener(evt, handleEvent)
      );
    }

    ["scroll", "touchmove", "touchstart"].forEach((evt) =>
      window.removeEventListener(evt, handleEvent)
    );
  };

  const handleEvent = () => {
    setTransitionAmt(Math.abs(ref.current.getBoundingClientRect().top));
  };

  return { transitionAmt };
}
