//1. Da se kreira promenliva od tip string so vrednost "33.33". 
//Da se pretvori vo number istata, da se pomnozi so 5 i rezultatot da se prikaze do 2 decimali. 
let stringNumber='33.33';

let convertString=Number(stringNumber) * 5;
console.log(convertString.toFixed(2))

//2. Da se kreira promenliva so random broj i istata da se zaokruzi so funkciite od   Math (ceil, floor, round, trunc).
let randomNumber=Math.random();

let mathCeil= Math.ceil(randomNumber);
console.log(mathCeil);

let mathFloor=Math.floor(randomNumber);
console.log(mathFloor);

let mathRound=Math.round(randomNumber);
console.log(mathRound);

let mathTrunc=Math.trunc(randomNumber);
console.log(mathTrunc);


//3. Kreirajte 2 varijabli za dolzina i vreme na eden maratonec distanceStr = "5.75" i timeStr = "45m".
// Presmetajte ja brzinata (distance/time) zaokrizena na 2 decimali. Isprintajte soodvetna poraka. 
let distanceStr = "5.75";
let timeStr = "45m";

let v=Number(distanceStr)/ parseInt(timeStr);
console.log('Brzinata so koja maratonecot se dvizi e:',v.toFixed(2),'m/min')

//4.Generirajte random boja. Boite vo css ni doagjaat od 3-te primarni R (red) G(green) B(blue) i sekoja od niv dobiva vrednost od 0-256. 
   
//rgb(255, 165, 0) e primer za zolta, ovie ovde fiksni zapisani broevi treba da gi dobiete random. 
let red=Math.floor(Math.random()*256);
let green=Math.floor(Math.random()*256);
let blue=Math.floor(Math.random()*256);

let randomColor='rgb(' + red + ', ' + green + ', ' + blue + ')'
console.log(randomColor);

//5. Vo let phoneNumber = "(123)456-7890"; so pomos na string i number metodi: 
let phoneNumber = "(123)456-7890";

//- Izvadete go povikuvackiot broj vo areaCode
let areaCode=Number(phoneNumber.slice(1,4))
console.log(typeof areaCode, areaCode);


//- Izvadete go ostatokot vo  remainingDigits
let remainingDigits=Number(phoneNumber.slice(5,8) + phoneNumber.slice(9,13))
console.log(typeof remainingDigits, remainingDigits)

//- Prikazete gi vo consola kade sto ke bidat od tip number