/////////////
/* NOMOR 1 */
/////////////

function checkEqual (obj1: any, obj2: any) {
    // Menyimpan keys object diambil dari parameter
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    console.log(keys1);
    console.log(keys2);

    // Mengecek panjang pada 2 Object
    if (keys1.length !== keys2.length) return false

    // Mengecek isi dari kedua object
    /* 
        https://www.w3schools.com/js/js_object_display.asp
        Some solutions to display JavaScript objects are:
            Displaying the Object Properties by name
            Displaying the Object Properties in a Loop
            Displaying the Object using Object.values()
            Displaying the Object using JSON.stringify()
    */
    for (let x in obj1) {
        console.log(x)
        console.log(obj1[x], obj2[x])
        if (obj1[x] !== obj2[x]) {
            return false;
        }
    }
    return true

}

console.log(checkEqual({a: 1}, {a: 2}));
console.log(checkEqual({a: 1}, {a: 'Hallo'}));
console.log(checkEqual({a: 1}, {a: 1}));

/////////////
/* NOMOR 2 */
/////////////

// Create a function to get the intersection of two object
function intersection2Obj (obj1: any, obj2: any) {
        console.log(Object.keys(obj2))
        const intersection: any = {}
        for (let key in obj1) {
            console.log(key)
            // .hasOwnProperty mengemablikan nilai boolean apakah suatu 'object' memiliki suatu 'key'tertentu
            console.log(obj1.hasOwnProperty(key))
            console.log(obj1[key])
            console.log(obj2[key])
            if (obj1.hasOwnProperty(key)) {
                if (obj1[key] === obj2[key]) {
                    // console.log(obj1[key], obj2[key]);
                    intersection[key] = obj1[key];
                    console.log(intersection);
                }
            }
        }
        return intersection;
}

console.log(intersection2Obj({a: 1, b: 2}, {a: 1, c: 3}))

/* 
        NOTES
        const matches = (obj, source) =>
        Object.keys(source).every(
            key => obj.hasOwnProperty(key) && obj[key] === source[key]
        )
        ;

        console.log(matches(
        { age: 25, hair: 'long', beard: true },
        { hair: 'long', beard: true }
        ))

        console.log(matches(
        { hair: 'long', beard: true },
        { age: 25, hair: 'long', beard: true }
        )); // false
*/

//////////////
/* NOMOR 3  */
//////////////

// Buat interface untuk memberi tipe data pada object
interface IStudent {
    name: string,
    email: string
};

// Buat function untuk menggabungkan 2 array sekaligus menghilangkan duplicate
function mergeAndFilter (arr1: IStudent[], arr2: IStudent[] ) {
    // Buat Variabel untuk menyimpan merged array
    const mergedArr = [...arr1, ...arr2];
    // console.log(mergedArr);

    // Lakukan filter untuk mencari object yang tidak terduplicate
    const filtered = mergedArr.filter((val, index, arr) => 
        index === arr.findIndex((s) => s.name === val.name && s.email === val.email)
    );
    // console.log(filtered)
    return filtered;

}

let arr1: IStudent[] = [
    { name: 'Student 1', email : 'student1@mail.com'  }, 
    { name: 'Student 2', email : 'student2@mail.com'  }
]
let arr2: IStudent[] = [
    { name: 'Student 1', email : 'student1@mail.com'  }, 
    { name: 'Student 3', email : 'student3@mail.com'  }
]

// Buat variabel untuk menyimpan array yang sudah dimasukkan ke function mergeAndFilter
const result = mergeAndFilter(arr1, arr2);
console.log(result);

/////////////
/* NOMOR 4 */
/////////////

// Buat interface IObject
interface IObject {
    [key: string]: any
}

function switchKeyValue (input: IObject[]) {
    const mapped = input.map((obj) => {
        let objValues:IObject = {};
        for (let key in obj) {
            objValues[obj[key]] = key;
            // console.log(objValues)
        }
        return objValues;
    })
    return mapped;
};

const inpArray: IObject[] = [{name: 'david', age: 20}];
const resultSwitch = switchKeyValue(inpArray);
console.log(resultSwitch);

/////////////
/* NOMOR 5 */
/////////////

let inputNum: number = 5;
let factorial: number = 1;
let arrResult: number[] = []
for (let i = inputNum; i > 0 ; i--) {
    factorial *= i; 
    arrResult.push(factorial);
}
console.log(arrResult)
console.log(factorial)

/////////////////////////////
/* NOMOR 6 - SHOOTING GAME */
/////////////////////////////

// Buat interface
interface IPlayer {
    name: string,
    health: number,
    power: number,
    hit: (power: number) => void;
    useItem: (item: {health: number; power: number}) => void
    showStatus: () => any;
}

// Buat class Players
class Players implements IPlayer {
    name;
    health = 1000;
    power= 0;
    constructor (paramName: string) {
        this.name = paramName;
    };

    hit (power: number) {
        this.health -= power;
    };

    useItem (item: {health: number, power: number}) {
        this.health += item.health;
        this.power += item.power;
    };

    showStatus () {
        return (`Player ${this.name}, health: ${this.health}, power: ${this.power}`);
    };
};

class ShootingGame {
    players: IPlayer[] = [];
    constructor (player1: IPlayer, player2: IPlayer) {
        this.players.push(player1, player2);
    };

    getRandomItem() {
        return {
            health : Math.random() > 0.5 ? 0 : 10,
            power: Math.random() > 0.5 ? 0 : 10
        };
    };

    start () {
        let playerIndex = 0;
        while(this.players[0].health > 0 && this.players[1].health > 0) {
            const player1 = this.players[playerIndex];
            const player2 = this.players[(playerIndex + 1) % 2];

            player1.showStatus();
            player2.showStatus();

            player1.useItem(this.getRandomItem())
            player2.useItem(this.getRandomItem())

            player2.hit(player1.power);

            player1.showStatus();
            player2.showStatus();

            playerIndex = (playerIndex +1) % 2;
        }
        
        const winner = this.players[0].health > this.players[1].health ? this.players[0].name : this.players[1].name;
        this.players = [];
        return(`The winner is: ${winner}!`);
    }

}

const player1 = new Players('siA')
const player2 = new Players('siB')

const game = new ShootingGame(player1, player2);
console.log(game.start())
