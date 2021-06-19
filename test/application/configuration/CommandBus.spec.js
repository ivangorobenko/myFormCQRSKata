const chai = require("chai");
const {expect} = require("chai");
const CommandBus = require("../../../src/application/configuration/CommandBus")
chai.should();



describe('Le command Bus', () => {
        it("doit permettre de souscrire un commandHandler pour une type de commande donnée", () => {
            const sut = new CommandBus()

            const COMMAND_TYPE = "COMMAND_TYPE";
            sut.subscribe(COMMAND_TYPE, () => {
            })

            expect(sut.handlers[COMMAND_TYPE]).to.not.be.undefined;
        })

        it("doit permettre de dispatch  une commande en fonction de son type ", () => {
            const sut = new CommandBus()
            let called = false;
            let COMMAND_TYPE = "COMMAND_TYPE";
            let dispatchedCommand = undefined;
            let commandToDispatch = {type: COMMAND_TYPE, valeur: "TOTO"}
            sut.subscribe(commandToDispatch.type, {
                handle: (command) => {
                    dispatchedCommand = command
                    called = true
                }
            })

            sut.dispatch(commandToDispatch);

            called.should.be.true;
            dispatchedCommand.should.be.deep.equals({type: COMMAND_TYPE, valeur: "TOTO"})
        })
    }
)