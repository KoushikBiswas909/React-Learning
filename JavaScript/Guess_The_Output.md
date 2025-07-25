# 🧠 Guess the output of given code snippet – JavaScript

Test your JavaScript knowledge! Click "Show Answer & Explanation" to reveal the solution.

---

<details>
<summary><strong>✅ Topic 1 – Type Conversion & Implicit Type Coercion</strong></summary>

### Question 1

What will be the output of the given code snippet ?

```javascript
console.log(1+1)
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 2
  
  Explanation: Both data type is number. So, addition of two numbers is number.
</details>

### Question 2

What will be the output of the given code snippet ?

```javascript
console.log( "1" + "1" );
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 11
  
  Explanation: Both data type is string. So, addition of two strings are concatenation of strings.
               Just like `console.log( "Koushik" + " Biswas" );` will print `Koushik Biswas`.
</details>

### Question 3

What will be the output of the given code snippet ?

```javascript
console.log( 1 + "1" )
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 11
  
  Explanation: One data is number, another one is string. As per code user wants to perform addition operation, 
  so javascript convert the number into a string, and performed concatination of strings.

  Javascript always tries to convert higher oder data types into lower order data type (String).
</details>

### Question 4

What will be the output of the given code snippet ?

```javascript
const obj = {
  name: 'Koushik',
  age: 24
}

console.log( obj + "5" )
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: [object Object]5

  Explanation: 
  1. obj is an object – JavaScript sees obj as { name: 'Koushik', age: 24 }.
  2. obj + "5" is using the + operator – When adding an object and a string, JavaScript tries to convert the object to a string.
  3. Object converts to "[object Object]" – This is the default string representation of a plain object.
  4. Then it adds "5" – So, it becomes "[object Object]" + "5".
  5. Final result: "[object Object]5"
</details>

### Question 5

What will be the output of the given code snippet ?

```javascript
const obj = {
  name: 'Koushik',
  age: 24
}

console.log( obj - "5" )
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: NaN
  
  Explanation:
  1. `obj` is an object – JavaScript sees obj as `{ name: 'Koushik', age: 24 }`.
  2. `obj - "5"` uses the `-` operator `–` This operator expects numbers, not strings or objects.
  3. JavaScript tries to convert `obj` to a `number` – But plain objects can’t be converted to a valid number directly.
  4. So, it becomes: `NaN - 5` – And `NaN` (Not a Number) minus anything is still NaN.
  5. Final result: `NaN`
</details>

### Question 6

What will be the output of the given code snippet ?

```javascript
console.log( [1] + [1] );
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 11
  
  Explanation:
  1. `[1]` is an array – JavaScript sees it as an array with one element.
  2. Using `+` with arrays – JavaScript tries to convert both arrays to strings.
  3. `[1].toString()` becomes `"1"` – Each array becomes the string `"1"`.
  4. `"1" + "1"` = `"11"` – The `+` operator joins the two strings.
  5. Final result: `"11"` (a string)
</details>

### Question 7

What will be the output of the given code snippet ?

```javascript
console.log( [1] - [1] );
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 0
  
  Explanation:
  1. `[1]` is an array – JavaScript sees it as an array with one element.
  2. Using `-` with arrays – The `-` operator expects numbers, not arrays.
  3. JavaScript converts arrays to numbers:
      `[1].valueOf().toString()` → "1" → becomes 1 (a number)
  4. So it becomes: `1 - 1`
  5. Final result: `0`
</details>

### Question 8

What will be the output of the given code snippet ?

```javascript
console.log( [ 1, 2 ] + [ 5, 6 ] )
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 1,25,6
  
  Explanation:
  1. `[1,2]` and `[5,6]` are arrays – Each has multiple numbers.
  2. Using `+` with arrays – JavaScript tries to convert both arrays to strings.
  3. `[1,2].toString()` → `"1,2"`
  4. `[5,6].toString()` → `"5,6"`
  5. `"1,2" + "5,6"` → `"1,25,6"` (just string concatenation)
  6. Final result: `"1,25,6"` (a string, not an array)

     For substraction `console.log( [ 1, 2 ] - [ 5, 6 ] )` will result `NaN` because both will convert to string.
</details>

### Question 9

What will be the output of the given code snippet ?

