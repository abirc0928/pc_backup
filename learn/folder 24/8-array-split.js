const nums = [1,2,3,4,5,6,7,8];

const part = nums.slice(3,6) //3 = starting index , 6 = end index. no change in the main array
// console.log(part)
// console.log(nums)


// const part2 = nums.splice(2,4)// 2 = starting index, 4 = length of removal part. It is also remove from main array. and part2 is removal part from main array 
// console.log(part2) //part2 is removal part from main array 
// console.log(nums) //main array

const part2 = nums.splice(2,4,50,60) // 50 and 60 are add into main array where part2 is removed from main array.
console.log(part2) //part2 is removal part from main array 
console.log(nums) //main array

const together = nums.join("ami") // it is add 'ami' after every element in the array
console.log(together); 