const SUBMIT_MY_FORM = "SUBMIT_MY_FORM";

class SubmitMyFormCommand {
    constructor(myText) {
        this.type = SUBMIT_MY_FORM
        this.myText = myText;
    }
}

module.exports = {SubmitMyFormCommand, SUBMIT_MY_FORM}