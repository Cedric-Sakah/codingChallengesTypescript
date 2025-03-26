// Problem Statement:
// Given an array of game scores (scores[]), determine:

// How many times the player breaks their highest score record

// How many times the player breaks their lowest score record



function breakingRecords(scores: number[]): number[] {
    if (scores.length === 0) return [0, 0];
    
    let minCount = 0;
    let maxCount = 0;
    let currentMin = scores[0];
    let currentMax = scores[0];
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > currentMax) {
            currentMax = scores[i];
            maxCount++;
        } else if (scores[i] < currentMin) {
            currentMin = scores[i];
            minCount++;
        }
    }
    
    return [maxCount, minCount];
}