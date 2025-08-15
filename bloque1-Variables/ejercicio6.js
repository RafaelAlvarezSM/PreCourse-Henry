for (var i = 0; i < 3; i++) { setTimeout(() => console.log("var i:", i), 0); }
for (let j = 0; j < 3; j++) { setTimeout(() => console.log("let j:", j), 0); }
// var i: 3
// var i: 3
// var i: 3
// let j: 0
// let j: 1
// let j: 2