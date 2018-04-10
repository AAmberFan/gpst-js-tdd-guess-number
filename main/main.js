// Write your cade below:
function main(sysInput,useInput) {
    let samePosNum = isSamePosition(sysInput,useInput);
    let diffPosNum = isDiffPosition(sysInput,useInput);
    //console.log(samePosNum);
    //console.log(printSummary(samePosNum,diffPosNum));
    return printSummary(samePosNum,diffPosNum);

}
function isSamePosition(sysInput,useInput){
    let aNum = 0;
    for (let i = 0;i<sysInput.length;i++){
        if(sysInput[i]===useInput[i]){
            aNum++;
        }
    }
    return aNum;
}
function isDiffPosition(sysInput,useInput){
    let bNum = 0;
//may have problem

    for(let i of useInput){
        if(sysInput.includes(i)){
            bNum++;
        }
    }
    return bNum;
}
function printSummary(samePosNum,diffPosNum){
    let result = samePosNum.toString()+"A";
    result += (diffPosNum-samePosNum).toString()+'B';
    return result;
}
// main('1234','');

module.exports = main;