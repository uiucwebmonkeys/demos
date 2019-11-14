const express = require('express');
const app = express();
const server = require('http').Server(app);
// app.use(express.static(path.join(__dirname, 'src')));

const db = {};

app.use(express.json());

app.get('/hello', (req, res) => res.send('world'));

app.post('/create_user', (req, res, next) => {
  if ('username' in req.body) {
    if (!('users' in db)) {
      db['users'] = {};
    }

    // Check if user with username already exists

    db['users'][req.body.username] = req.body;
    console.log(db);
    const mesg = 'User with username ' + req.body.username + ' created';
    res.status(201).send({message: mesg});
  } else {
    res.status(400).send({err: 'Missing required field "username"'})
  }
});

app.use((req, res, next) => {
  if ('password' in req.headers) {
    const idToken = req.headers['password'];
    if (req.headers['password'] == 'applebottomjeans') {
      res.locals.auth = true;
      next();
	  } else {
      res.status(401).send({ err: 'User could not be verified' });
    }
  } else {
    res.status(401).send({ err: 'User could not be verified' });
  }
});

app.get('/users', (req, res, next) => {
  res.status(200).send(db.users);
});

server.listen(process.env.PORT || 8080);
console.log('Started server on port 8080...');
