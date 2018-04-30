import { createServer } from 'http';
import debugJs from 'debug';

import App from './src/app';

import { SocketServer } from './src/socket.server';
import { SocketClient } from './src/socket.client';

const debug = debugJs('distro:server');
const port = process.env.PORT || 3000;

App.set('port', port);

const server = createServer(App);

server.listen(port, () => {
    debug('Listening on %o', port);
});

const socket = new SocketServer(server);
const client = new SocketClient();
