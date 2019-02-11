//require modules
const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const enrouten = require('express-enrouten');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// getting database configuration
require('./configs/db');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  //enrouten into controllers directory
  server.use(enrouten({
    directory: 'controllers'
  }));

  //Next js rendering
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`);
  });
});
