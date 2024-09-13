//////////////
/* NUMEBR 1 */
//////////////
const findPrimitive = (arr: any) => {
    let result: any[] = []
    for (let val of arr) {
        if(typeof(val) === 'string' ||
            typeof(val) === 'number' || 
            typeof(val) === 'boolean' || 
            typeof(val) === 'undefined' || 
            val === null) {
                result.push(val);
            }
    }
    return result;
}
console.log(findPrimitive([1, [], undefined, {}, "string", {}, []]))

//////////////
/* NUMBER 2 */
//////////////

let addDuplicate = (arr: number[]) => {
    let duplicate: number[] = [];
    let deposit: number[] = [];
    
    arr.forEach((val) => {
        if(!deposit.includes(val)){
            deposit.push(val);
        } else if (deposit.includes(val) && duplicate.includes(val)) {
            false;
        } else {
            duplicate.push(val);
        }
    })
    let filterArray = arr.filter((number) => {
        if(duplicate.includes(number)) {
            return true
        } else {
            false
        }
    })
    console.log(filterArray)
    return filterArray.reduce((a, b) => a+b, 0);
}

console.log(addDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]))

/////////////
/* NOMOR 3 */
/////////////

let rockPaperScissors = (user: string) => {
    const things : string[] = ['rock', 'paper', 'scissors']
    let comNumber: number = Math.floor(Math.random() * 3) ;
    console.log(comNumber)
    let com: string = things[comNumber];
    let res: string = '';
    console.log(com);

    if(user === com) {
        res = 'draw'
    } else if (user === 'rock' && com == 'paper') {
        res = 'lose'
    } else if (user === 'rock' && com == 'scissors') {
        res = 'win';
    } else if (user === 'paper' && com == 'scissors') {
        res = 'lose';
    } else if (user === 'paper' && com == 'rock') {
        res = 'win';
    } else if (user === 'scissors' && com == 'rock') {
        res = 'lose';
    } else if (user === 'scissors' && com == 'paper') {
        res = 'win'
    } else {
        res = 'BISA MAINNYA GAK SIH?'
    }
    return res;
}

console.log(rockPaperScissors('rock'));

