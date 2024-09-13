//////////////
/* NUMBER 1 */
//////////////
let sumNumberOnly = (arr: any[]) => {
    let numberOnly: number[] = []
    let result: number;
    arr.forEach((val) => {
        // console.log(val);
        // console.log(typeof(val));
        if(typeof(val) === 'number'){
            numberOnly.push(val);
            // console.log(numberOnly)
            // const result2 = numberOnly.reduce((a,b) => a + b, 0);
            // console.log(result2)

        };
    })
    return result = numberOnly.reduce((a,b) => a+b, 0);
};
console.log(sumNumberOnly(["3", 1, "string", null, false, undefined, 2]));

//////////////
/* NUMBER 2 */
//////////////

let arrayMaker = (limit: number, ...val: number[]) => {
    let newArray: number[] = [];
    for (let i = 0; i < limit; i++) {
        newArray.push(val[i])
        // console.log(newArray);
    }
    return newArray;
}

console.log(arrayMaker(5, 5, 10, 24, 3, 6, 7, 8))

//////////////
/* NUMBER 3 */
//////////////

let combine2Array = (arr1: number[], arr2: number[]) => {
    arr2.forEach((val) => {
        arr1.push(val);
    })
    return arr1; 
}
console.log(combine2Array([1,2,3], [4,5,6]))

//////////////
/* NUMBER 4 */
//////////////

let findDuplicate = (arr: number[]) => {
    let result: number[] = [];
    let deposit: number[] = [];
    
    arr.forEach((val) => {
        if(!deposit.includes(val)){
            deposit.push(val);
        } else if (deposit.includes(val) && result.includes(val)) {
            false;
        } else {
            result.push(val);
        }
    })
    return result; 
}

console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]))

//////////////
/* NUMBER 5 */
//////////////

const findDiff = (arr1: number[], arr2: number[]) => {
    let result: number[] = [];
    arr1.forEach((val) => {
        if(!arr2.includes(val)) {
            result.push(val);
        } else {
            false;
        }
    })

    arr2.forEach((val) => {
        if(!arr1.includes(val)) {
            result.push(val);
        } else {
            false;
        }
    })
    return result;
}
console.log(findDiff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))