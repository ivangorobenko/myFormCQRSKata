const { v4: uuidv4 } = require('uuid');

class SubmitMyFormCommandHandler {
    myFormRepository;

    constructor(myFormRepository) {
        this.myFormRepository = myFormRepository;
    }

    handle(command) {
        const id = uuidv4();
        this.myFormRepository.save(id, command.myText)
        return {id};
    }
}

module.exports = SubmitMyFormCommandHandler