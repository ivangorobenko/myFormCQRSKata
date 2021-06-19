const chai = require("chai");
const MyFormController = require("../../../../src/application/configuration/controller/MyFormController")
const {SUBMIT_MY_FORM, SubmitMyFormCommand} = require("../../../../src/application/boundedContext/myForm/command/SubmitMyFormCommand")
chai.should();

describe('Le controlleur de myForm', () => {
        it("doit dispatcher la commande de soumission du formulaire", () => {
            let called = false;
            let calledCommand = {}
            const sut = new MyFormController({
                dispatch: (command) => {
                    calledCommand = command;
                    called = true;
                }
            });

            sut.submitMyForm(new SubmitMyFormCommand("BLABLA"));

            calledCommand.should.be.deep.equals({type: SUBMIT_MY_FORM, myText: "BLABLA"})
            called.should.be.true;

        })

        it("doit renvoyer l'id du formulaire soumis", () => {
            const sut = new MyFormController({
                dispatch: () => ({id: 1})
            });

            const result = sut.submitMyForm({myText: "Blabla"});

            result.id.should.be.equals(1)
        })
    }
)