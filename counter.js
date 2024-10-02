// Example for closue function

const createCounter = (n) => {
  return () => {
    return n++;
  }
}

const counter = createCounter(10);
counter(); //Will return 10
counter(); //Will return 11
counter(); //Will return 12
counter(); //Will return 13

----------------------------------

const createCounter = (n) => {
  let count = n;
  return () => {
    return count++;
  }
}

const counter = createCounter(10);
counter(); //Will return 10
counter(); //Will return 11
counter(); //Will return 12
counter(); //Will return 13
  
-----------------------------------
  class Counter {
  constructor(n) {
    this.count = n++;
  }
  increment() {
    return this.count++;
  }
}
let counter = new Counter(10);
counter.increment(); //Will return 10
counter.increment(); //Will return 11
counter.increment(); //Will return 12
counter.increment(); //Will return 13
----------------------------------
