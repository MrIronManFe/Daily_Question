/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，这两个整数可能有多种组合，找出其中一组组合即可，并返回他们的数组下标。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

function sum(arr, target) {
    arr.sort((a, b) => a - b)
    console.log(arr)
    let right = arr.length - 1
    while (arr[right] > target) {
        right--
    }
    // console.log(right)
    for (let i = 0; i <= right; i++) {
        for (let j = i + 1; j <= right; j++) {
            if (arr[i] + arr[j] === target) {
                return [
                    i,
                    j
                ]
            }
        }
    }
}

console.log(sum([2, 7, 11, 15], 9))

/*
// 答案与解析

// 最容易想到的就是暴力枚举，我们可以利用两层 for 循环来遍历每个元素，并查找满足条件的目标元素。不过这样时间复杂度为 O(N^2)，空间复杂度为 O(1)，时间复杂度较高，我们要想办法进行优化。我们可以增加一个 Map 记录已经遍历过的数字及其对应的索引值。这样当遍历一个新数字的时候去 Map 里查询，target 与该数的差值是否已经在前面的数字中出现过。如果出现过，那么已经得出答案，就不必再往下执行了。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
}