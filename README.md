# Introduction

You find a strange mirror that always shows a hand that is moving. 
The hand appears to be alive, and after a lot of questions of "yes" and "no" answer, you know that the hand is trying to teach you a program that is written in HPL (Hand Programming Language).

This language works with a memory of an indefinite size of bytes, with all values initialized to 0.
This language haves 7 instructions:

👉 : moves the memory pointer to the next cell

👈 : moves the memory pointer to the previous cell

👆 : increment the memory cell at the current position 

👇 : decreases the memory cell at the current position. 

🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛

🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜

👊 : Display the current character represented by the ASCII code defined by the current position.

## Notes:
- As memory cells are bytes, from 0 to 255 value, if you decrease 0 you'll get  255, if you increment 255 you'll get 0.
- Loops of 🤜 and 🤛 can be nested. 

# Tests
The hand shows you two small programs and their outputs:

## This program display "Hello"
👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊

## This program (with nested loops) display "Hello World!"
👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊

# Challenge
The file "input.hand" is the code of the program


Good luck!


# Solution by RSV
1. mkdir hand-challenge
2. cd hand-challenge
3. npm init
4. npm install -save-dev jest (Other option is -D instead of -save-dev) --> Jest is used to test the project
5. Add script section in package.json: "scripts": { "test": "jest" }
6. Create mySolution.js, test.js, test1.hand, test2.hand and index*.js
6. npm run test --> Test
7. node "index.js" --> Program using test1.hand and test2.hand
