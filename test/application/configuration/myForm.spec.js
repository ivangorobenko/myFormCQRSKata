const buildApp = require("../../../src/buildApp");
const chai = require("chai")
const chaiHttp = require("chai-http")

chai.use(chaiHttp);
chai.should();
describe("L'endpoint pour poster un formulaire", () => {
    it("doit exister", () => {
        const app = buildApp();
        chai.request(app).post("/myForm").end((err, res) => {
            res.should.have.status(200);
        })
    })
    it("doit renvoyer un id du formulaire saisi", () => {
        const app = buildApp();
        chai.request(app).post("/myForm").end((err, res) => {
            res.body.should.have.property("id");
        })
    })

    //FIXME : test pas solide . rendre asynchronisme cohérent
    it("doit renvoyer un id différent à chaque saisi du formulaire ", () => {
        const app = buildApp();
        let firstId;
        let secondId;
        chai.request(app).post("/myForm").send( {myText: 'text1'}).end((err, res) => {
            firstId = res.body.id;
            firstId.should.not.be.empty;
        })
        chai.request(app).post("/myForm").send( {myText: 'text1'}).end((err, res) => {
            secondId = res.body.id;
            secondId.should.not.be.empty;
            firstId.should.not.be.equals(secondId)
        })
    })
})