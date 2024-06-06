// Switch
//1. Proverete ja ulogata na userot: 
//- admin - You have full access.
//- editor - You can edit content.
//- viewer - You can view content.
//- all other - Role not recognized.
let userRole='viewer';

switch(userRole){
    case "admin" :
        console.log(`${userRole}-You have full access.`);
        break;
    case "editor":
        console.log(`${userRole}-You can edit content.`);
        break;
    case "viewer":
        console.log(`${userRole}-You can view content.`);
        break;
    default:
        console.log(`- Role not recognized.`)   ; 


}



//Napravete proverka za operativen sistem: 
//- Windows - You are using Windows.
//- MacOs -  You are using MacOS.
//- Linux - You are using Linux. 
//- all other - Operating system not recognized.

let operativSystem="MacOs"

switch(operativSystem){
    case "Windows":
        console.log(`${operativSystem} - You are using Windows`);
        break;
    case "MacOs":
        console.log(`${operativSystem} -  You are using MacOS.`);
        break;
    case "Windows":
        console.log(`${operativSystem} - You are using Linux.`);
        break;
    default:
        console.log(`- Operating system not recognized.`)   ; 
}

// For 
//3. Isprintajte gi site neparni broevi od 1 do 100. 
for(let i=1 ; i <= 100 ; i++ ) {
    if(i % 2===0){
        continue;
    }
    console.log(`${i} neparen broj`);
}
//4. Site elementi od nizata vo konzola prikazete gi so golemi bukvi 
let fruit=["apple", "banana", "cherry", "orange"];
for(let i=0 ; i< fruit.length ; i++){
   
    console.log(fruit[i].toLocaleUpperCase());
}

//5. Na istata niza prikazete ja dolzinata (broj na karakteri) na sekoj od stringovite.
for(let i=0 ; i< fruit.length ; i++){
   
    console.log(`${fruit[i]}: ${fruit[i].length} characters`);
}
//6. Oslobodete se od praznite mesta vo nizata: 
let users= ["   user44444   ", "user223   ", " username12334   "];
for(let i=0; i<users.length; i++){
    users[i]=users[i].trim();
    
}
console.log(users);