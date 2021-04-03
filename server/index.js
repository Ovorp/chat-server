const express = require('express');
const app = express();
const {
  read,
  update,
  create,
  toDelete,
} = require('./controllers/messages_controller');
const PORT = 3001;
app.use(express.static(__dirname + '/../public/build'));
app.use(express.json());

// get endpoints
app.get('/api/messages', read);

// post endpoints
app.post('/api/messages', create);

// put endpoints
app.put('/api/messages/:id', update);

// delete endpoints
app.delete('/api/messages/:id', toDelete);

app.listen(PORT, console.log(`Hello World on Port ${PORT}`));
