import { useState, useEffect, useContext, createContext } from "react";
const ScrollContext = createContext();

export function useScroll() {
  return useContext(ScrollContext);
}

export default function ScrollContextProvider({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleEvent);
  });

  const handleEvent = () => {
    setScrollY(Math.abs(window.scrollY));
  };

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
}
