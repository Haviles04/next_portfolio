import { useState, useEffect } from "react";

export default function useTransitionAmount(ref) {
  const [transitionAmt, setTransitionAmt] = useState(0);
  const [direction, setDirection] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(addRemoveListener, {
      threshold: 1 / 3,
    });
    observer.observe(ref.current);
  });

  const addRemoveListener = ([entry]) => {
    if (entry.intersectionRatio >= 0.33333) {
      return ["wheel", "touchstart"].forEach((evt) =>
        window.addEventListener(evt, handleEvent)
      );
    }

    ["wheel", "touchstart"].forEach((evt) =>
      window.removeEventListener(evt, handleEvent)
    );
  };

  const handleEvent = (evt) => {
    if (evt.deltaY > 0) {
      return setTransitionAmt(transitionAmt + 0.033);
    }
    setTransitionAmt(transitionAmt - 0.033);
  };

  return transitionAmt;
}
