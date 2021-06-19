const MyFormCommandHandler = require("../../boundedContext/myForm/command/SubmitMyFormCommandHandler")
const {SUBMIT_MY_FORM} = require("../../boundedContext/myForm/command/SubmitMyFormCommand")

const subscribeCommandHandlers = (commandBus, repositories) => {
    commandBus.subscribe(SUBMIT_MY_FORM, new MyFormCommandHandler(repositories.myFormRepository))
}

module.exports = subscribeCommandHandlers;