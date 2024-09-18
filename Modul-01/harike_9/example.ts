// Split String to Array

const _string = 'hello world';
console.log(_string.split(' '));

let arrNum = [
    {x: 5, y: 6},
    {x: 10, y:12},
];
let sum = 0;

arrNum.forEach((obj) => {
    sum += obj.x + obj.y;
});
console.log(sum);

arrNum.map((obj => {
    sum += obj.x + obj.y;
}))
console.log(sum);


