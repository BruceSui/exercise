

function trie(arr) {
    let trieNode = {
        char : '/',
        child : {}
    }
    arr.forEach(a => {
        doNode(a);
    })    
    function doNode(text) {
        let node = trieNode;
        for (let c of text) {
            if (!node.child[c]) {
                node.child[c] = { char: c, child: {} };
            }
            node = node.child[c];
        }
    }
    function find(text) {
        let node = trieNode;
        for (let c of text) {
            if (!node.child[c]) {
                return false;
            }
            node = node.child[c];
        }
    }
    return trieNode;
}
let arr = ['aads', 'agdds', 'sadf', 'dsad'];
console.log(JSON.stringify(trie(arr)))