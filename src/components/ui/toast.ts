/* ================== START: Imports ================== */
import { toast as toastify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* ================== END: Imports ================== */

/* ================== START: Config ================== */
const getToastConfig = () => ({
    position: "top-right" as const,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    toastClassName: () =>
        "bg-toast text-primary-foreground !rounded-2xl",
});
/* ================== END: Config ================== */

/* ================== START: Toast API ================== */
export const toast = {
    // ===== Success Toast =====
    success: (message: string) => {
        toastify.success(message, getToastConfig());
    },
    // ===== Error Toast =====
    error: (message: string) => {
        toastify.error(message, getToastConfig());
    },
    // ===== Info Toast =====
    info: (message: string) => {
        toastify.info(message, getToastConfig());
    },
    // ===== Warning Toast =====
    warning: (message: string) => {
        toastify.warning(message, getToastConfig());
    },
    // ===== Loading Toast =====
    loading: (message: string) => {
        return toastify.loading(message, {
            ...getToastConfig(),
            autoClose: false,
            closeOnClick: false,
        });
    },
    // ===== Dismiss Toast =====
    dismiss: (toastId?: number | string) => {
        toastify.dismiss(toastId);
    },
};
/* ================== END: Toast API ================== */
