const get = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const set = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { get, set };