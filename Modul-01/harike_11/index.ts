/* BRUTE FORCE */

function checkDuplicateBruteForce (arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true;
        };
    }
    return false;
}

console.log(checkDuplicateBruteForce([1, 4, 5, 6, 7, 4]));

// Optimize with Extra Memory
// Time Complexity O(N)
// S[ace complexity O(N)

function checkDuplicateExtraMemory (arr: number[]) {
    // const unique = new Set () ;
    // for (let i = 0; i < arr.length; i++) {
    //     if (unique.has(arr[i])) return true;
    //     else unique.add(arr[i]);
    // }

    const unique = new Set(arr);
    console.log(unique.size);
    console.log(arr.length);
    if (unique.size === arr.length) return false;
    else return true;
};

console.log(checkDuplicateExtraMemory([1, 4, 2, 5, 3, 6, 6]));