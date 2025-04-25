// Problem Statement:
// Given an array of integers, perform a counting sort. Counting sort is a sorting technique 
// based on keys between a specific range. The output of the function should be a frequency 
// array where each index represents a number from the input array, and the value at that 
// index represents the count of occurrences of that number in the input array.

// Algorithm:
// 1. Create a frequency array of size 100 (assuming the input numbers are in the range 0-99).
// 2. Initialize all elements of the frequency array to 0.
// 3. Iterate through the input array and for each number, increment its corresponding index 
//    in the frequency array.
// 4. Return the frequency array as the result.

function countingSort(arr: number[]): number[] {
    const frequencyArray: number[] = new Array(100).fill(0);
    for (const num of arr) {
        frequencyArray[num]++;
    }
    return frequencyArray;
}