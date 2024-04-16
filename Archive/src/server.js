'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res, next) => {
  res.status(200).send('default route is working');
});

function start() {
  app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
}

module.exports = { start, app };
