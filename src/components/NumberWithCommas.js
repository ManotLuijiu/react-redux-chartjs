export default function numberWithCommas(x) {
  const num = Object.values(x)[0];
  // return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return num.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}
