import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the URL contains a hash such as /#work,
    // scroll to that section instead of the top.
    if (hash) {
      const element = document.getElementById(hash.substring(1));

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "instant",
            block: "start",
          });
        }, 0);

        return;
      }
    }

    // For normal route changes, always start at the top.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;