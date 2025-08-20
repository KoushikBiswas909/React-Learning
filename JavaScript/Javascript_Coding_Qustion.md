# JavaScript Interview Coding Questions & Answers

### Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [Write a Program to reverse a string in JavaScript](#Write-a-Program-to-reverse-a-string-in-JavaScript) |
| 2 | [Write a Program to check whether a string is a palindrome string](#Write-a-Program-to-check-whether-a-string-is-a-palindrome-string) |
| 3 | [Find the largest number in an array in JavaScript](#Find-the-largest-number-in-an-array-in-JavaScript) |
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
