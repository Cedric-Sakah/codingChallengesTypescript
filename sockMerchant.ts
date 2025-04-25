// Problem Statement:
// A shopkeeper has a pile of socks, where each sock is represented by an integer indicating its color. 
// Given an array `ar` of integers representing the colors of the socks and an integer `n` representing 
// the total number of socks, determine how many pairs of socks with matching colors can be sold. 
// A pair consists of two socks of the same color.

// Algorithm:
// 1. Create a frequency map (`freq`) to count the occurrences of each sock color in the array.
// 2. Iterate through the array and update the frequency map for each sock color.
// 3. For each color in the frequency map:
//    - Divide the count of socks for that color by 2 and round down to get the number of pairs.
//    - Add the number of pairs to the total count of pairs (`totalPairs`).
// 4. Return the total number of pairs as the result.

function sockMerchant(n: number, ar: number[]): number {
    const freq: { [key: number]: number } = {};
    let totalPairs = 0;

    // Count how many times each color appears
    for (const sock of ar) {
        freq[sock] = (freq[sock] || 0) + 1;
    }

    // For each color, divide count by 2 and round down
    for (const color in freq) {
        const count = freq[color];
        const pairs = Math.floor(count / 2);
        totalPairs += pairs;
    }

    return totalPairs;
}
