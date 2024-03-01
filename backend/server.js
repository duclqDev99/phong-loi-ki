const express = require('express');
const app = express();
const port = 3000;
const routes = require('./src/routes/routes');

app.use(express.json());
app.use('/api', routes); 

// app.use('/api/books', booksRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
