class Block {
    constructor(index, hash,previousHash,data,timestamp,nonce){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
        this.nonce = nonce;
    }
    
  
}

export default Block;