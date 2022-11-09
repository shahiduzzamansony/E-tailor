import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}--E-Tailor`;
  }, [title]);
};
export default useTitle;
