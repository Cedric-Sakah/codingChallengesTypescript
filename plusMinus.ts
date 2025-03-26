// Problem Statement: Calculating Number Ratios

// Given an array of integers, we need to
//  calculate and display the proportions
//  of positive numbers, negative numbers, 
// and zeros relative to the total number of elements in the 
// array. Each proportion should be printed as a decimal
//  with exactly six digits after the decimal point.



function plusMinus(arr: number[]): void {
        let positive: number = 0;
        let negative: number = 0;
        let zero: number = 0;
        const total: number = arr.length;
    
        for (const num of arr) {
            if (num > 0) {
                positive++;
            } else if (num < 0) {
                negative++;
            } else {
                zero++;
            }
        }