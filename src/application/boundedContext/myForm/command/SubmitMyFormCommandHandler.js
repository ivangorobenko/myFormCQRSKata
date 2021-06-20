const { v4: uuidv4 } = require('uuid');

class SubmitMyFormCommandHandler {
    myTextRepository;

    constructor(myTextRepository) {
        this.myTextRepository = myTextRepository;
    }

    handle(command) {
        const id = uuidv4();
        this.myTextRepository.save(id, command.myText)
        return {id};
    }
}

module.exports = SubmitMyFormCommandHandler