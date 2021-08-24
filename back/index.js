const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./data/database');

dotenv.config();

const categoryRouter = require('./routers/category');
const codesRouter = require('./routers/codes');
const highlightRouter = require('./routers/highlight');

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  res.send('hello world');
  console.log(db)
});

app.use('/', categoryRouter);
app.use('/', codesRouter);
app.use('/', highlightRouter);

// Error middleware
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    console.log('<< 401 UNAUTHORIZED - Invalid Token');
    res.status(401).send('Invalid token');
  }
});
app.listen(process.env.PORT || 5000, () => {
  console.log(`App running on port`);
})