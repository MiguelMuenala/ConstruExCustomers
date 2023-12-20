const {useRouter} = require('next/router');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.js');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3001, () => {
  console.log(`Servidor backend escuchando en el puerto 3001`);
});

/* Función para obtener total de  de la base de datos */
app.get('/getTotalCustomers', (req, res) => {
  const query = 'SELECT COUNT(*) FROM cx_customers';
  db.query(query, (err, result) => {
      if (err) {
          throw err;
      }
      res.json(result);
      console.log(result);
  });
});
/* Función para obtener total de  de la base de datos */
app.get('/getTotalInvoiceValue', (req, res) => {
  const query = 'SELECT SUM(invoice_value) AS totalInvoiceValue FROM cx_customers';
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
    console.log(result,"back result");
  });
});