const add = (x, y) => {
  return x + y;
}

const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('timer out')
    resolve()
  }, 1000);
})

console.log(promise);

// eslint-disable-next-line
console.log(add(3, 4));
