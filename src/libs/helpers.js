export const joinArrayOfObject = (items, key, separator = ', ') => {
  return items.map((item) => {
    return item[key];
  }).join(separator);
};
