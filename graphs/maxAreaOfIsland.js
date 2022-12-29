// https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/707/traversals-trees-graphs/4628/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = -Infinity;
    let visited = [];
    let area = 0;
    function dfs(i, j) {
        if (i < 0 || j < 0) {
            return;
        }
        if (i >= grid.length || j >= grid[0].length) {
            return;
        }
        if (grid[i][j] === 1) {
            if (!visited.includes(`${i},${j}`)) {
                visited.push(`${i},${j}`);
                area += 1;
                dfs(i, j + 1);
                dfs(i, j - 1);
                dfs(i + 1, j);
                dfs(i - 1, j);
            }
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            area = 0;
            if (grid[i][j] === 1) {
                dfs(i, j);
            }
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
};

var grid = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
];
console.log(maxAreaOfIsland(grid));