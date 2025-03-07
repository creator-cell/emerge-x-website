import { useEffect } from "react";

const useDisableScroll = (isModalOpen: boolean) => {
  if (typeof window === "undefined") return;
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);
};

export default useDisableScroll;
