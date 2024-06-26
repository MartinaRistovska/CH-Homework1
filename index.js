//- Vrz divot so id="firstDiv" kreirajte hover so pomos na Javascript Events, neka se menuva bojata na pozadinata.
let hoverDiv=document.getElementById("firstDiv");
hoverDiv.style.width="250px"
hoverDiv.style.height="250px"
hoverDiv.style.backgroundColor='red'



function hoverEffect(){
    hoverDiv.addEventListener('mouseenter',()=>{
        hoverDiv.style.backgroundColor='green'
    });

    firstDiv.addEventListener('mouseleave',()=>{
       hoverDiv.style.backgroundColor='red'

    })
}
hoverEffect();




//- Selektirajte gi site divovi so klasa "card". Dodadete random text vo crvena boja vo niv. 
const divCards=document.querySelectorAll('.card')
divCards.forEach(div=>{
    div.textContent='Some text inside the div card class'
    div.style.color='red'
})
//- Na veke prviot so klasa "card" dodadete span element koj sto ke ima tekst "Hello from span", promenete ja i pozadinskata boja. 
const firstCard=document.querySelector('.card');

const createSpan=document.createElement('span');
createSpan.textContent='Hello from span '
firstCard.textContent='';
firstCard.appendChild(createSpan);
firstCard.style.backgroundColor='pink'


//- Na pocetok pred 

//"firstDiv" kreirajte button preku js i prikazete go. Promenete i stil taka sto ke kreirate klasa vo css i ke ja dodadete preku js na samiot button. 
const createButton=document.createElement("button")
createButton.textContent='Button';
createButton.style.height='18px';
createButton.style.width='105px';
createButton.style.textAlign='center';
createButton.style.backgroundColor='gray';
createButton.style.border='2px solid gray'
createButton.style.color='Yellow';

document.body.appendChild(createButton);


document.getElementById('firstDiv');
document.body.insertBefore(createButton,hoverDiv);


//- Paragrafot id="toggleParagraph" na klik na kopceto id="toggleBtn" prikazuvajte go i krijte go naizmenicno.
const toggleParagraph=document.createElement('p')
toggleParagraph.id='toggleParagraph'
toggleParagraph.textContent='Nekoj paragraf so nekoj tekst vo nego';
document.body.appendChild(toggleParagraph);

const toggleButton=document.createElement("button")
toggleButton.textContent='Toggle Button'
toggleButton.id='toggleBtn'
document.body.appendChild(toggleButton)

const toggleBtn=document.getElementById('toggleBtn')
const togglePrg=document.getElementById('toggleParagraph')
togglePrg.style.display='none'
toggleBtn.addEventListener('click',()=>{
   if(togglePrg.style.display ==='block'){
    togglePrg.style.display='none'
   }else{
    togglePrg.style.display='block'
   }
})
