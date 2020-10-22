import { compose, pipe } from 'lodash/fp';

let input = '  JavaScript   ';

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

// let output = wrapInDiv(toLowerCase(trim(input)));
// const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrap('div'));
console.log(transform(input));