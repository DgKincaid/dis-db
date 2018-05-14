import { createServer } from 'http';
import * as getPort from 'get-port';

import debugJs from 'debug';

import App from './src/app';

import { SocketServer } from './src/socket.server';
import { SocketClient } from './src/socket.client';

const debug = debugJs('distro:server');
const self = process.argv[2];
const masterIp = 'http://localhost:3000';

getPort({ port: 3000 }).then(port => {
    debug('self: %o', self)
    App.set('port', port);

    const server = createServer(App);

    server.listen(port, () => {
        debug('Listening on %o', port);
    });

    const socket = new SocketServer(server);

    if(masterIp != 'http://localhost:' + port) {
        const client = new SocketClient(masterIp);

        client.sendToServer('identity', self);
    }
});
