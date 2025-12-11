import { animate, utils } from './animejs/modules/index.js'

const LOADER_BARS_AMOUNT = 4;

const loaderContainer = utils.$('.loader .loader-container')[0];

let animations = [];
let stopAnimation = () => {
  animations.forEach(v => v.pause());
};
let startAnimation = () => {
  animations.forEach(v => v.play());
};

for (let i=0; i < LOADER_BARS_AMOUNT; i++) {
  const bar = document.createElement('div');
  bar.class = "bar";

  loaderContainer.appendChild(bar);

  animations.push(animate(bar, {
    scaleY: [
      { from: 0.1, to: 6, ease: 'out(2)', duration: 1000 },
      { to: 0.1, ease: 'in(4)', duration: 150 }
    ],
    delay: i*100,
    loop: true,
    loopDelay: LOADER_BARS_AMOUNT*100,
  }))
}


const loader = utils.$('.loader')[0];

export function showLoader() {
  loader.style = '';
  startAnimation();
}

export function hideLoader() {
  animate(loader, {
    opacity: 0,
    ease: 'out(2)',
    onComplete: () => {
      loader.style.display = 'none';
      stopAnimation();
    }
  })
}