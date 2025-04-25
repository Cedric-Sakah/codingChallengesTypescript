// Problem Statement:
// You are given two arrays of integers, `A` and `B`, each of size `n`, and an integer `k`. 
// The task is to determine if there exists a permutation of the arrays such that for every index `i` (0 ≤ i < n), 
// the sum of `A[i]` and `B[i]` is greater than or equal to `k`. 
// If such a permutation exists, return "YES"; otherwise, return "NO".

// Algorithm:
// 1. Sort array `A` in ascending order to pair the smallest elements of `A`.
// 2. Sort array `B` in descending order to pair the largest elements of `B`.
// 3. Iterate through the arrays and check if the sum of `A[i]` and `B[i]` is at least `k` for every index `i`:
//    - If any pair does not satisfy the condition, return "NO" immediately.
// 4. If all pairs satisfy the condition, return "YES".

function twoArrays(k: number, A: number[], B: number[]): string {
    // Sort A in ascending order
    A.sort((a, b) => a - b);
    // Sort B in descending order
    B.sort((a, b) => b - a);
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }
    return "YES";
}