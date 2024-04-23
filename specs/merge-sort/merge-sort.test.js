/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  //base case if length is 0 or 1,
  if(nums.length<2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length/2);

  //create left array and right array
  const leftArray = nums.slice(0,middle);
  const rightArray = nums.slice(middle);


  //call merge sort on left and right array
  const sortedleftArray = mergeSort(leftArray);//nums.slice(0,middle);
  const sortedrightArray = mergeSort(rightArray);//nums.slice(middle);
  
  // call merge on sorted arrays
  return merge(sortedleftArray, sortedrightArray);
  
};

const merge = (left, right) => {
  let sortedArray = [];
  while(left.length && right.length){
    if(left[0]<=right[0]){
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return sortedArray.concat(left, right);
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  console.log(ans, "lkgslsnf")
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
