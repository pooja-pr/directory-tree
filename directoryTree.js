


const spaceAppend = function(num) {
    let i = 0;
    let space = "";
    while(i < num) {
        space += " ";
        i++;
    }
    return space;
}

const findItem = ((input, parent)=>input.filter(item => {if(item.parent == parent) return item.name}))

const findChildren = (tree,r,level=1)=>{
    const children = findItem(tree,r)
        if(children.length>0) {
            children.forEach(child=>{
                console.log(`${spaceAppend(level)}${child.name}\n`)
                findChildren(tree,child.name,level+1)
            })    
        }
        return;
   
}

// LIST function
const list = (tree) =>{

    const parents = findItem(tree,null)

    parents.forEach((r)=> {
        console.log(`${spaceAppend(0)}${r.name}\n`)
        findChildren(tree,r.name)
       
    })
}



/**
     *
     * @param {String}input inputString
     * @returns {String} output
     */
const createTree = (input)=> {

    let parentChildArr = []
    const inputArr = input.split('\n');

    inputArr.forEach(str => {
        const columnArr = str.split(' ');
        const keysArr = columnArr[1] ? columnArr[1].split('/'):[];

        switch (columnArr[0]) {
            case 'CREATE':
                console.log(str+'\n');
                for(let i=0;i<keysArr.length;i++) {
                    const obj = (i==0)?{name: `${keysArr[i]}`,parent:null} : {name: `${keysArr[i]}`,parent:`${keysArr[i-1]}`}
                    const elementIndex = parentChildArr.findIndex((o => o.name == obj.name));
                    if(elementIndex<0) {
                        parentChildArr.push(obj)
                    } else {
                        parentChildArr[elementIndex.parent] = `${keysArr[i-1]}`
                    }    
                }
                break;
            case 'MOVE':
                console.log(str+'\n');
                const itemIndex = parentChildArr.findIndex((o => o.name == columnArr[1]));
                if(itemIndex>-1) {
                    parentChildArr[itemIndex.parent] = columnArr[2];
                } else {
                    console.log(`${columnArr[1]} does not exist`)
                }

                break;
            case 'DELETE':
                console.log(str+'\n');
                const deleteIndex = parentChildArr.findIndex((o => o.name == keysArr[keysArr.length-1]));
                if(deleteIndex>-1) {
                    parentChildArr.splice(deleteIndex,1)
                } else {
                    console.log(`${keysArr[keysArr.length-1]} does not exist`)
                }

                break;
            case 'LIST':
                console.log(str+'\n');
                list(parentChildArr)
                break;
            default:break;
        }

    });

    return;
}

const stringInput = 'CREATE fruits\nCREATE vegetables\nCREATE grains\nCREATE fruits/apples\nCREATE fruits/apples/fuji\nLIST\nCREATE grains/squash\nMOVE grains/squash vegetables\nCREATE foods\nMOVE grains foods\nMOVE fruits foods\nMOVE vegetables foods\nLIST\nDELETE fruits/apples\nDELETE foods/fruits/apples\nLIST'

createTree(stringInput);