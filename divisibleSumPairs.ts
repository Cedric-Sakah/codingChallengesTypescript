// Problem Statement: Counting Divisible Sum Pairs

// We are given a sequence of whole numbers and 
// a fixed divisor. The task is to determine how many 
// unique ordered pairs of numbers in this sequence satisfy a specific divisibility condition.

// Condition

// Ordered Pairs: We consider pairs where the first 
// number appears earlier in the sequence than the second.

// Divisible Sum: The sum of the two numbers in the pair
//  must be exactly divisible by the given divisor.



function divisibleSumPairs(n: number, ar: number[], k: number): number {
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    
    return count;
}


