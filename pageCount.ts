// Problem Statement:
// A book has `n` pages, numbered from 1 to `n`. A reader wants to turn to page `p`.
// The reader can start turning pages either from the front of the book or from the back.
// The task is to determine the minimum number of pages the reader needs to turn to reach page `p`.

// Algorithm:
// 1. Calculate the number of pages to turn from the front:
//    - Divide the target page `p` by 2 and take the floor of the result (`fromFront`).
// 2. Calculate the number of pages to turn from the back:
//    - Divide the total number of pages `n` by 2 to get the total number of page turns possible.
//    - Subtract the number of turns required to reach page `p` from the front (`fromFront`) from the total turns (`fromBack`).
// 3. Return the smaller of the two values (`fromFront` or `fromBack`) as the minimum number of page turns.

function pageCount(n: number, p: number): number {
    const fromFront = Math.floor(p / 2);
    const fromBack = Math.floor(n / 2) - Math.floor(p / 2);
    return Math.min(fromFront, fromBack);
}