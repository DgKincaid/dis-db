export class NodeServer {
    private static instance: NodeServer;

    public nodeList: Array<any>;

    constructor() {
        this.nodeList = new Array();
    }

    public static get Instance() {
        return this.instance || (this.instance = new this());
    }
}

const instance = new NodeServer();
export default instance;