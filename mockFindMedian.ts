// Problem Statement:
// Given an array of integers, the task is to find the median of the array.
// The median is defined as:
// - The middle element of a sorted array if the number of elements is odd.
// - The average of the two middle elements if the number of elements is even.

// Algorithm:
// 1. Sort the array in ascending order.
// 2. Calculate the middle index of the array using `Math.floor(n / 2)`, where `n` is the length of the array.
// 3. Check if the number of elements in the array is odd or even:
//    - If odd, return the element at the middle index.
//    - If even, return the floor of the average of the two middle elements.
// 4. Return the result as the median.

function findMedian(arr: number[]): number {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);
    const n = arr.length;
    const mid = Math.floor(n / 2);

    // Step 2: Return the median
    if (n % 2 === 1) {
        // Odd number of elements - return the middle one
        return arr[mid];
    } else {
        // Even number of elements - return average of two middle values
        return Math.floor((arr[mid - 1] + arr[mid]) / 2); 
    }
}