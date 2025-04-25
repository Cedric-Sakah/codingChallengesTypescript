// Problem Statement:
// A pangram is a string that contains every letter of the English alphabet at least once.
// Given a string `s`, determine whether it is a pangram. 
// Return "pangram" if it is, otherwise return "not pangram".

// Algorithm:
// 1. Convert the input string `s` to lowercase to handle case insensitivity.
// 2. Use a regular expression to extract all alphabetic characters from the string.
// 3. Store the unique alphabetic characters in a `Set` to eliminate duplicates.
// 4. Check the size of the `Set`:
//    - If the size is 26 (indicating all 26 letters of the English alphabet are present), return "pangram".
//    - Otherwise, return "not pangram".

function pangrams(s: string): string {
    const lowercase = s.toLowerCase();
    const uniqueLetters = new Set<string>(lowercase.match(/[a-z]/g));
    return uniqueLetters.size === 26 ? 'pangram' : 'not pangram';
}
