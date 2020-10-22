const numbers = [1,2,3];

// Adding 
const index = numbers.indexOf(2); //megkeresi hogy mi elé rakja be
const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
];

console.log(`added: ${added}`);


// Removing
const removed = added.filter(n => n !== 4);

console.log(`removed: ${removed}`);


// Updating
const updated = numbers.map(n => (n === 2 ? 20: n));
console.log(`updated: ${updated}`);


