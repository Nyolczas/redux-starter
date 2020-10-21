function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;

console.log(add(3)(5));
console.log(add2(3)(5));
