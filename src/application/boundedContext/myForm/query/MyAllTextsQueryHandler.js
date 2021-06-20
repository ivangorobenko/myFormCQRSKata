class MyAllTextsQueryHandler {
    constructor(myTextRepository) {
        this.myTextRepository = myTextRepository;
    }

    handle() {
        return this.myTextRepository.list().map(([id, value]) => value);
    }
}

module.exports = MyAllTextsQueryHandler;