class Bus {
    handlers = {};

    subscribe(type, handler) {
        this.handlers[type] = handler;
    }

    dispatch(request) {
        return this.handlers[request.type].handle(request);
    }
}

module.exports = Bus;