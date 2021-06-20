const chai = require("chai");
const MyFormCommandHandler = require("../../../../../src/application/boundedContext/myForm/command/SubmitMyFormCommandHandler");
const {SubmitMyFormCommand} = require("../../../../../src/application/boundedContext/myForm/command/SubmitMyFormCommand");
const InMemoryRepository = require("../../../../../src/application/configuration/repository/InMemoryRepository")
chai.should();


describe('Le commande de soumission', () => {
        it("doit enregistrer le text saisi dans mo formulaire", () => {
            const myTextRepository = new InMemoryRepository();
            const sut = new MyFormCommandHandler(myTextRepository);

            const result = sut.handle(new SubmitMyFormCommand("Blablabla"))

            const myText = myTextRepository.get(result.id);
            myText.should.be.deep.equals([result.id, "Blablabla"]);

        })
    }
)