import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (navigationType === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollToTop;
