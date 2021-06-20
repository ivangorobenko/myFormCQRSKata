const express = require('express');
const router = express.Router();
const MyFormController = require("../controller/MyFormController")


const configureRoutes = (app, commandBus, queryBus) => {
    const myFormController = new MyFormController(commandBus, queryBus);

    router.post('/myForm', (req, res) => {
        const result = myFormController.submitMyForm(req.body);
        res.status(204).send(result)
    });

    router.get('/myTexts', (req, res) => {
        const result = myFormController.getMyTexts();
        res.send(result)
    });

    app.use(router)

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });
    return app;
}


module.exports = configureRoutes;
