export default function (root) {
  root.querySelectorAll('[gap]').forEach(el => {
    el.style.gap = el.getAttribute('gap');
  });

  root.querySelectorAll('[grow]').forEach(el => {
    el.style.flexGrow = el.getAttribute('grow');
  });

  root.querySelectorAll('[shrink]').forEach(el => {
    el.style.flexShrink = el.getAttribute('shrink');
  });

  root.querySelectorAll('[margin]').forEach(el => {
    el.style.margin = el.getAttribute('margin');
  });

  root.querySelectorAll('[pad]').forEach(el => {
    el.style.padding = el.getAttribute('padding');
  });
}
