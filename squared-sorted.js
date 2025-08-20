/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let leftPointer = 0
    let rightPointer = nums.length - 1;
    const result = new Array(nums.length);
    for (let i = nums.length - 1; i >= 0; i--) {
        const leftSquare = nums[leftPointer] * nums[leftPointer];
        const rightSquare = nums[rightPointer] * nums[rightPointer];
        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            leftPointer++;
        }
        else{
            result[i] = rightSquare;
            rightPointer--;
        }
    }
    return result;
};