const asyncAdd = async (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Argumenty muszą mieć typ number!");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 100);
  });
};

let a1 = [];
for (let i = 0; i < 100; i++) {
  a1.push(i);
}

const addFunction = async (arguments) => {
  console.log(a1);
  console.log(typeof arguments[0]);
  let sum = arguments[0];
  const t0 = performance.now();

  for (let i = 1; i < arguments.length; i++) {
    sum = await asyncAdd(sum, arguments[i]);
  }
  const t1 = performance.now();
  console.log(sum);
  console.log(`Took ${(t1 - t0) / 1000} seconds.`);
};
addFunction(a1);
