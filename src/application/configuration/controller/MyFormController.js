const {SubmitMyFormCommand} = require('../../boundedContext/myForm/command/SubmitMyFormCommand')
const {MyAllTextsQuery} = require('../../boundedContext/myForm/query/MyAllTextsQuery')

class MyFormController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }

    submitMyForm(myForm) {
        this.commandBus.dispatch(new SubmitMyFormCommand(myForm.myText));
    }

    getMyTexts() {
        return this.queryBus.dispatch(new MyAllTextsQuery())
    }
}


module.exports = MyFormController;