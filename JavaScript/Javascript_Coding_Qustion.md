# JavaScript Interview Coding Questions & Answers

### Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [What are the possible ways to create objects in JavaScript](#what-are-the-possible-ways-to-create-objects-in-javascript) |
| 2 | [What is prototype chain](#what-is-a-prototype-chain) |
<!-- TOC_END -->

1. ### What are the possible ways to create objects in JavaScript

    There are many ways to create objects in javascript as mentioned below:
   To create an object, use the `Object.create()` method.

3. ### What is a prototype chain

    The prototype chain is a core concept
    <pre>
        const person = {
          name: 'Alice',
          greet() {
            console.log(`Hello, I'm ${this.name}`);
          }
        };

    </pre>
