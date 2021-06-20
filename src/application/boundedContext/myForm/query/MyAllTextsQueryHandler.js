class MyAllTextsQueryHandler {
    constructor(myTextRepository) {
        this.myTextRepository = myTextRepository;
    }

    handle() {
        return this.myTextRepository.list().map(([id, value]) => ({
            text: value, nbChars: value.length, nbWords: value.trim().split(" ").length
        }));
    }
}

module.exports = MyAllTextsQueryHandler;