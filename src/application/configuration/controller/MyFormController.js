const {SubmitMyFormCommand} = require('../../boundedContext/myForm/command/SubmitMyFormCommand')

class MyFormController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }

    submitMyForm(myForm) {
        return this.commandBus.dispatch(new SubmitMyFormCommand(myForm.myText));
    }
}


module.exports = MyFormController;