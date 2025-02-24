
import { reverseString, countCharacters, capitalizeWords } from './stringUtils';
import * as fs from 'fs';
import * as path from 'path';

const sentence = "Learning Node.js is important for modern web development.";

const reversed = reverseString(sentence);
const characterCount =countCharacters(sentence);
const capitalized = capitalizeWords(sentence);

console.log("Original Sentence:",sentence);
console.log("Reversed Sentence:", reversed);
console.log("Character Count (excluding spaces):", characterCount);
console.log("Capitalized Sentence:", capitalized);

const filePath = path.join(__dirname, 'reversed.txt');
fs.writeFileSync(filePath, reversed);

console.log("Reversed sentence saved to:", filePath);






