//object creation and acess
let book={
    title:"everyone has a story 2",
    author:"Savi Sharma",
    Year:2019

}

// console.log(book)
// console.log(book.title)

book.displayinfo=function(){
    console.log(`The title is ${book.title} and the author is  ${this.author}`);
}
// book.displayinfo()
book.Year=1999
// console.log(book)
const library={
    fictional:{
                book1:{
                    title:"Whispers of the Forgotten",
                    author:"Elara Dawson",
                    year:2015
                },
                book2:{
                    title:"The Shadow Weaver",
                    author:"Lucas ",
                    year:2018
                },
                
                book3:{
                    title:"Echoes of the Abyss",
                    author:"Miriam ",
                    year:2020
                },
                
                book4:{
                    title:"The Celestial Accord",
                    author:"Quentin ",
                    year:2017
                }
                
    }
}
//Object.values(library.fictional).forEach(book => console.log(book.author));
