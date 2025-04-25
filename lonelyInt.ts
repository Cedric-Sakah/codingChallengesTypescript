// Problem Statement: Find the Unique Element
// Title: Lonely Integer

// Description:
// Given an array of integers where every element appears exactly twice
//  except for one element that appears only once, find and return the unique element.

// Constraints:

// The array will always have an odd number of elements (since one element is unique).

// All duplicate elements will appear exactly twice.

// The unique element can be any integer (positive, negative, or zero).
function lonelyInt(a:number []): number {
a.sort((a, b) => a - b);
    for (let i = 0; i < a.length; i += 2) {
        if (a[i] !== a[i + 1]) {
            return a[i];
        }
  
}
return a[a.length - 1];
}