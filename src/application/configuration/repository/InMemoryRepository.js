class InMemoryRepository {
    constructor() {
        this.myForms = [];
    }

    save(id, value) {
        this.myForms.push([id, value]);
    }

    get(id) {
        return this.myForms.find(([key]) => key === id)
    }

    list() {
        return this.myForms;
    }
}

module.exports = InMemoryRepository;