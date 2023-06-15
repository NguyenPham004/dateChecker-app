const express = require('express');
const { isValidDate } = require('./helper');
const app = express();
const port = 3000; // Choose the port number for your API

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint for validating a date
app.post('/api/validate-date', (req, res) => {
  const { day, month, year } = req.body;

  if (!day || !month || !year) {
    return res.status(400).json({ error: 'Please provide a complete date.' });
  }

  const isValid = isValidDate(parseInt(day), parseInt(month), parseInt(year));

  if (isValid) {
    res.json({ message: 'The date is valid.' });
  } else {
    res.status(400).json({ error: 'The date is invalid.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
