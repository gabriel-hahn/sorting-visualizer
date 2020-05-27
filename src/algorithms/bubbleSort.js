/**
 * Sort Definition:
 * Iterate through the list of items, comparing two elements and ordering it until there are no
 * elements changed in the last iteration.
 */
const bubbleSort = (arr, speed = 200, animationCb, sortedCb) => {
  if (!arr || arr.length === 0) {
    return;
  }

  let round = 1;
  let sorted = false;
  const itemsArr = [...arr];
  const arrSize = itemsArr.length;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arrSize; i++) {
      const current = itemsArr[i];
      const nextItem = itemsArr[i + 1];

      round += 1;

      setTimeout((currentArr) => {
        animationCb(i, currentArr);
      }, speed * round, [...itemsArr]);

      if (!nextItem && nextItem !== 0) {
        break;
      }

      if (current > nextItem) {
        const temp = current;

        itemsArr[i] = nextItem;
        itemsArr[i + 1] = temp;

        sorted = false;
      }
    }
  }

  setTimeout((currentArr) => {
    sortedCb(currentArr);
  }, speed * round, itemsArr);
};

export default bubbleSort;
