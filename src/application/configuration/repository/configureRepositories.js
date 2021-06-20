const InMemoryRepository = require("./InMemoryRepository")

const configureRepositories = () => {
    const myTextRepository = new InMemoryRepository();
    return {myTextRepository};
}

module.exports = configureRepositories;