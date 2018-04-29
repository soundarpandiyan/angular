// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    employeeRoutes = require('./expressRoutes/employeeRoutes'),
    mysql = require('mysql');

let connection = mysql.createConnection({
    insecureAuth: true,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employeedatabase',
});


function createConnection() {
    connection.connect((err) => {
        if (err)
            console.log('mysql conn error ', err);
        else {
            console.log('Connected!');
            employeeRoutes.connection = connection;
        }
    });
}

function initiateServer() {
    createConnection();
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;
    employeeRoutes.connection = connection;
    app.use('/employees', employeeRoutes);
    const server = app.listen(port, function () {
        console.log('Listening on port ' + port);
    });
}

initiateServer();