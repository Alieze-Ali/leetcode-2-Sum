
/* 2 Sum Solution */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Pseudo Code
Note: indices = Is the plural of index. In this case it's the two positions of the integers necessary to equal the value of the 'target' param

1. Loop over the 'nums' array. 
    I will use the for loop bc it allows you to iterate over each element in the    
    array in order to find the pairs.
2. Capture & Compare the 2 integers that add up to 'target'
    a. This can be achieved by nesting another for loop and assigning the second index to j. Loop over 'nums' array with the index of j.
    b. the index j = i + 1
3. Check if the pair of numbers add up to target using the 'if' statement. 
    - if i + j = target return i & j positions

*/

var twoSum = function(nums, target) {
    
    //loop thru each element in the array
    for(let i = 0; i < nums.length; i++){
        // inside the loop, check for the complement (target - current number)
        // iterate through the rest of the array to find the complement
        for (let j = i + 1; j < nums.length; j++) {
            //Check if the pair of numbers add up to the target
            if (nums[i] + nums[j] === target) {
                // Return the indices of the two numbers
                return [i, j];
            }
        }
    
    }
    // If no solution is found, return an appropriate value
    return null;
};