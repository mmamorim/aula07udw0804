const http = require('http');
const app = require('./backend/app');
// const server = http.createServer((req, res) => {
//   res.end('resposta do servidor');
// });

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
