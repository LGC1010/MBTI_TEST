import bus from "./EventBus";

export const showToast = (message: String) => {
    bus.publish("SHOW_TOST", { message });
};
