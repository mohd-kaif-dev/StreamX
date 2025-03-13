import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false); // Set loading to false when the page finishes loading
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);

      return () => {
        window.removeEventListener("load", handlePageLoad);
      };
    }
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && children}
    </>
  );
};

export default LoaderWrapper;
