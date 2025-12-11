document.querySelectorAll('[gap]').forEach(el => {
  el.style.gap = el.getAttribute('gap');
});

document.querySelectorAll('[grow]').forEach(el => {
  el.style.flexGrow = el.getAttribute('grow');
});

document.querySelectorAll('[shrink]').forEach(el => {
  el.style.flexShrink = el.getAttribute('shrink');
});