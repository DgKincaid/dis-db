import { SocketClient } from './src/socket.client';

import * as rp from 'request-promise';

const client = new SocketClient();

client.test();

function test(): void {
    let interval;

        if(interval){
            clearInterval(interval);
        }
        interval = setInterval(() => {
            const now = Date.now();
            rp.post('http://localhost:3000/api/data').form({date: now });
        }, 5000);
}