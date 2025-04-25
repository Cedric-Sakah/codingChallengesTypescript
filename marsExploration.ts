// Problem Statement:
// An astronaut receives a series of messages from Earth, each consisting of the string "SOS" repeated multiple times.
// However, due to signal interference, some characters in the message may be altered.
// The task is to determine the number of altered characters in the received message `s` compared to the expected "SOS" pattern.

// Algorithm:
// 1. Initialize a variable `count` to 0 to keep track of the number of altered characters.
// 2. Define the expected repeating message as "SOS".
// 3. Iterate through each character in the string `s`:
//    - Compare the character at the current index with the corresponding character in the "SOS" pattern.
//    - Use the modulo operator (`i % 3`) to cycle through the indices of "SOS" (0, 1, 2).
//    - If the characters do not match, increment the `count`.
// 4. Return the `count` as the result, representing the number of altered characters.

function marsExploration(s: string): number {
  let count = 0;
  const expectedMessage = "SOS";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== expectedMessage[i % 3]) {
      count++;
    }
  }

  return count;
}