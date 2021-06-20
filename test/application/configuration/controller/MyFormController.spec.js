const chai = require("chai");
const MyFormController = require("../../../../src/application/configuration/controller/MyFormController")
const {SubmitMyFormCommand} = require("../../../../src/application/boundedContext/myForm/command/SubmitMyFormCommand")
const {MyAllTextsQuery} = require("../../../../src/application/boundedContext/myForm/query/MyAllTextsQuery")
chai.should();

describe('Le controlleur de mon formulaire', () => {
        describe('quand on saisi le formulaire', () => {
            it("doit dispatcher la commande de soumission du formulaire", () => {
                let called = false;
                let calledCommand = {}
                const sut = new MyFormController({
                    dispatch: (command) => {
                        calledCommand = command;
                        called = true;
                    }
                });

                sut.submitMyForm({myText: "BLABLA"});

                calledCommand.should.be.deep.equals(new SubmitMyFormCommand("BLABLA"))
                called.should.be.true;

            })
        })
        describe('quand on récupère tous mex textes', () => {
            it("doit dispatcher la query de la récupération de tous mex textes", () => {
                let called = false;
                let calledQuery = {}
                const sut = new MyFormController({}, {
                    dispatch: (query) => {
                        calledQuery = query;
                        called = true;
                    }
                });

                sut.getMyTexts();

                calledQuery.should.be.deep.equals(new MyAllTextsQuery())
                called.should.be.true;

            })
        })

    }
)