const fs = require('fs');

function translate(string) {
    
    const MIN_CELL = 0 // Min value
    const MAX_CELL = 255 // Max value
        
    const memory = [0] // Memory in array
    let pointer = 0 // Array pointer
    let index = 0
    let output = ''
    
    // Convert string to array of instructions
    const arrayOfInstructions = Array.from(string)

    // if value > 255, then 0, if value < 0, then 255. Otherwise, return value
    const clamp = value => {
        memory[pointer] = value < MIN_CELL ? MAX_CELL : value > MAX_CELL ? MIN_CELL : value        
    }

    // Find the next fist from the current index in the array of instructions
    const getNextFistIndex = (index, instructions) => {
        let count = 1
        for (let i = index + 1; i < instructions.length; i++) {
            if (instructions[i] === '🤜') count++
            if (instructions[i] === '🤛') count--
            if (count === 0) return i
        }
    }

    // Find the previous fist from the current index in the array of instructions
    const getPrevFistIndex = (index, instructions) => {
        let count = 1;
        for (let i = index - 1; i >= 0; i--) {
            if (instructions[i] === '🤜') count--
            if (instructions[i] === '🤛') count++
            if (count === 0) return i
        }
    }

    // Actions
    const actions = {
        '👉': () => {
          pointer++
          memory[pointer] ??= 0
        },
        '👈': () => {
            pointer--
            memory[pointer] ??= 0
        },
        '👆': () => clamp(memory[pointer]+1),
        '👇': () => clamp(memory[pointer]-1),
        '🤜': () => {
            if (memory[pointer] === 0) {
                index = getNextFistIndex(index, arrayOfInstructions)
            }
        },
        '🤛': () => {
            if (memory[pointer] !== 0) {
                index = getPrevFistIndex(index, arrayOfInstructions)
            }
        },
        '👊': () => {
            output += String.fromCharCode(memory[pointer])
        }
    }

    // Loop through the array of instructions
    while (index < arrayOfInstructions.length) {
        const instruction = arrayOfInstructions[index]        
        actions[instruction]() // Calling actions method using instruction const as parameter                
        // DEBUG
        // console.log({instruction, index, pointer, output}); // Show the current instruction, index, pointer and output like a object, using { and } characters
        index++
    }

    return output
}

module.exports = translate;