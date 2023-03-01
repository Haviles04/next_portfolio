import { useState, useEffect, useRef } from "react";

export default function useTransitionAmount(ref) {
  const [transitionAmt, setTransitionAmt] = useState(0);
  const previousPosition = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(addRemoveListener, {
      threshold: 1 / 3,
    });
    observer.observe(ref.current);
    previousPosition.current = window.scrollY;
  });

  const addRemoveListener = ([entry]) => {
    if (entry.isIntersecting) {
      return window.addEventListener("scroll", handleEvent);
    }

    window.removeEventListener("scroll", handleEvent);
  };

  const handleEvent = (evt) => {
    if (window.scrollY > previousPosition.current) {
      setTransitionAmt(transitionAmt + 0.01);
    } else {
      setTransitionAmt(transitionAmt - 0.01);
    }
  };

  return transitionAmt;
}
