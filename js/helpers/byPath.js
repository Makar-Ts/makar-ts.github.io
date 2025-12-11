export function getByPath(obj, path) {
  const p = path.split('.');

  let current = obj;
  for (let i of p) current = current[i];

  return current;
}

export function setByPath(obj, path, set) {
  const p = path.split('.');

  let current = obj;
  for (let i of p.slice(0, -1)) current = current[i];

  current[p.at(-1)] = set;
}