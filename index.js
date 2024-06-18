const movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010, rating: 8.8, duration: 148 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014, rating: 8.6, duration: 169 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, rating: 9.0, duration: 152 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, rating: 8.9, duration: 154 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, rating: 9.3, duration: 142 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, rating: 9.2, duration: 175 },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999, rating: 8.7, duration: 136 },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8, duration: 139 },
    { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994, rating: 8.8, duration: 142 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", year: 2001, rating: 8.8, duration: 178 }
];

//Na dadenata niza od objekti iskoristete gi foreach, filter, map, sort, some, every i find. Pod sekoj primer sto ke go prikazete tekstualno 
//zapiteste sto pravi samata metoda i zosto vo toj primer ste ja iskoristile istata. 

//forEach: izpecati go sekoj naslov od nizata na objekti
movies.forEach(movie=>{ 
    console.log(movie.title)
});

//Komentar:na ovoj nacin forEach metodata minuva niz sekoj element od nizata spored selektirano properti vo ovoj slucaj title i vo kozola ni gi dava site
//naslovi koj sto se smesteni vo nizata od objekti.



//filter: prikazi gi zamo filmovite koi imaat raiting pomal od 9 ili se so raiting 9

const filterMethod=movies.filter(movie=> movie.rating <=9);
console.log(filterMethod);

//Komentar: vo ovoj slucaj so upotreba na filter metodata koja gi zema samo elementite koj go zadovoluvaat uslovot 
//vo ovoj slucaj selektirano e propertito rating so cel da ni gi prikaze site filmovi so raiting pomali ili ednakvi na 9
//so shto formira nova niza samo so elementi koi go zadovoluaat uslovot.

//map: niza kade ke ni gi dade samo naslovite na filmot vo niza
const mapMethod=movies.map(movie => movie.title);
console.log(mapMethod);

//Komentar: vo ovoj slucaj so map metodata formirame nova niza koja vo sebe gi sodrzi zamo naslovite od filmovite.


//sort: sortiranje na filmot spored godina na izdavanje od najstar-najnov film

const sortMethod=movies.slice().sort((a, b)=> a.year-b.year)
console.log(sortMethod);


//Komentar: so pomosh na sort metodata vo ovoj slucaj filmovite se sortirani spored godinata na izdavanje po iskachuvacki redosled.
//zadadena e arrow funcija vo koja e selektirana promenlivata movies kade prvo so pomos na slice pravime kopija na originalnata niza a potoa so sort
//zadavame dva parametri a i b koi se uslov za funkcijata izrazeni preku property vo ovoj slucaj year.


//some: dali postojat filmovi so odreden raiting?

const someMethod=movies.some(movie=> movie.rating> 8.5);
console.log(someMethod);

//Komentar: so ovoj metod proveruvame dali barem eden of filmovite vo nizata go ispolnuva uslovot a so toa ni vrakja tocno/netocno.


//every: isto kako so some metodata upotrebi ja every metodata za raiting na filmovite

const everyMethod=movies.every(movie=> movie.raitint<8.5);
console.log(everyMethod);

//Komentar: za razlika od some metodot kade barem ako eden objekt on nizata go zadovoluva uslovot ni vrakja pozitiven odgovor,
//so every metodata site elementi treba da go zadovoluvaat uslovot koj e zadaden za da ni vrati pozitiven odgovor. Vo ovoj slucaj dali site filmovi imaat raiting pomal od 8.5.



//find: pronajdi go  filmot reziran od "Quentin Tarantino"

const findMethod=movies.find(movie=> movie.director==="Quentin Tarantino");
console.log(findMethod);
//Komentar: vo ovaa funkcija selektirame film spored odredeno properti so shto  metodata find pominuva niz celata nizata
//i koga doagja do element koj go zadovoluva uslovot na funkcijata ni go prikazuva samo toj element vo kozola kako odgovor.


//- Kreirajte nova niza od objekti po vas izbor. Iskoristete nekolku od metodite i povtorete go istoto so tekstualnoto objasnuvanje zosto ste gi iskoristile metodite.
//Kreiraj funkcija koja ke gi sortira knigite po godina na izdavanje , napravi lista koja ke gi sortira knigite koi se dostapni i nedostapni ,vo konzola na kraj isprintaj gi objektite koi gi sodrzat ovie dve listi.
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, available: true },
    { title: "1984", author: "George Orwell", year: 1949, available: false },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, available: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, available: false },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, available: true }
];




function sortingBooks(books) {
    const sortedBooks = books.slice().sort((a, b) => a.year - b.year);
    const availableBooks = sortedBooks.filter(book => book.available);
    const unavailableBooks = sortedBooks.filter(book => !book.available);
    
    return {
        sortedBooks: sortedBooks,
        availableBooks: availableBooks,
        unavailableBooks: unavailableBooks
    };
}

function finalResult(label, books) {
    console.log(label);
    books.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Available: ${book.available}`);
    });
}

const result = sortingBooks(books);
console.log("Final Result:");
finalResult("Sorted Books by Year:", result.sortedBooks);
finalResult("Available Books:", result.availableBooks);
finalResult("Unavailable Books:", result.unavailableBooks);


//Komentar:dadena e promenliva -niza od objekti koi se kategorizirani spored properties. Zadadeni se dve funkcii od koj prvata e glavna funkcija(sortingBooks) vo nea so pomos na metodite za niza
// se postaveni glavnite uslovi za izvrsuvanje od samata zadaca od koi vo prviot sotredBooks so koristenje na slice ze formira nova niza duplikat na originalata i vo nea so sort gi podreduvame knigite po 
//godina na izdavanje pocnuvajki od najstarata kniga kon najnovata kniga izdadena od listata. Vo vtoriot uslov gi delime knigite na dostapni so koristenje na filter metodata i vo tretata koristime inverzna fukncija za da ni
// gi prikaze site knigi koi se nedostapni. Vtorata funcija finalResult e glavno postavena za prikazuvanje na rezultatot onaka kako sakam da bide prikazan odnosno glavnata zamisla e sekoj rezultat da 
//bide tabeliran  spored nekoj label vo ovoj slucaj sortiranje spored godina na izdavanje i dostapnost na knigite. zatoa so preku forEach vo krajniot rezultat knigite se raspredeleni i se 
// prikazani so site potrebni informacii.