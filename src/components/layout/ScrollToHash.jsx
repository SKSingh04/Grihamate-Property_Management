import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.substring(1);

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    };

    // Wait until the target page has rendered.
    const timer = setTimeout(scrollToElement, 50);

    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}

export default ScrollToHash;