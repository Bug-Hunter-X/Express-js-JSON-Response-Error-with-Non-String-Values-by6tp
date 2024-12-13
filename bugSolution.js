const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // The solution is here. Convert numerical data to string before sending.
  res.json({ message: 'Hello World!', data: '123' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});