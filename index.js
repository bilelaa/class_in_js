function inc() {
  return this.count++;
}
function dec() {
  return this.count--;
}
function makeCounter(initial) {
  return {
    count: initial,
    inc: inc,
    dec: dec,
  };
}

let counter_one = makeCounter(0);
console.log(counter_one);
console.log(counter_one.count);
counter_one.inc();

console.log(counter_one.count);
counter_one.dec();
console.log(counter_one.count);

console.log("======================================================");
let counter_two = makeCounter(5000);


console.log(counter_two);
console.log(counter_two.count);
counter_two.inc();

console.log(counter_two.count);
counter_two.dec();
console.log(counter_two.count);



