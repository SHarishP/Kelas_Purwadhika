//////////////
/* NUMBER 1 */
//////////////
let arr: number[] = [12, 5, 23, 18, 4, 35, 32];
function valWithSort (arr: number[]) {
    arr.sort((a, b) => a - b);
    const lowest: number  = arr[0];
    const highest: number = arr[arr.length - 1];
    const average: number = arr.reduce((acc, num) => acc + num, 0) / arr.length;
    /* 
        .reduce() berfungsi untuk melakukan looping pada array untuk mereduksi value pada array menjadi 1 nilai saja tanpa
        merubah array awal
    */

    return console.log(`lowest = ${lowest}, highest = ${highest}, average = ${average.toFixed(2)}`);
    /* 
    .toFixed() berfungsi untuk merubah number float menjadi decimal dengan mendefinisikan angka dibelakang koma 
    atau menjadi bilangan bulat DAN menjadi STRING
    */
   
};
valWithSort(arr);
function valWithoutSort (arr: number[]){
    const lowest: number = Math.min(...arr);
    const highest: number = Math.max(...arr);
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    };
    const average = sum / arr.length;
    
    return console.log(`lowest = ${lowest}, highest = ${highest}, average = ${average.toFixed(2)}`);
}
valWithoutSort(arr);

//////////////
/* NUMBER 2 */
//////////////
let arr2: string[] = ['apple', 'banana', 'cherry', 'date'];
function concatWords (arr: string[]) {
    let container: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        if(i === 0) {
            container.push(arr[i]);
        } else if (i > 0 && i < arr.length - 1) {
            container.push(` ${arr[i]}`);
        } else if (i === arr.length - 1) {
            container.push(` and ${arr[i]}`);
        }
    }
    return console.log(container.toString());
}
concatWords(arr2);

//////////////
/* NUMBER 3 */
//////////////
let numbers: number[] = [5, 3, 1, 7, 2, 6];
let secSmallest = (arr: number[]) => {
    arr.sort((a,b) => a - b);
    return arr[1];
}
console.log(secSmallest(numbers));

//////////////
/* NUMBER 4 */
//////////////

const calArrays = (arr1: number[], arr2: number[]) => {
    if(arr1.length === arr2.length) {
        let sumArr: number[] = [];
        for (let i = 0; i < arr1.length; i++){
            sumArr.push(arr1[i] + arr2[i]);
        }
        return sumArr;
    } else {
        return null;
    }
};
console.log(calArrays([1, 2, 3],[3, 2, 1]))

//////////////
/* NUMBER 5 */
//////////////

let addToArray = (arr: number[], newElement: number) => {
    if (!arr.includes(newElement)) {
        arr.push(newElement);
    } else {
        return null;
    }
    return arr;
}
console.log(addToArray([1,2,3,4], 4))
console.log(addToArray([1,2,3,4], 7))