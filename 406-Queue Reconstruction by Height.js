/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    function sortHandle(a,b){
        if(a[0] == b[0]){
            return a[1] - b[1];
        }else{
            return b[0] - a[0];
        }
    }
    people.sort(sortHandle);
    for(let i=0; i<people.length; i++){
        let temp = people[i];
        people.splice(i,1);
        people.splice(temp[1],0,temp);
        
    }
    console.log(people);
};

var people = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
reconstructQueue(people);