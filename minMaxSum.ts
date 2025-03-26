// Problem Statement: Calculating Minimum and Maximum Sums

// Given a list of five positive integers, we are tasked
//  with finding two specific sums:

// The smallest possible sum of four numbers from the list

// The largest possible sum of four numbers from the list



function miniMaxSum(arr: number[]): void {
    let totalSum = 0;
    let minVal = arr[0];
    let maxVal = arr[0];

    for (const num of arr) {
        totalSum += num;
        if (num < minVal) minVal = num;
        if (num > maxVal) maxVal = num;
    }

    const minSum = totalSum - maxVal; // Exclude the largest element
    const maxSum = totalSum - minVal; // Exclude the smallest element

    console.log(`${minSum} ${maxSum}`);
}


