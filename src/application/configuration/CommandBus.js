class CommandBus {
    handlers = {};

    subscribe(type, commandHandler) {
        this.handlers[type] = commandHandler;
    }

    dispatch(command) {
        return this.handlers[command.type].handle(command);
    }
}

module.exports = CommandBus;