import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import bus from "./EventBus";

const Toast = () => {
    const [toasts, setToasts] = useState<object[]>([]);

    useEffect(() => {
        const handleToastEvent = (toast: object[]) => {
            setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...toast }]);
            console.log(toast);
            setTimeout(() => {
                setToasts((prevToasts) => prevToasts.slice(1));
            }, 1500);
        };
        const unsubscribe = bus.subscribe("SHOW_TOST", handleToastEvent);
        return () => {
            unsubscribe();
        };
    }, []);

    console.log(toasts);

    return createPortal(
        <div className="toast-container" style={style}>
            {toasts.map((toast: any, index) => {
                return (
                    <div key={index} className="toast">
                        {toast.message}
                    </div>
                );
            })}
        </div>,
        document.getElementById("toast-container") as HTMLElement
    );
};

export default Toast;
