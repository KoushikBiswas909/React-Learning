# JavaScript Interview Coding Questions & Answers

### Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [Write a Program to reverse a string in JavaScript](#Write-a-Program-to-reverse-a-string-in-JavaScript) |
| 2 | [What is prototype chain](#what-is-a-prototype-chain) |
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

3. ### What is a prototype chain

    The prototype chain is a core concept
    ```javascript
       var object = {
         name: "Sudheer",
         age: 34,
       };
    ```
