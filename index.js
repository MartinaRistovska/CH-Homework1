//1. So pomos na while presmetajte ja sumata na site broevi od 1 od 10. 
let sum=0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
    
}
console.log(`Sumata na broevite od 1 do 10 e ${sum}`)
//2. Izminete ja nizata so while 

let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];  
let index=0;
//- Dokolku clenot sozdrzi "a" vo sebe vratete go celiot so golemi bukvi 
//- Dokolku e pogolem od 5 karakteri a ne go ispolnuva prviot uslov 
//vratete go so soodveta poraka (is longer than 5 characters... )
//- Dokolku ne gi ispolnuva nikoj od prvite 2 - is a short fruit name
while(index < fruits.length){
    let fruit=fruits[index]
    if(fruit.includes('a')){
        console.log(fruit.toUpperCase());
    }else if (fruit.length>5 ) {
        console.log('is longer than 5 characters... ');
    }else{
        console.log(' is a short fruit name');
    }
    index++;
}




//3. So pomos na do while izminete ja nizata 

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio"];
let index1=0;
//- Dokolku eden grad sodrzi vo sebe"o" promenete gi site so "0" 
//-   Dokolku eden grad ima povekje od 8 karatkeri prikazete go do tolku karakteri i ostavete 3 tocki. 
//- Site ostanati so pomos na template literals isprintajte go gradot so brojot na karakterite vo sebe. 
 
do{
    let city=cities[index1]
    if(city.includes('o')){
        let changeCharCity=city.replaceAll('o','0');
        console.log(changeCharCity);
    }else if(city.length>8){
        let replaceChar=city.substring(0,8) + "...";
        console.log(replaceChar); 
    }else{
        console.log(`${city} has ${city.length} characters`);
    }
    index1++;
}while(index1<cities.length);



//4. So pomos na for of vratete gi site clenovi od nizata na kvardrat 
let numbers = [1, 2, 3, 4, 5];
let squareNumbers=[];
for(number of numbers) {
    squareNumbers[i]=number**2;
    i++;
}
console.log(squareNumbers);


//5. So pomos na for of sekoj karakter od vaseto ime i prezime isprintajte go so negovata 
//vrednost od Unicode (charCodeAt)
let myName='Martina Ristovska'
for (char of myName){
    console.log(`${char}: ${char.charCodeAt(0)}`);
}

//6. So pomos na for of izminete go objektot 
let persons = [
{ name: "Alice", age: 30 },
{ name: "Bob", age: 25 },
{ name: "Charlie", age: 35 }
]; 
for (person of persons){
    console.log(`${person.name} is ${person.age} years old`);
}

//I za sekoj person isprintajte primer "Alice is 30 years old" .

//7. Izvadete gi site broevi od stringot : 
//isNaN (is Not a Number) ke vi bide od pomos    
let text = "Today is 2024-06-09 and it's a sunny day. Temperature is 25°C."; 
let numbers1='';
for (char of text){
    if(!isNaN(char)&& char !== ' '){
        numbers1 +=char;
    }else if(numbers1.length>0 && (isNaN(char) || char === ' ')){
        numbers1 +=' ';
    }
}
console.log(numbers1.trim(""));



//8 So pomos na for in izminete go objektot 
let formData = {
username: "john_doe",
password: "password123",
email: "john@example",
age: 25
};

//So ona sto go znaete do sega napravete validacija za klucot email vrednosta da sodrzi "@"
//- So klucot age vrednosta da e broj i da ne e pogolem od 100 
//- So klucot password da ne e pokratok od 8 karakteri.
let data=false;
for (key in formData){
   switch (key) {
    case 'email':
        if(formData[key].includes('@')){
            data=true;
        }
        break;
    case 'age':
        if(typeof formData[key] === 'number' && formData[key] <=100 ){
            data=true;

        }    
        break;
    case 'password':
        if(formData[key].length >=8){
            data=true;
        }    
        break;
   }
}
if(data){
    console.log('Forms data is valid')
}else{
    console.log('Form data is invalid')
}