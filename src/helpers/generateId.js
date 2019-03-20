export default () => {
  let min = Math.ceil(1);
  let max = Math.floor(99000000);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
