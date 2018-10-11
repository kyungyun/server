class Node {
    constructor(name, block){
        this.peer= name;
        this.blockchain = [block];
        this.connectedPeers = [];
    }
}

export default Node;