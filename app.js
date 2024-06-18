const express = require('express');
const app = express();

const port = 3000;

// Middleware 1
app.use((req, res, next) => {
  console.log('Hello from the middleware1');
  next()
}
);

// Middleware 2
app.use((req, res, next) => {
  console.log('Hello from the middleware2');
  next()
}
);

// Route handler for "/"
app.get('/', (req, res) => {
  console.log('Handling / route');
  res.send('Welcome to the home page!');
});

// Route handler for "/users"
app.get('/users', (req, res) => {
  console.log('Handling /users route');
  res.send('User list will be displayed here.');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});