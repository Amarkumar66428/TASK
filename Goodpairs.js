let nums =[1,2,2,1]
Goodpaired(nums)
function Goodpaired(nums) {
    let count = 0;
    for (let i = 0; i <= nums.length; i++) {

        for (let j = i + 1; j <= nums.length; j++) {
            
            if (nums[i] == nums[j]) {
           
                count++;
            }
        }
    }
    console.log("output: " + count);
}