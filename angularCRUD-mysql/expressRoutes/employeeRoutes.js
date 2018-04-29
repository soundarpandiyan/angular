// coinRoutes.js

var express = require('express');
var employeeRoutes = express.Router();

employeeRoutes.connection;
// Defined store route
employeeRoutes.route('/add').post(function (req, response) {
    console.log(req.body);
    employeeRoutes.connection.query('INSERT INTO employees SET ?', [req.body], (err, res) => {
        if (err) throw err;
        response.json(res.insertId);
    });
});

// Defined get data(index or listing) route
employeeRoutes.route('/').get(function (req, response) {
    employeeRoutes.connection.query('SELECT * FROM employees', (err, rows) => {
        if (err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        response.json(rows);
    });
});

// Defined edit route
employeeRoutes.route('/edit/:id').get(function (req, response) {
    var id = req.params.id;
    console.log(id);
    employeeRoutes.connection.query(
        'SELECT * FROM employees where id = ?', [id],
        (err, result) => {
            if (err) throw err;
            console.log(result);
            response.json(result);
        }
    );
});

//  Defined update route
employeeRoutes.route('/update').post(function (req, response) {
    console.log(req.body.id, req.body.location, req.body.name);
    employeeRoutes.connection.query(
        'UPDATE employees SET name= ? , location = ? Where ID = ?',
        [req.body.name, req.body.location, req.body.id],
        (err, result) => {
            if (err) throw err;
            response.json(result.changedRows);
        }
    );
});

// Defined delete 
// Defined delete | remove | destroy route
employeeRoutes.route('/delete/:id').get(function (req, response) {
    var id = req.params.id;
    employeeRoutes.connection.query(
        'DELETE FROM employees WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            return response.json(result.affectedRows);
        }
    );
});

module.exports = employeeRoutes;
