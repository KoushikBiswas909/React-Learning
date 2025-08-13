# JavaScript `split()` Method – Complete Guide & Use Cases

The `split()` method in JavaScript is used to **divide a string into an array of substrings**, based on a specified separator.

**Syntax:**
```javascript
string.split(separator, limit)
```
- **separator** (optional) → Specifies the pattern (string or RegExp) to split by.
- **limit** (optional) → Limits the number of splits returned.

---

## 1. Basic Usage – Split by Space
```javascript
const str = "Hello World JavaScript";
const arr = str.split(" ");
console.log(arr); // ["Hello", "World", "JavaScript"]
```
**Explanation:** Splits the string into an array using a space as the separator.

---

## 2. Split by Comma
```javascript
const fruits = "apple,banana,orange";
console.log(fruits.split(",")); 
// ["apple", "banana", "orange"]
```
**Explanation:** Useful for CSV data or comma-separated values.

---

## 3. Split into Characters
```javascript
const word = "Hello";
console.log(word.split("")); 
// ["H", "e", "l", "l", "o"]
```
**Explanation:** Passing an empty string splits into individual characters.

---

## 4. Using a Limit
```javascript
const text = "one two three four";
console.log(text.split(" ", 2)); 
// ["one", "two"]
```
**Explanation:** The second parameter restricts the number of elements returned.

---

## 5. Remove Extra Spaces – With `filter`
```javascript
const messy = "JavaScript   split   example";
const arr = messy.split(" ").filter(Boolean);
console.log(arr); 
// ["JavaScript", "split", "example"]
```
**Explanation:** Filters out empty strings caused by multiple spaces.

---

## 6. Split by Multiple Characters
```javascript
const data = "apple|banana|orange";
console.log(data.split("|"));
// ["apple", "banana", "orange"]
```
**Explanation:** Separator can be any string, not just a single character.

---

## 7. Split by Regular Expression
```javascript
const str = "one,two;three four";
console.log(str.split(/[,; ]/)); 
// ["one", "two", "three", "four"]
```
**Explanation:** Regex allows splitting by multiple delimiters (comma, semicolon, space).

---

## 8. Remove Empty Items – Regex + Filter
```javascript
const messy = "apple,,banana,,orange";
console.log(messy.split(/,+/)); 
// ["apple", "banana", "orange"]
```
**Explanation:** `,+` means one or more commas – avoids empty elements.

---

## 9. Splitting Lines of Text
```javascript
const paragraph = "Line1
Line2
Line3";
console.log(paragraph.split("\n"));
// ["Line1", "Line2", "Line3"]
```
**Explanation:** `\n` matches newline characters, useful for file or textarea input.

---

## 10. Split URL Query Parameters
```javascript
const url = "https://example.com?name=John&age=25";
const params = url.split("?")[1].split("&");
console.log(params); 
// ["name=John", "age=25"]
```
**Explanation:** Chain `split()` to process URLs and query strings.

---

## 11. Split Only First Occurrence
```javascript
const str = "key:value:extra";
console.log(str.split(":", 2));
// ["key", "value"]
```
**Explanation:** Use limit to get only the first few parts.

---

## 12. Using `split()` for Word Count
```javascript
const sentence = "Count how many words here";
const count = sentence.split(/\s+/).length;
console.log(count); 
// 5
```
**Explanation:** `\s+` matches one or more spaces, making it word-count friendly.

---

## 13. Splitting and Mapping
```javascript
const numbers = "1,2,3,4";
const doubled = numbers.split(",").map(n => Number(n) * 2);
console.log(doubled); 
// [2, 4, 6, 8]
```
**Explanation:** Split into array, then transform using `map()`.

---

## Summary Table

| Feature                          | Example                                   | Output                                      |
|----------------------------------|-------------------------------------------|---------------------------------------------|
| Basic Split                      | `"a b".split(" ")`                        | `["a", "b"]`                               |
| By Comma                         | `"a,b,c".split(",")`                      | `["a", "b", "c"]`                          |
| Into Characters                  | `"Hi".split("")`                          | `["H", "i"]`                               |
| With Limit                       | `"a b c".split(" ", 2)`                   | `["a", "b"]`                               |
| Regex Multiple Delimiters        | `"a,b;c".split(/[,;]/)`                   | `["a", "b", "c"]`                          |
| Remove Empty Values              | `"a,,b".split(/,+/)`                      | `["a", "b"]`                               |
| Split New Lines                  | `"a\nb".split("\n")`                    | `["a", "b"]`                               |
| Chain Split (URL params)         | `"url?a=1&b=2".split("?")[1].split("&")`  | `["a=1", "b=2"]`                           |
| Word Count                       | `"a b c".split(/\s+/).length`            | `3`                                        |
| Transform After Split            | `"1,2".split(",").map(Number)`            | `[1, 2]`                                   |

---

**Tip:**  
If you need to split by a dynamic pattern (multiple delimiters, ignoring empty results), **Regex + filter** is your best friend.
