//- Kreirajte variabli od site tipovi i napravete soodvetna proverka od koj tip e istata. 
let age=28;
let senteceString='My name is Martina';
let objVariable={
    firstName: 'Martina',
    lastName: 'Ristovska',
    age:28
}

let niza = ["Martina", "Stefanija", 2023]
let boolean = true
let somethingElse = undefined;
let something = null;
let num = 123n;
console.log(senteceString);


console.log (typeof senteceString)
console.log (typeof age)
console.log (typeof objVariable)
console.log (typeof niza)
console.log (typeof num)
console.log (typeof something)
console.log (typeof boolean)
console.log (typeof somethingElse)



//- Da se definiraat 3 scope-a i vo site od niv da ima edna promenliva od tip number.
// Vo vtoriot scope da se ispecati proizvodot na site 3 promenlivi. Moze da se dodavaat povekje promenlivi vo bilo koj scope.

let num3=40;

{
    let num1 = 5;
    {
        let num2 = 10;
        {
            num3 = 40;
        }
       
        console.log(num1 + num2 + num3);
    }
}