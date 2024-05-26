let sentence='Lorem ipsum dolor sit amet consectetur adipisicing elit.';

//charAt(index)
let charAtExample = sentence.charAt(12);
console.log(charAtExample);

let charAtExampleTwo=sentence.charAt(0);
console.log(charAtExampleTwo);

let charAtExampleThree=sentence.charAt(50);
console.log(charAtExampleThree);

//concat(...strings)
let concatExample = sentence.concat('Voluptatum vero quibusdam autem dolore voluptas.');
console.log(concatExample);

let sentenceOne='laudantium quam molestiae sint a libero,';
let concatExampleTwo=sentence.concat('Voluptatum vero quibusdam autem dolore voluptas',sentenceOne);
console.log(concatExampleTwo)

let concatExampleThree=sentence.concat('',sentenceOne,'!' );
console.log(concatExampleThree);

//includes(searchString, position(optional))

let includesExample=sentence.includes('Lorem');
console.log(includesExample);

let includesExampleTwo=sentence.includes('me')==='me';
console.log(includesExampleTwo);

let includesExampleThree=sentence.includes('m',10);
console.log(includesExampleThree);


//endsWith(searchString, length(optional))
let lengthOfSentence=sentence.length
console.log(lengthOfSentence);

console.log(sentence.endsWith('elit'));
console.log(sentence.endsWith('sit'));
console.log(sentence.endsWith('t'));

console.log(sentence.endsWith('amet',26));

//indexOf(searchValue, fromIndex(optional)

let indexOfExample=sentence.indexOf('dolor');
console.log(indexOfExample);

let indexOfExampleTwo=sentence.indexOf('sit',18);
console.log(indexOfExampleTwo);

let indexOfExampleThree=sentence.indexOf('adipisicing elit',40);
console.log(indexOfExampleThree);



//lastIndexOf(searchValue, fromIndex(optional)
let lastIndexOfExample=sentence.lastIndexOf('dolor');
console.log(lastIndexOfExample);

let lastIndexOfExampleTwo=sentence.lastIndexOf('Lorem ');
console.log(lastIndexOfExampleTwo);

let lastIndexOfExampleThree=sentence.lastIndexOf('amet',20)
console.log(lastIndexOfExampleThree);


//replace(searchValue, newValue)
let replaceExample=sentence.replace('Lorem','Start')
console.log(replaceExample);

let replaceExampleTwo=sentence.replace(sentence,'Voluptatum vero quibusdam autem dolore voluptas');
console.log(replaceExampleTwo);

let replaceExampleThree=sentence.replace(sentence,'Error')
console.log(replaceExampleThree);
//replaceAll(searchValue, newValue)

let replaceAllExample=sentence.replaceAll('l','@')
console.log(replaceAllExample);

let replaceAllExampleTwo=sentence.toLocaleLowerCase().replaceAll('m','&')
console.log(replaceAllExampleTwo);

let replaceAllExampleThree=sentence.replaceAll('a','@#$');
console.log(replaceAllExampleThree);


//slice(startIndex, endIndex)

let sliceExample=sentence.slice(6,17);
console.log(sliceExample);

let sliceExampleTwo=sentence.slice(0,5);
console.log(sliceExampleTwo);

let sliceExampleThree= sentence.slice(27,40);
console.log(sliceExampleThree);

//split(separator, limit)
let splitExample=sentence.split(' ')
console.log(splitExample)

let splitExampleTwo=sentence.split('dolor');
console.log(splitExampleTwo);


let splitExampleThree=sentence.split(' ',3);
console.log(splitExampleThree);


//startsWith(searchString, position)

let startsWithExample=sentence.startsWith('Lorem');
console.log(startsWithExample);

let startsWithExampleTwo=sentence.startsWith('ipsum');
console.log(startsWithExampleTwo);

let startsWithExampleThree=sentence.startsWith('ipsum', 6 );
console.log(startsWithExampleThree);

//toLowerCase()
let toLowerCaseExample=sentence.toLocaleLowerCase();
console.log(toLowerCaseExample);
//toUpperCase()
let toUpperCaseExample=sentence.toLocaleUpperCase();
console.log(toUpperCaseExample);

//trim()
let sentenceTwo='           Voluptatum vero quibusdam autem dolore voluptas     '
let trimExample=sentenceTwo.trim();
console.log(trimExample);



//trimStart() (or trimLeft())
let trimStartExample=sentenceTwo.trimStart();
console.log(trimStartExample);

//trimEnd() (or trimRight())

let trimRight=sentenceTwo.trimEnd();
console.log(trimRight);

//repeat(count)
let repeatExample=sentence.repeat(2);
console.log(repeatExample);

let repeatExampleTwo=sentence.repeat(8);
console.log(repeatExampleTwo);

let repeatExampleThree=sentence.repeat(0);
console.log(repeatExampleThree);