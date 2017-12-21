var grid = [[0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0]];
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0;
    var tempB = [0], tempR = 0;
    for(var i = 0; i<grid.length; i++){
        for(var j = 0; j<grid[i].length; j++){
            if(grid[i][j] == 1){
                if(j == 0 || grid[i][j-1] == 0){
                    perimeter++;
                }
                if(i == 0 || grid[i-1][j] == 0){
                    perimeter++;
                }
                if(j == grid[i].length-1 || grid[i][j+1] == 0){
                    perimeter++;
                }
                if(i == grid.length-1 || grid[i+1][j] == 0){
                    perimeter++;
                }
            }
        }
    }
    return perimeter;
};

console.log(islandPerimeter(grid));