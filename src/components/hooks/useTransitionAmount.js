import { useState, useEffect } from "react";

export default function useTransitionAmount(ref) {
  const [transitionAmt, setTransitionAmt] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(addRemoveListener, {
      threshold: 1 / 3,
    });
    observer.observe(ref.current);
  });

  const addRemoveListener = ([entry]) => {
    if (entry.intersectionRatio >= 0.33333) {
      return ["wheel", "touchmove"].forEach((evt) =>
        window.addEventListener(evt, handleEvent)
      );
    }

    ["wheel", "touchmove"].forEach((evt) =>
      window.removeEventListener(evt, handleEvent)
    );
  };

  const handleEvent = () => {
    setTransitionAmt(
      Math.abs(ref.current.getBoundingClientRect().top / window.scrollY) * 1.1
    );
  };

  return transitionAmt;
}
