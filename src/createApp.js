const express = require('express');
var cors = require('cors')

const createApp = () => {
    const app = express();

    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));


    return app;
}

module.exports = createApp;