import { toast } from "react-toastify";
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";

const useToastMessages = () => {
  const toastIdRef = useRef(null);

  const showToast = (type: string, message: string) => {
    if (!toast.isActive(toastIdRef.current)) {
      if (type === "success") {
        toast.success(message);
      } else if (type === "error") {
        toast.error(message);
      }
    }
  };
  return { showToast };
};

export default useToastMessages;
