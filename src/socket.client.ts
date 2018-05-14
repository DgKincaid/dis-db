import * as client from 'socket.io-client';

const debug = require('debug')('distro:socket.client');

export class SocketClient {
    public io;
    public sent: number = 0;

    constructor(ip) {
        this.io = client(ip);
        this.init();
    }

    public init(): void {
        this.io.on('connect', (socket) => {
            // debug('client connected: %o', socket.id);
        })
        this.io.on('fromApi', (data) => {
            console.log(data);
        })
    }

    public sendToServer(emit: string, data: any) {
        this.io.emit(emit, data);
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
