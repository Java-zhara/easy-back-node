const express = require('express');

const app = express();

app.set('views', 'express/views');
app.set('view engine', 'ejs');

app.use(express.static('express/public'));
app.use(express.urlencoded({ extended: false }));

//TODO: отображение текста
// app.get('/', (req, res) => {
//   res.send('This home page');
// });
//TODO: отображение файла
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

//TODO: отображение файла через шаблонизатор

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// app.get('/user/:username/:id', (req, res) => {
//   res.send(`User ID: ${req.params.id}. Username: ${req.params.username}.`);
// });

app.get('/user/:username', (req, res) => {
  const data = {
    username: req.params.username,
    hobbies: ['Hockey', 'Basketball', 'Skate'],
  };
  res.render('user', data);
});

app.post('/check-user', (req, res) => {
  let username = req.body.username;
  if (username == '') {
    return res.redirect('/');
  } else {
    return res.redirect(`/user/${username}`);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
