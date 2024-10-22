import { useEffect, useState } from "react";

export const useMediaQuery = (
  breakpoints = { mobile: 550, tablet: 768, desktop: 1024 },
) => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
  });

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      const newScreenSize = {
        isMobile: width <= breakpoints.mobile,
        isTablet: width > breakpoints.mobile && width <= breakpoints.tablet,
        isDesktop: width > breakpoints.tablet && width <= breakpoints.desktop,
        isLargeDesktop: width > breakpoints.desktop,
      };

      if (JSON.stringify(newScreenSize) !== JSON.stringify(screenSize)) {
        setScreenSize(newScreenSize);
      }
    };

    window.addEventListener("resize", checkSize);
    checkSize();

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [breakpoints]);

  return screenSize;
};
