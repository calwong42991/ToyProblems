/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = l = 0;
    let r = height.length - 1
    let cur;
    while (l < r){
        cur = Math.min(height[l], height[r]) * (r - l);
        if (cur > res){
            res = cur;
        } 
        height[l] <= height[r] ? l += 1 : r -= 1;
    }
    return res;
};

