const chai = require("chai");
const InMemoryRepository = require("../../../../../src/application/configuration/repository/InMemoryRepository")
const MyAllTextsQueryHandler = require("../../../../../src/application/boundedContext/myForm/query/MyAllTextsQueryHandler")
const {MyAllTextsQuery} = require("../../../../../src/application/boundedContext/myForm/query/MyAllTextsQuery")
chai.should();

describe('Ma query de récupération de tous mes texts', () => {
        it("doit renvoyer l'ensemble de mes texts", () => {
            const myTextRepository = new InMemoryRepository();
            myTextRepository.save(1, "Text 1");
            myTextRepository.save(2, "Text 2");
            const sut = new MyAllTextsQueryHandler(myTextRepository);

            const result = sut.handle(new MyAllTextsQuery())

            result.should.be.deep.equals(["Text 1", "Text 2"])

        })
    }
)