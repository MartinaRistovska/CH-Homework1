//1. Kreirajte funkcija mergeArrays koja sto kako parametri ke prima 2 nizi. So pomos na nekoj od loopovite dodate gi site elementi od vtorata vo prvata niza.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function mergeArrays(array1,array2){
    array1.push(...array2);
}
mergeArrays(array1,array2);
console.log(array1);

//2. Napravete manipulacija so dadenata niza: 

let tasks = ['Study', 'Exercise', 'Read', 'Write', 'Code'];

//- Step 1: Remove the last task
tasks.pop();

//- Step 2: Add three new tasks to the beginning (by your choice)
tasks.unshift('Jogging','Listen to music','Draw');
console.log(tasks);
//- Step 3: Create new array with the first 3 only

let newTask=tasks.slice(0,3)

console.log(newTask);
//3. Funkcija koja sto ke ni dava dali postoi takvo ime vo nizata od objekti sto ja prakjame kako parametar. 
//Treba vo funkcijata da ja izmenete nizata so metoda, dokolku postoi takov user prikazete go dokolku ne not found. 
let people = [

    { name: "Alice", age: 25 },
    
    { name: "Bob", age: 30 },
    
    { name: "Charlie", age: 35 }
];

const validUser=(array,name)=>{
    let user=array.find(person=> person.name===name);

    if(user){
        console.log(user);
    }else{
        console.log("User not found")
    }
}

validUser(people,'Bob');
validUser(people,'Jane');
