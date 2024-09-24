const EventBus = () => {
    const topics = new Map();

    const subscribe = (topic: String | null, listener: Function) => {
        if (!topics.has(topic)) {
            topics.set(topic, []);
        }
        topics.get(topic).push(listener);

        return () => {
            const listeners = topics.get(topic);
            listeners.splice(listeners.indexOf(listener), 1);
        };
    };

    const publish = (topic: String | null, data: any) => {
        if (!topics.has(topic)) return;
        topics.get(topic).forEach((listener: any) => listener(data));
    };

    return { subscribe, publish };
};

const bus = EventBus();
export default bus;
