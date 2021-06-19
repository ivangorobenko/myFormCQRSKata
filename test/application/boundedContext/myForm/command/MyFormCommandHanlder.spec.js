const chai = require("chai");
const MyFormCommandHandler = require("../../../../../src/application/boundedContext/myForm/command/SubmitMyFormCommandHandler");
const {SubmitMyFormCommand} = require("../../../../../src/application/boundedContext/myForm/command/SubmitMyFormCommand");
const InMemoryRepository = require("../../../../../src/application/configuration/repository/InMemoryRepository")
chai.should();


describe('Le commande de soumission', () => {
        it("doit enregistrer le formulaire soumis", () => {
            const myFormRepository = new InMemoryRepository();
            const sut = new MyFormCommandHandler(myFormRepository);

            const result = sut.handle(new SubmitMyFormCommand("Blablabla"))

            const myText = myFormRepository.get(result.id);
            myText.should.be.deep.equals([result.id, "Blablabla"]);

        })
    }
)