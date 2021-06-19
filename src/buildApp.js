const createApp = require("./createApp");
const configureMyFormRoutes = require("./application/configuration/routes/configureMyFormRoutes");
const configureRepositories = require("./application/configuration/repository/configureRepositories")
const subscribeCommandHandlers = require("./application/configuration/command/subscribeCommandHandlers")
const CommandBus = require("./application/configuration/CommandBus")

const buildApp = () => {
    let app = createApp()
    const commandBus = new CommandBus()
    const repositories = configureRepositories()
    subscribeCommandHandlers(commandBus, repositories)
    configureMyFormRoutes(app, commandBus)
    return app;
}

module.exports = buildApp;