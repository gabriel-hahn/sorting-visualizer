/**
 * Sort Definition: This sort basically divides the array and sort small
 * pieces of it, merging the results.
 *
 */
const merge = (arr1 = [], arr2 = []) => {
  const sorted = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  return [...sorted, ...arr1, ...arr2];
};

const mergeSort = (arr, speed = 200, animationCb, sortedCb) => {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