```javascript
console.log( [ 1, 2 ] - [ 5, 6 ] )
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: `NaN` 
  
  Explanation:
  1. Expression: `[1, 2] - [5, 6]`
  2. Subtraction operator (-): JavaScript tries to convert both arrays to primitives (usually strings or numbers) before performing subtraction.
  3. Array to primitive:
     `[1, 2].toString()` → `'1,2'`
     `[5, 6].toString()` → `'5,6'`
  4. Subtraction attempt: `'1,2' - '5,6'`
  5. String subtraction: JavaScript tries to convert both strings to numbers.
  6. `'1,2'` and `'5,6'` are not valid numbers → conversion fails.
  7. Result: Invalid numeric operation → `NaN` (Not a Number)
</details>

### Question 10

What will be the output of the given code snippet ?

```javascript
console.log( 1 + + "1" );
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 2
  
  Explanation: Whenever there is a `+` before a string, it tries to convert the string into number. 
  So, 1 + 1 = 2 will be the output. Applies space between anywhere will not effect in result.
</details>

### Question 11

What will be the output of the given code snippet ?

```javascript
console.log( "1" + + "2" );
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 12
  
  Explanation: 
  1. First `+ "2"` this will convert into number, because of `+` sign.
  2. Next, previous one `"1"` is a string, and tried to perforn `+` operation.
  3. So, `+ "2"` this will convert into number to string.
  4. So that, it will string concatenation.
</details>

### Question 12

What will be the output of the given code snippet ?

```javascript
console.log( -"1" + + "5" );
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 4
  
  Explanation: `-` will convert string into number, but in negative. Like `- "1"` -> `-1`.
  Also `+ "5"` will convert into -> `5`.
  Now, expression become `-1 + 5`, which results = `4`.
</details>

### Question 13

What will be the output of the given code snippet ?

```javascript
console.log(1 + - + + + - + - - "1" );
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: 2
  
  Explanation:
  1. Start with the innermost part:
     `"1"` is a string, but JavaScript will coerce it to a number with `+` or `-` unary operators.
  2. Operators applied to `"1"`:
     Let's simplify - + + + - + - - "1" from right to left:

        `"1"` → `string`
        
        `- "1"` → `-1`
        
        `- -1` → `1`
        
        `+ 1` → `1`
        
        `- 1` → `-1`
        
        `+ -1` → `-1`
        
        `+ -1` → `-1`
        
        `- -1` → `1`
        
        So this whole part simplifies to: `1`
   3. Now expression becomes `1+1` = `2`
</details>

### Question 14

What will be the output of the given code snippet ?

```javascript
if(0){
  console.log("React");
}
else{
  console.log("Java");
}
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: Java

  Explanation: 0, -0, +0, NaN all are falsy values.
</details>

### Question 15

What will be the output of the given code snippet ?

```javascript
if(3 - "A"){
  console.log("React");
}
else{
  console.log("Java");
}
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: Java
  
  Explanation: Before string a `-` operator is present, so it will try to convert the string into number, which is not posible.
  So, `3 - "A"` will be falsy value, so control will go into else block.
</details>

### Question 16

What will be the output of the given code snippet ?

```javascript
console.log(false == 0);
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: true
  
  Explanation:
  1. `==` is loose equality, so JavaScript does type coercion.
  2. false is a boolean, 0 is a number.
  3. JavaScript converts false to a number:
     false → 0
  4. Now it compares:
     0 == 0 → true

  Note: `Loose equality `(==)` allows different types to be coerced before comparison.`
</details>

### Question 17

What will be the output of the given code snippet ?

```javascript
console.log(false === 0)
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: false
  
  Explanation:
  1. `===` is strict equality so no type coercion.
  2. `false` is a boolean, `0` is a number.
  3. Different types → comparison fails immediately.
  Note: `Strict equality checks both value and type.`
</details>

### Question 18

What will be the output of the given code snippet ?

```javascript
console.log( false == NaN )
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: false
  
  Explanation: NaN is not equal to anything, `NaN == NaN` will result false.
</details>

### Question 19

What will be the output of the given code snippet ?

```javascript
const obj = {
  name: "Koushik"
}

const obj1 = {
  name: "Koushik"
}

const obj2 = obj

console.log(obj == obj1)
console.log(obj == obj2)
```
<details> <summary>✍ Show Answer & Explanation</summary>
  Answer: false
          true
  
  Explanation: 
  1. Firstly, `obj` and `obj1` are declaration wise same but present in different location in memory, so both is not equal.
  2. Secondly, in `obj2`, the reference of `obj` is passed. So, in `obj2`, actually pointing to a reference of `obj`.
     So, it is equal.
</details>


</details>

