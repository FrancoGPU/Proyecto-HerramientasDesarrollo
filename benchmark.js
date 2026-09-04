const n = 10000000;

console.time('original');
for (let i = 0; i < n; i++) {
  const rating = (i % 6);
  const res = '★'.repeat(rating) + '☆'.repeat(5 - rating);
}
console.timeEnd('original');

const STAR_STRINGS = [
  '☆☆☆☆☆',
  '★☆☆☆☆',
  '★★☆☆☆',
  '★★★☆☆',
  '★★★★☆',
  '★★★★★'
];

console.time('optimized');
for (let i = 0; i < n; i++) {
  const rating = (i % 6);
  const res = STAR_STRINGS[rating];
}
console.timeEnd('optimized');
