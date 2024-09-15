/////////////
/* NOMOR 1 */
/////////////

interface IStudent {
    name: string;
    email: string;
    age: Date;
    score: number;
}

let students : IStudent[] = [
    {name: 'Alex',
     email: 'alex123@gmail.com',
     age: new Date('01-01-1992'),
     score: 60
    },
    {name: 'Boy',
     email: 'boy123@gmail.com',
     age: new Date('02-02-1998'),
     score: 79
    },
    {name: 'Chad',
     email: 'chad123@gmail.com',
     age: new Date('03-03-2000'),
     score: 92
    },
];

interface IResult {
    scores: {
        highest: number;
        lowest: number;
        average: number;
    },
    ages: {
        highest: number;
        lowest: number;
        average: number;
    }
}

function realAge (date: Date) {
    const today: Date = new Date();
    console.log(today);
    console.log(today.getFullYear());
    console.log(date.getFullYear());
    const diff: number = today.getFullYear() - date.getFullYear();
    console.log(diff);
    return diff;
    
    
}

const testAge = new Date('08-05-1998');
realAge(testAge);

// function calculateArray (arr: IStudent[]): IResult {
//     let result: IResult = {
//         score: {
//             highest = 0,
//             lowest = 0,
//             average = 0
//         },
//         age: {
//             highest = 0,
//             lowest = 0,
//             average = 0
//         }
//     }
// }

function calculateArray(arr: IStudent[]): IResult {
    const result: IResult = {
      scores: {
        highest: 0,
        lowest: 0,
        average: 0,
      },
      ages: {
        highest: 0,
        lowest: 0,
        average: 0,
      },
    };

    const containerScores: number[] = [];
    const containerAges: number[] = [];
    students.forEach((val) => {
        containerScores.push(val.score);
        containerAges.push(realAge(val.age));
        console.log(containerAges);
        console.log(containerScores);
        
    });
    result.scores.highest = Math.max(...containerScores);
    result.scores.lowest = Math.min(...containerScores);
    result.scores.average = containerScores.reduce((a: number, b: number) => a+b, 0) / containerScores.length;
    console.log(result.scores);

    result.ages.highest = Math.max(...containerAges);
    result.ages.lowest = Math.min(...containerAges);
    result.ages.average = Math.round(containerAges.reduce((a: number, b: number) => a+b, 0) / containerAges.length);
    console.log(result.ages);
    

    return result;
};

console.log(calculateArray(students));
