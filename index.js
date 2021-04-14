const arr1 = [1, 2, 3, 4, 5]
const arr2 = [4, 6, 8, 2, 1]
const arr3 = [4, 4]
const arr4 = [0, 12, 8]
const arr5 = [1, 5, 4]

const target = 8

const twoSums = (arr, target) => {
  for(let i=0; i<arr.length-1; i++){
    for(let j=1; j<arr.length; j++){
      if(arr[i] + arr[j] === target) return [i,j]
    }
  }
  return false
}

// PRINT EXPECTED RESULT, MY LOGIC

console.log([2, 4], twoSums(arr1, target))
console.log([1, 3], twoSums(arr2, target))
console.log([0, 1], twoSums(arr3, target))
console.log([0, 2], twoSums(arr4, target))
console.log(false, twoSums(arr5, target))
