// Problem Statement:
// A hiker is walking along a trail represented by a string `path` of length `steps`. 
// Each character in the string is either 'U' (uphill) or 'D' (downhill). 
// A valley is defined as a sequence of consecutive steps below sea level (altitude 0), 
// starting with a step down from sea level and ending with a step up to sea level.
// The task is to determine the number of valleys the hiker traversed during the hike.

// Algorithm:
// 1. Initialize `altitude` to 0 to represent the hiker's starting altitude at sea level.
// 2. Initialize `valleys` to 0 to count the number of valleys traversed.
// 3. Iterate through each step in the `path` string:
//    - If the step is 'U' (uphill), increment `altitude`.
//      - If `altitude` becomes 0 after an uphill step, increment the `valleys` count 
//        because the hiker has exited a valley.
//    - If the step is 'D' (downhill), decrement `altitude`.
// 4. Return the `valleys` count as the result.

function countingValleys(steps: number, path: string): number {
    let altitude = 0;
    let valleys = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            altitude++;
            if (altitude === 0) {
                valleys++;
            }
        } else if (path[i] === 'D') {
            altitude--;
        }
    }
    return valleys;
}