# JavaScript Interview Coding Questions & Answers

### Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [Write a Program to reverse a string in JavaScript](#Write-a-Program-to-reverse-a-string-in-JavaScript) |
| 2 | [Write a Program to check whether a string is a palindrome string](#Write-a-Program-to-check-whether-a-string-is-a-palindrome-string) |
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

    The prototype chain is a core concept
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
