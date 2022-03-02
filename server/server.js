const path = require('path');
const express = require('express');
const app = express();
const PORT = 3003;
const errorHandler = require ('./constants/defaultErrorHandler')
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, '../build')));


/* ----------------------------- declare routes ----------------------------- */

const apiRouter = require(path.join(__dirname, 'routes/api.js'));

/* ------------------------------- use routes ------------------------------- */
app.use('/api', apiRouter);


/* ------------------------------ handle errors ----------------------------- */

app.use((req, res) => {
  console.log('Page not found');
  return res.status(404).
  send(
    'Page not found. Click <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a> for more information.'
  )
});

app.use(errorHandler.default);


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});