import { toast } from "react-toastify";
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";

type ToastId = string | number; 

const useToastMessages = () => {
  const toastIdRef = useRef<ToastId | null>(null);

  const showToast = (type: string, message: string) => {
    if (!toast.isActive(toastIdRef.current as ToastId)) {
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
