import { useEffect } from "react";
import { toast, ToastOptions } from "react-toastify";
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "error";


const useToastMessages = () => {

  const toastIdMap = useRef(new Map<string, number | string>());

  useEffect(() => {
    return () => {
      toastIdMap.current.clear();
    };
  }, []);

  const showToast = (type: ToastType, message: string, options?: ToastOptions) => {
    if (!toastIdMap.current.has(message)) {
      const toastId = type === "success" ? toast.success(message, options) : toast.error(message, options);
      toastIdMap.current.set(message, toastId);
    }
  };
  return { showToast };
};

export default useToastMessages;
