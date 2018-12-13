/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let taskMap = {
        length: 0,
        max: 0
    };
    tasks.forEach((item)=>{
        if(taskMap[item]){
            taskMap[item]++
        }else{
            taskMap[item] = 1;
            taskMap.length ++;
        }
        taskMap.max = Math.max(taskMap.max, taskMap[item]);
    })
    if(taskMap.length <= n){
        return taskMap.max;
    }else if( taskMap.max > tasks.length/n){
        return taskMap.max;
    }else {
        return Math.ceil(tasks.length/n)
    }
};