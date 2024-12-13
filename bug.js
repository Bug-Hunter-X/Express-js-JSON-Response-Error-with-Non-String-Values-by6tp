const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // The bug is here.  This function will throw an error when it encounters a non-string value in the object.
  res.json({ message: 'Hello World!', data: 123 });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});