import * as client from 'socket.io-client';

const debug = require('debug')('distro:socket.client');

export class SocketClient {
    public io;
    public sent: number = 0;

    constructor() {
        this.io = client('http://localhost:3000');
        this.init();
    }

    public init(): void {
        this.io.on('connect', (socket) => {
            console.log('client connected');
        })
        this.io.on('fromApi', (data) => {
            console.log(data);
        })
    }

    public test(): void {
        let interval;

        if(interval){
            clearInterval(interval);
        }
        interval = setInterval(() => {
            const now = Date.now();
            this.sent++;
            debug('requests sent: %o', this.sent);
            this.io.emit('test', now);
        }, 500);
    }
}
