# JavaScript Interview Coding Questions & Answers

### Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [Write a Program to reverse a string in JavaScript](#Write-a-Program-to-reverse-a-string-in-JavaScript) |
| 2 | [Write a Program to check whether a string is a palindrome string](#Write-a-Program-to-check-whether-a-string-is-a-palindrome-string) |
| 3 | [Find the largest number in an array in JavaScript](#Find-the-largest-number-in-an-array-in-JavaScript) |
| 4 | [How Remove the first element from an array in JavaScript?](#How-Remove-the-first-element-from-an-array-in-JavaScript)
| 5 | [Write a program of calculator with feature + - * / with the help of callback functions](#Write-a-program-of-calculator-with-feature-+---*-/-with-the-help-of-callback-functions)
| 6 | [Write a program to add new property to a existing object](#Write-a-program-to-add-new-property-to-a-existing-object)
| 7 | [Write a Program to delete a property from an object](#Write-a-Program-to-delete-a-property-from-an-object)
| 8 | [Write a program to add all the array elements and returns final number](#Write-a-program-to-add-all-the-array-elements-and-returns-final-number)
<!-- TOC_END -->

1. ### Write a Program to reverse a string in JavaScript

   ### Method 1 [ Using Built-in Functions (split, reverse, join) ]
   ```javascript
   function reverseString(str) {
       return str.split('').reverse().join('');
   }
   console.log(reverseString("Kou sh ik"));
   ```
   Output: `ki hs uoK`

   ### Method 2 [ Using a `for` Loop (Iterative Method) ]
   ```javascript
   function reverseString(str) {
       let reversed = '';
       for (let i = str.length - 1; i >= 0; i--) {
           reversed += str[i];
       }
       return reversed;
   }
   ```
   Output: `ki hs uoK`

   ### Method 3 [ Using a for...of Loop ]
   ```javascript
   function reverseString(str) {
       let reversed = '';
       for (const char of str) {
           reversed = char + reversed;
       }
       return reversed;
   }
   console.log(reverseString("Kou sh ik"));
   ```
   Output: `ki hs uoK`

2. ### Write a Program to check whether a string is a palindrome string

    A palindrome is a word that reads the same word from forward and backward. This ignores spaces and capitalization.
    ```javascript
       function isPalindrome (str){
           const revStr = str.split("").reverse().join("");
           if(revStr == str){
             return true;
           }
           else{
             return false;
           }
         }
         
       console.log(isPalindrome("KOK"))
    ```

3. ### Find the largest number in an array in JavaScript.

   ### Method 1 [ Using for Loop ]
   
   ```javascript
   function largetElement (arr) {
        var larEle = 0;
        for(a of arr){
          if(a > larEle){
            larEle = a;
          }
        }
        return larEle;
   }
   console.log(largetElement([8,0,5,6,14,-1,10,11]));
   ```
   ### Method 2 [ Using Math.max() built in function ]

   This is a JavaScript built-in method from the Math object.
   It returns the largest of the zero or more numbers passed to it.
   
   ...arr is called the spread operator.
   It spreads out the elements of the array into individual values.
   This is necessary because Math.max() doesn't accept an array directly — it needs individual numbers.
   
   ```javascript
   function findLargest(arr) {
       // Math.max() is used to find the largest number
       return Math.max(...arr); 
   }

   console.log(findLargest([99, 5, 3, 100, 1]));
   ```

4. ### How Remove the first element from an array in JavaScript?

   ### Method 1 [ Using the `shift()` function. Here original array manipulated and removed item also returned by shift() ]
   
   ```javascript
   function removeFirstElement(arr){
     var removedVal = arr.shift();
     return arr;
   }

   console.log(removeFirstElement([1,2,3,4]))
   ```

   ### Method 2 [ Using the `slice()` function. Here one new copy array created, original array remains same ]

   ```javascript
   let original_array = [8,7,5,12,45,1,63,25];
   let final_array = original_array.slice(1);
   let final_array_three_removed = original_array.slice(3);
   console.log(final_array);
   console.log(final_array_three_removed)
   ```
   Output: `
   [ 7,  5, 12, 45, 1, 63, 25 ]
   [ 12, 45, 1, 63, 25 ] `


5. ### Write a program of calculator with feature + - * / with the help of callback functions
   ```javascript   
   function add (a,b){
     return a+b;
   }
   function substract (a,b){
     return a-b;
   }
   function multiply (a,b){
     return a*b;
   }
   function devide (a,b){
     return a/b;
   }
   
   function calculator (a, b, callback) {
     const result = callback(a,b);
     console.log(`The result is ${result} and operation performed ${callback.name}`);
   }
   
   calculator(1,2, add);
   calculator(5,2, substract);
   calculator(6,6, multiply);
   calculator(10,5, devide);
   ```
   Output:
   `The result is 3 and operation performed add`
   `The result is 3 and operation performed substract`
   `The result is 36 and operation performed multiply`
   `The result is 2 and operation performed devide`

6. ### Write a program to add new property to a existing object
   ```javascript
   const person_obj = {
     name : "Koushik"
   }
   console.log(person_obj);
   person_obj.age = 25;
   console.log(person_obj);
   ```
   Output: `
   { name: 'Koushik' }
   { name: 'Koushik', age: 25 }
   `
7. ### Write a Program to delete a property from an object
   ```javascript
   const obj = { name: 'Koushik', age: 21 };
   delete obj.age;
   console.log(obj);
   ```
   Output:
   `{ name: 'Koushik' }`

8. ### Write a program to add all the array elements and returns final number
