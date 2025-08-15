const valores = [0, 1, -1, "", " ", "0", null, undefined, NaN, [], {}, [1], {a:1}];


console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean([1]));
console.log(Boolean({a:1}));

const falsy = [0,  "",  null, undefined, NaN,];
const truthy = [1, -1, " ", "0", [], {}, [1], {a:1}];