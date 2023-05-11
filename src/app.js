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

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num', (req, res) => {
    res.status(200).json({ "message": req.body.num + 1, "status": "success" })
})

module.exports = app;
