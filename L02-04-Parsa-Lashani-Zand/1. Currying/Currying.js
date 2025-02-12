function curriedAdd(a) {
        return function(b) {
      return a + b;
    }
  }
const add5 = curriedAdd(5);
const curriedAdd = (a)=>(b)=>a+b;
const add = curriedAdd(5);
console.log(add(3));