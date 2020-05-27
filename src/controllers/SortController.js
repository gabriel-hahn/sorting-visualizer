import bubbleSort from '../algorithms/bubbleSort';

class SortController {
  constructor() {
    this.itemsContainerEl = document.querySelector('[data-js="list-container"]');
    this.arraySizeEl = document.querySelector('[data-js="sort-options-size"]');
    this.sortSpeedEl = document.querySelector('[data-js="sort-options-speed"]');

    this.arraySize = 50;
    this.speed = 250;

    this.initEvents();
  }

  initEvents() {
    this.arraySizeEl.addEventListener('change', (event) => {
      console.log('Size changed: ', event.target.value);
    });

    this.sortSpeedEl.addEventListener('change', (event) => {
      console.log('Speed changed: ', event.target.value);
    });

    this.initItemsList();
  }

  initItemsList() {
    for (let i = 1; i <= this.arraySize; i++) {
      const divEl = document.createElement('div');
      const height = Math.random() * 100;

      divEl.style.height = `${height}%`;
      divEl.dataset.index = i;

      this.itemsContainerEl.appendChild(divEl);
    }
  }

  handleSortVisualization() {

  }

  update() {

  }

  finished() {

  }
}

export default new SortController();
