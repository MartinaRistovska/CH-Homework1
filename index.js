//- Funkcija koja sto ke presmetuva stepeni "celsius to fahrenheit". 
//Kako parametar ke prakjame celsius.
//fahrenheit = (celsius * 9/5) + 32;

function celsiusToFahrenheit(celsius){
    return fahrenheit = (celsius*9/5)+32;
}
console.log('Temperaturata iznesuva',celsiusToFahrenheit(15),'F');

//- Funkcija koja sto ke sporeduva dva broja i ke ni go vrakja pogolemiot.
// Dokolku se isti "Both numbers are equal."

function numberCompare(num1,num2){
    if(num1>num2){
        return num1 + 'e pogolemiot broj';
    }else if(num1<num2){
        return num2 +'e pogolemiot broj';
    }else{
        return 'Dvata broevi se ednakvi';
    }
}
console.log(numberCompare(25,55));


//- Funkcija koja sto ke prima 2 parametri (str, times). str - stringot koj sto ke go vneseme, times- kolku pati da se povtoruva istiot. 
//Treba da dobiete repeatString("abc", 3) // Outputs: abcabcabc 

function stringRepeating(srt,times){
    return srt.repeat(times);
}
console.log(stringRepeating("abc",3));

//- Funkcija koja sto ke vi vrakja dali eden string zapocnuva so nekoj prefix ili ne. 
//startsWithPrefix("Javascript", "Java") // Outputs: true
function stringCheck(string, prefix){
    return string.startsWith(prefix);
}
console.log(stringCheck("Javascript", "Java"));

//- Funkcija koja sto ke ni vrakja poraka vo odnos na vremeto od denot: 
// -  do 12 - Good morning
// - do 18 - Good afternoon
// - posle 18 - Good eveinng

function timeOfTheDay(hour){
    if(hour <=12){
        return "Good morning";
    }else if(hour>12 && hour <=18){
        return "Good afternoon"
    }else if (hour>18 && hour<=24){
        return "Good evening";
    }else {
        return "inavlid time table";
    }
}

console.log(timeOfTheDay(15));