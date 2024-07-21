const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors()); // Enable CORS

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'wms',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});

app.get('/customers', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const SQL = 'SELECT * FROM Customers LIMIT ?, ?';
    db.query(SQL, [offset, limit], (err, result) => {
        if (err) {
            res.send({ error: err });
        } else {
            console.log("Get All Customers Successfully");
            res.send(result);
        }
    });
});
