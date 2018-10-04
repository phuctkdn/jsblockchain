const SHA256 = require('crypto-js/sha256')
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Object on Java Script & PI number is " + Math.PI + " \n");

    class Block {
        constructor(data, wallet_address , OutputTotal ) {
            var d = new Date();
            this.index = 0;
            this.timestamp = d.getDay() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' +  d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            this.data = data;
            this.wallet_address = wallet_address;
            this.transaction = 0;
            this.OutputTotal = OutputTotal ;
            this.previousHash = "0";
            this.hash = this.calculateHash();
            this.nonce = 0;
        }

        printData(){
            return ('Index: ' + this.index  + ' Timestamp: ' +  this.timestamp  + ' Data: ' + this.data +  ' Wallet: ' + this.wallet_address  + ' Transaction: ' + this. transaction + ' Output Data: ' + this.OutputTotal +   ' Previous Hash: ' +  this.previousHash +  ' Hash: ' + this.hash    +  ' Nonce: ' + this.nonce).toString();
        }
        calculateHash() {
            return SHA256(this.index  + this.timestamp + this.data +  this.wallet_address + this.transaction + this.OutputTotal  + this.previousHash +  this.nonce).toString();
        }

        mineBlock(difficulty) {

        }
    }

    class Blockchain {
        constructor() {
            this.chain = [this.createGenesis()];
        }

        createGenesis() {
            return new Block("Genesis block",SHA256(0), 30 )
        }

        latestBlock() {
            return this.chain[this.chain.length - 1]
        }

        addBlock(newBlock) {  // them block moi
            newBlock.index =  this.latestBlock().index + 1;
            newBlock.transaction =  this.latestBlock().transaction + 1;
            newBlock.previousHash = this.latestBlock().hash; // gan PreviousHash bang Hash cua Latest Block
            newBlock.hash = newBlock.calculateHash();
            this.chain.push(newBlock);
        }

        checkValid() {
            for (let i = 1; i < this.chain.length; i++) {
                const currentBlock = this.chain[i];
                const previousBlock = this.chain[i - 1];

                if (currentBlock.hash !== currentBlock.calculateHash()) {
                    return false;
                }

                if (currentBlock.previousHash !== previousBlock.hash) {
                    return false;
                }
            }

            return true;
        }
    }


    let jsChain = new Blockchain();
    response.write("Genesis Block " + jsChain.createGenesis().calculateHash() + '\n');
    response.write("Genesis Block DATA: " + jsChain.createGenesis().printData() + '\n');
    jsChain.addBlock(new Block( 'Block 1',SHA256('a'),20));
    response.write("Is blockchain valid? " + jsChain.checkValid() + "\n");
    response.write("Is blockchain SHA " + jsChain.latestBlock().calculateHash() + '\n');
    response.write("Is blockchain DATA " + jsChain.latestBlock().printData() + '\n');
    jsChain.addBlock(new Block( 'Block 2',SHA256('b'),15));
     response.write("Is blockchain valid? " + jsChain.checkValid() + "\n");
    response.write("Is blockchain SHA " + jsChain.latestBlock().calculateHash() + '\n');
    response.write("Is blockchain DATA " + jsChain.latestBlock().printData() + '\n');
    console.log(JSON.stringify(jsChain, null, 4));
    console.log("Is blockchain valid? " + jsChain.checkValid());
    console.log("Is blockchain SHA " + jsChain.latestBlock().calculateHash());
        /////////
    jsChain.addBlock(new Block( 'Block 3',SHA256('c'),0.1));
    console.log(JSON.stringify(jsChain, null, 4));
    console.log("Is blockchain valid? " + jsChain.checkValid());
    console.log("Is blockchain SHA " + jsChain.latestBlock().calculateHash());
   response.write("Is blockchain valid? " + jsChain.checkValid() + "\n");
    response.write("Is blockchain SHA " + jsChain.latestBlock().calculateHash() + '\n');
    response.write("Is blockchain DATA " + jsChain.latestBlock().printData() + '\n');
    jsChain.addBlock(new Block( 'Block 4',SHA256('d'),1.1));
    console.log(JSON.stringify(jsChain, null, 4));
    console.log("Is blockchain valid? " + jsChain.checkValid());
    console.log("Is blockchain SHA " + jsChain.latestBlock().calculateHash());
    response.write("Is blockchain valid? " + jsChain.checkValid() + "\n");
    response.write("Is blockchain SHA " + jsChain.latestBlock().calculateHash() + '\n');
    response.write("Is blockchain DATA " + jsChain.latestBlock().printData() + '\n');
    jsChain.addBlock(new Block( 'Block 5',SHA256('d'),1.1));
    console.log(JSON.stringify(jsChain, null, 4));
    console.log("Is blockchain valid? " + jsChain.checkValid());
    console.log("Is blockchain SHA " + jsChain.latestBlock().calculateHash());
    response.write("Is blockchain valid? " + jsChain.checkValid() + "\n");
    response.write("Is blockchain SHA " + jsChain.latestBlock().calculateHash() + '\n');
    response.write("Is blockchain DATA " + jsChain.latestBlock().printData() + '\n');
    var x = 99;
    response.write("X DATA " +SHA256(x).toString() + '\n');
}).listen(80);
//docment.writeln('Hello world');
