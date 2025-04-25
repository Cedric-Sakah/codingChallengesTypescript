// Description:
// At a certain university, professors need to adjust student grades
//  according to specific rounding rules. The grading policy states that:

// Any grade below 38 is a failing grade and should not be rounded.

// For grades 38 or above, if the difference between 
// the grade and the next multiple of 5 is less than 3, round the grade up to that multiple. 
// Otherwise, leave the grade unchanged.

// Task:
// Implement a function gradingStudents that automates this 
// rounding process for an array of student grades.


function gradingStudents(grades: number[]): number[] {
 const result: number[] = [];
 for(let i = 0; i < grades.length; i++){
     let grade = grades[i];
     if(grade >= 38){
         let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
         if(nextMultipleOfFive - grade < 3){
             result.push(nextMultipleOfFive);
         } else {
             result.push(grade);
         }
     } else {
         result.push(grade);
     }
 }
 return result;
}