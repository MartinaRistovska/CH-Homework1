//1.So pomos na "if", "else if" i "else napravete soodvetna proverka za 
//temperaturata koja sto ke ja stavite vie prvicno vo edna varijabla. 
//Print "It's freezing!" if the temperature is below 0.
//Print "It's cold." if the temperature is between 0 and 15.
//Print "It's warm." if the temperature is between 16 and 25.
//Print "It's hot!" if the temperature is above 25.

let temp=35;

if(temp<0){
    console.log("It's freezing!");
}else if(temp>0 && temp<=15){
    console.log("It's cold.");
}else if(temp>=16 && temp<=25){
    console.log("It's warm.");
}else{
    console.log("It's hot!");
}



//2. Proverka za vozrast: 
//0-2 years: "Infant"
//3-12 years: "Child"
//13-19 years: "Teenager"
//20-59 years: "Adult"
//60 years and above: "Senior"

let personAge=28;
if(personAge>=0 && personAge<=2){
    console.log("Infant");
}else if(personAge>=3 &&personAge<=12){
    console.log("Child");
}else if(personAge>=13 && personAge<=19){
    console.log("Teenager");
}else if(personAge>=20 && personAge<=59){
    console.log("Adult");
}else if(personAge>=60 && personAge<=100){
    console.log("Senior")
}else{
    console.log("Not valid age");
}

//3.So pomos na ternary operator proverete dali eden broj e paren ili neparen.

let broj=9;
let parenNeparenBroj=(broj % 2 === 0 ? 'Paren':'Neparen');
console.log(parenNeparenBroj)