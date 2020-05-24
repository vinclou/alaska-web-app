const walk = require('walk');
const fs = require('fs');

class FsTree {

    constructor(){

    }

    /**
     * @param rootPath
     * @returns {Promise}
     */
    getFileSysTree(rootPath) {

        return new Promise((resolve, reject) => {

            const root = rootPath || __dirname; // if there's no rootPath use exec location
            const tree = [];
            const nodesMap = {};
            const walker  = walk.walk(root, { followLinks: false}); // filter doesn't work well

            function addNode(node, path){
                if ( node.name.indexOf('.') === 0 || path.indexOf('/.') >= 0){ // ignore hidden files
                    return;
                }
                var relativePath = path.replace(root,'');

                node.path = relativePath + '/' + node.name;
                nodesMap[node.path] = node;

                if ( relativePath.length === 0 ){ //is root
                    tree.push(node);
                    return;
                }
                node.parentPath = node.path.substring(0,node.path.lastIndexOf('/'));
                const parent = nodesMap[node.parentPath];
                parent.children.push(node);

            }

            walker.on('directory', (path, stats, next)=>{
                addNode({ name: stats.name, type:'dir',children:[]}, path);
                next();
            });

            walker.on('file', (path,stats,next)=>{
                addNode({name:stats.name, type:'file'},path);
                next();
            });

            walker.on('end',()=>{
                resolve(tree);
            });

            walker.on('errors',  (root, nodeStatsArray, next) => {
                reject(nodeStatsArray);
                next();
            });
        });
    }
}


const saveAsJson = (jsonObj) => {
    const json_file = JSON.stringify(jsonObj);
    fs.writeFileSync('./docs/img_test.json', json_file);
    hasRun = true;
};

async function makeJson() {
    try {

        const fsTreeFetcher = new FsTree();
        fsTreeFetcher.getFileSysTree('./cameraTrap/anwr/31/2019/100RECNX').then((result) => {
        saveAsJson(result);

        console.log("Json Was Created.");
        });

        return true;
    }
    catch(e) {
        console.log(e.message);
        process.exit(1);
    }
}

module.exports.makeJson = makeJson;