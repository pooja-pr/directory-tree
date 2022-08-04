const stringInput = 'CREATE fruits\nCREATE vegetables\nCREATE grains\nCREATE fruits/apples\nCREATE fruits/apples/fuji\nLIST\nCREATE grains/squash\nMOVE grains/squash vegetables\nCREATE foods\nMOVE grains foods\nMOVE fruits foods\nMOVE vegetables foods\nLIST\nDELETE fruits/apples\nDELETE foods/fruits/apples\nLIST'

function destructure(input){
    const outStr = ''
    const structureObj= {}
    const stringArr = input.split('\n');
    for(let i=0;i<stringArr.length;i++) {

    }

}