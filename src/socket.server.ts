import * as socketIo from 'socket.io';

import { Server } from 'http';

import NodeServer from './node.server';

const debug = require('debug')('distro:socket.server');

export class SocketServer {
    private io: socketIo.Server;
    public requests: number = 0;

    constructor(server: Server) {
        this.io = socketIo(server);
        this.init();
    }

    public init(): void {

        this.io.on('connect', (socket: any) => {
            debug('Client connected: %o', socket.id);

            socket.on('identity', (self) => {
                debug('identity: %o', self);

                
            })

            socket.on('disconnect', () => {
                debug('Client disconnected %o', this.requests)
            });

            socket.on('test', (data) => {
                this.requests++;
                debug('test: %o', this.requests);
            })
        })
    }
}