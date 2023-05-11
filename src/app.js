// const express = require('express');
// const app = express();

// //Middlewares
// app.use(express.json());

// // Write a GET Request to get the next number from the input 'num'.
// // Endpoint : /api/get-next-num
// // Return the response as {message : , status: }

// module.exports = app;




const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// GET Request to get the next number from the input 'num'
app.get('/api/get-next-num', (req, res) => {
  // Check if the number is provided in the request body
  if (!req.body.num) {
    return res.status(400).json({ status: 'failure', message: 'Number not provided.' });
  }

  // Check if the input is a valid integer
  if (isNaN(parseInt(req.body.num))) {
    return res.status(400).json({ status: 'failure', message: 'Invalid number provided.' });
  }

  // Get the next number
  const nextNum = parseInt(req.body.num) + 1;

  // Return the response
  res.json({ status: 'success', message: nextNum });
});

module.exports = app;
