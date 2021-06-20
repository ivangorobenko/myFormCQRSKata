const createApp = require("./createApp");
const configureMyFormRoutes = require("./application/configuration/routes/configureRoutes");
const configureRepositories = require("./application/configuration/repository/configureRepositories")
const subscribeCommandHandlers = require("./application/configuration/command/subscribeCommandHandlers")
const subscribeQueryHandlers = require("./application/configuration/query/subscribeQueryHandlers")
const Bus = require("./application/configuration/Bus")

const buildTest = () => {
    let app = createApp()
    const commandBus = new Bus()
    const queryBus = new Bus()
    const repositories = configureRepositories()
    subscribeCommandHandlers(commandBus, repositories)
    subscribeQueryHandlers(queryBus, repositories)
    configureMyFormRoutes(app, commandBus, queryBus)
    return {app, repositories};
}

module.exports = buildTest;