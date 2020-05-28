/* eslint-disable no-return-assign */
/**
 * Sort Definition: Quick Sort algorithm follows Divide and Conquer approach.
 * It divides elements into smaller parts based on some condition and performing
 * the sort operations on those divided smaller parts.
 *
 */
const partitionHandler = (arr, right, left) => {
  const pivot = arr[Math.floor((right + left) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) {
      left += 1;
    }

    while (arr[right] > pivot) {
      right -= 1;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left += 1;
      right -= 1;
    }
  }

  return left;
};

const quickSortHandler = (arr, left, right) => {
  const indexPartLeft = partitionHandler(arr, right, left);

  if (left < indexPartLeft - 1) {
    quickSortHandler(arr, left, indexPartLeft - 1);
  }

  if (indexPartLeft < right) {
    quickSortHandler(arr, indexPartLeft, right);
  }

  return arr;
};

const quickSort = (arr, speed = 200, animationCb, sortedCb) => {
  if (!arr || arr.length === 0) {
    return;
  }

  const right = arr.length - 1;
  const left = 0;

  quickSortHandler(arr, left, right);

  console.log('Sorted');
};

export default quickSort;
