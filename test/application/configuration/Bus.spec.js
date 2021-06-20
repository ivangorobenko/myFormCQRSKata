const chai = require("chai");
const {expect} = require("chai");
const CommandBus = require("../../../src/application/configuration/Bus")
chai.should();



describe('Un Bus', () => {
        it("doit permettre de souscrire un handler pour une type de requête donnée", () => {
            const sut = new CommandBus()

            const REQUEST_TYPE = "REQUEST_TYPE";
            sut.subscribe(REQUEST_TYPE, () => {
            })

            expect(sut.handlers[REQUEST_TYPE]).to.not.be.undefined;
        })

        it("doit permettre de dispatch  une requête en fonction de son type ", () => {
            const sut = new CommandBus()
            let called = false;
            let REQUEST_TYPE = "REQUEST_TYPE";
            let dispatchedCommand = undefined;
            let commandToDispatch = {type: REQUEST_TYPE, valeur: "TOTO"}
            sut.subscribe(commandToDispatch.type, {
                handle: (command) => {
                    dispatchedCommand = command
                    called = true
                }
            })

            sut.dispatch(commandToDispatch);

            called.should.be.true;
            dispatchedCommand.should.be.deep.equals({type: REQUEST_TYPE, valeur: "TOTO"})
        })
    }
)