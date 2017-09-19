var countBits = function(num) {
    var arr = [0];
    var last;
    var next = 1;
    for(var i=1; i<=num; i++){
        if(i == next){
            // 所有2的指数为1
            arr.push(1);
            last = next;
            next = next*2;
        }else{
            // 在2^n 到2^n+1之间的数可拆分为 2^n + i
            arr.push(1 + arr[i%last])
        }
    }
    return arr;
};

console.log(countBits(16))