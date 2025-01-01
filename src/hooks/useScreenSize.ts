import { useEffect, useState } from "react";
import { ScreenSize } from "../types/types";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize("desktop");
      } else if (width >= 768) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize;
};

export default useScreenSize;
