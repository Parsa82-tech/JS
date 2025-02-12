const compose = (f, g) => (x) => f(g(x));
const double = (x) => x * 2;
const square = (x) => x * x;
const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(8)); // Example
console.log(doubleThenSquare(6)); // Example