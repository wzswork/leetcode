var hammingDistance = function(x, y) {
    var x2 = x.toString(2);
    var y2 = y.toString(2);
    console.log(Math.max(x,y))
    var len = Math.max(x,y).toString(2).length;
    for(var j = x2.length; j< len; j++){
        x2 = '0'+x2;
    }
    console.log(x2);
    for(var k = y2.length; k< len; k++){
        y2 = '0'+y2;
    }
    console.log(y2);
    var b = 0;
    for(var i=0; i<len; i++){
        if(x2[i] != y2[i]){
            b++
        }
    }
    return b;
};

console.log(hammingDistance(4,2))