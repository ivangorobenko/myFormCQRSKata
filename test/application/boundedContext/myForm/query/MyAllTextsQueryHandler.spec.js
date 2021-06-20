const chai = require("chai");
const InMemoryRepository = require("../../../../../src/application/configuration/repository/InMemoryRepository")
const MyAllTextsQueryHandler = require("../../../../../src/application/boundedContext/myForm/query/MyAllTextsQueryHandler")
const {MyAllTextsQuery} = require("../../../../../src/application/boundedContext/myForm/query/MyAllTextsQuery")
chai.should();

describe('Ma query de récupération de tous mes texts', () => {
        it("doit renvoyer l'ensemble de mes texts", () => {
            const myTextRepository = new InMemoryRepository();
            const expectedText1 = "Text 1";
            myTextRepository.save(1, expectedText1);
            const expectedText2 = "Text 2";
            myTextRepository.save(2, expectedText2);
            const sut = new MyAllTextsQueryHandler(myTextRepository);

            const result = sut.handle(new MyAllTextsQuery())

            result[0].text.should.be.equals(expectedText1);
            result[1].text.should.be.equals(expectedText2);
        })
        it("doit renvoyer le nombre de caractères dans chacun de mes texts", () => {
            const myTextRepository = new InMemoryRepository();
            myTextRepository.save(1, "Text 1");
            myTextRepository.save(2, "Text 2");
            const sut = new MyAllTextsQueryHandler(myTextRepository);

            const result = sut.handle(new MyAllTextsQuery())

            result.length.should.be.equals(2);
            result.forEach((myText) => myText.nbChars.should.be.equals(myText.text.length));
        })
        it("doit renvoyer le nombre de mots", () => {
            const myTextRepository = new InMemoryRepository();
            myTextRepository.save(1, "Lorem ipsum");
            myTextRepository.save(2, "Lorem ipsum dolor ");
            myTextRepository.save(3, "Lorem ipsum dolor sit ");
            const sut = new MyAllTextsQueryHandler(myTextRepository);

            const result = sut.handle(new MyAllTextsQuery())

            result[0].nbWords.should.be.equals(2);
            result[1].nbWords.should.be.equals(3);
            result[2].nbWords.should.be.equals(4);
        })
    }
)