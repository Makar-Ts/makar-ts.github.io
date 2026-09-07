import { getByPath, setByPath } from "./helpers/byPath.js";
import css from './helpers/css.js';

/**
 * 
 * @param {HTMLElement} root 
 * @param {object} data 
 */
export default function (root, data) {
  // for of loops
  let elem = root.querySelector('[repeat]:not([resolved])');
  while (elem) {
    let [ n, id ] = elem.getAttribute('repeat').split(';');
    id = id ?? 'index';
    const base = elem.innerHTML;

    if (Number.isNaN(Number(n)))
      n = (getByPath(data, n) ?? []).length;
    else
      n = Number(n);

    const out = [];
    for (let i=0; i<n; i++) out.push(base.replaceAll(new RegExp(`\\{${id}\\}`, 'g'), i));

    elem.innerHTML = out.join('');
    elem.setAttribute('resolved', '');

    elem = root.querySelector('[repeat]:not([resolved])');
  }


  // if
  for (let elem of root.querySelectorAll('[if]')) {
    const attr = elem.getAttribute('if');

    const negated = attr.startsWith('!');
    const d = getByPath(data, negated ? attr.slice(1) : attr);

    if (!d != negated) {
      elem.remove();
    }
  }


  // value mappings
  for (let elem of root.querySelectorAll('[data-value]')) {
    const setters = elem.getAttribute('data-value').split(';');

    for (let control of setters) {
      const [get, set] = control.split('->').map(v => v.trim());

      if (set.startsWith('[attr]')) {
        elem.setAttribute(set.replace('[attr]', '').trim(), getByPath(data, get));
      } else {
        setByPath(elem, set, getByPath(data, get));
      }
    }
  }

  css(root);
}