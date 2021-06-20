const MyAllTextsQueryHandler = require("../../boundedContext/myForm/query/MyAllTextsQueryHandler")
const {MY_ALL_TEXTS} = require("../../boundedContext/myForm/query/MyAllTextsQuery")

const subscribeQueryHandlers = (queryBus, repositories) => {
    queryBus.subscribe(MY_ALL_TEXTS, new MyAllTextsQueryHandler(repositories.myTextRepository))
}

module.exports = subscribeQueryHandlers;