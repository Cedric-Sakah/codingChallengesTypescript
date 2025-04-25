// Problem Statement:
// You are given an array of integers where each integer represents the ID of a bird sighted. 
// The task is to determine the ID of the bird that is sighted the most frequently. 
// If two or more types of birds have the same frequency, return the smallest bird ID.

// Algorithm:
// 1. Sort the array to group identical bird IDs together and ensure that the smallest ID 
//    comes first in case of ties.
// 2. Initialize variables:
//    - `maxCount` to track the highest frequency of sightings.
//    - `currentCount` to count the frequency of the current bird ID.
//    - `mostFrequentId` to store the ID of the bird with the highest frequency.
// 3. Iterate through the sorted array:
//    - If the current bird ID is the same as the previous one, increment `currentCount`.
//    - Otherwise, reset `currentCount` to 1 for the new bird ID.
//    - If `currentCount` exceeds `maxCount`, update `maxCount` and set `mostFrequentId` 
//      to the current bird ID.
// 4. Return `mostFrequentId` as the result.

function migratoryBirds(arr: number[]): number {
    arr.sort((a, b) => a - b); // Sort to make lowest IDs come first

    let maxCount = 0;
    let currentCount = 1;
    let mostFrequentId = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            mostFrequentId = arr[i];
        }
    }

    return mostFrequentId;
}
