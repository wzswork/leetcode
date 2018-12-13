/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let taskMap = {
        length: 0
    };
    tasks.forEach((item)=>{
        if(taskMap[item]){
            taskMap[item]++
        }else{
            taskMap[item] = 1;
        }
    })
};