const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello from package1');
});

app.listen(port, () => { 
  console.log(`Server started at http://localhost:${port}`);
});