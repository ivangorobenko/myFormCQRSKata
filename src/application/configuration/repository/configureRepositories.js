const InMemoryRepository = require("./InMemoryRepository")

const configureRepositories = () => {
    const myFormRepository = new InMemoryRepository();
    return {myFormRepository};
}

module.exports = configureRepositories;