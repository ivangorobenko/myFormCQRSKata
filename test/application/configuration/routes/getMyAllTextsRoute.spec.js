const buildTest = require("../../../../src/buildTest");
const chai = require("chai")
const chaiHttp = require("chai-http")

chai.use(chaiHttp);
chai.should();
chai.should()

describe("L'endpoint pour récupérer tous mes textes", () => {
    it("doit renvoyer tous mes textes", (done) => {
        const {app, repositories} = buildTest();
        const myTextRepository = repositories.myTextRepository;
        myTextRepository.save(1, "Text 1");
        myTextRepository.save(2, "Text 2");

        chai.request(app).get("/myTexts").end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.deep.equals([{text:"Text 1", nbChars:6}, {text:"Text 2", nbChars:6}]);
            done();
        })
    })
})