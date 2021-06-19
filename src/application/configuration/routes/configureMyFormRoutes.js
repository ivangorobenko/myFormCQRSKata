const express = require('express');
const router = express.Router();
const MyFormController = require("../controller/MyFormController")


const configureMyFormRoutes = (app, commandBus) => {
    const myFormController = new MyFormController(commandBus);
    router.post('/myForm', (req, res) => {
        const result = myFormController.submitMyForm(req.body);
        res.send(result)
    });

    app.use(router)

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });
    return app;
}


module.exports = configureMyFormRoutes;
