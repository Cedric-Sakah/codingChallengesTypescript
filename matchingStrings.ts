// Problem Statement:
// Given a list of input strings and a list of query strings,
//  for each query string, determine how many times it appears in the input strings. 
// Return an array of these counts in the same order as the queries.

function matchingStrings(strings: string[], queries: string[]): number[] {
    const result: number[] = [];
    for (const query of queries) {
        let count = 0;
        for (const str of strings) {
            if (str === query) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}