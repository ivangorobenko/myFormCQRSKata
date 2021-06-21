const buildTest = require("../../../../src/buildTest");
const chai = require("chai")
const chaiHttp = require("chai-http")

chai.use(chaiHttp);
chai.should();

describe("L'endpoint pour poster un formulaire", () => {
    it("doit enregistrer le contenu de formulaire", (done) => {
        const {app, repositories} = buildTest();
        chai.request(app).post("/myForm",).send({myText: 'test'}).then((err, res) => {

            res.should.have.status(204);
            //FIXME: rendre cette assertion prédictive
            //repositories.myTextRepository.list().should.not.be.empty;
            done();
        }).end(()=>{
            repositories.myTextRepository.list().should.not.be.empty;
        })
    })

})
