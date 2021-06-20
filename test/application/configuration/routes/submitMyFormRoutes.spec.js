const buildTest = require("../../../../src/buildTest");
const chai = require("chai")
const chaiHttp = require("chai-http")

chai.use(chaiHttp);
chai.should();

describe("L'endpoint pour poster un formulaire", () => {
    it("doit enregistrer le contenu de formulaire", (done) => {
        const {app, repositories} = buildTest();
        repositories.myTextRepository.list().should.be.empty;
        chai.request(app).post("/myForm").end((err, res) => {

            res.should.have.status(204);
            repositories.myTextRepository.list().should.not.be.empty;

            done();
        })
    })

})
