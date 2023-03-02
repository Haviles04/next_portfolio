import { useState, useEffect } from "react";

export default function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleEvent);
  });

  const handleEvent = () => {
    setScrollY(Math.abs(window.scrollY));
  };

  return { scrollY };
}
