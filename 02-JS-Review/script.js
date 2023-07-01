const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: false,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

//------------- Destructuring - Getting data out of an object or out of an array
/*
const book = getBook(3);
book;

//--- objects
// const title = book.title;
// const author = book.author;
const { title, author, pages, publicationDate, genres } = book; // Use exact names as indicated in the object

// console.log(title, author, genres);

//--- Arrays
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// const [primaryGenre, secondaryGenre] = genres; //Gets First and second elements out of the array and assigns it to the defined variables

// console.log(primaryGenre, secondaryGenre);

//------------- Rest/Spread Operator

//--- Rest operator - Creating an array with other items not destructured

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; //Placed at the end of the destructuring operation

console.log(primaryGenre, secondaryGenre, otherGenres);

//--- Spread operator - Selects all items in the arrays/objects and adds a new one at the end

// On Arrays
// const newGenres = [...genres, "epic fantasy"];
const newGenres = ["epic fantasy", ...genres]; // We can also place it at the end
// newGenres;

// On Objects
const updatedBook = {
    ...book,
    //Adding a new property
    moviePublicationDate: "2001-12-19",
    // Overwriting an existing property
    pages: 1210,
};
updatedBook;

//------------- Template Literals - Create strings that contain JavaScript variables/any Javascript expression
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
    publicationDate.split("-")[0]
}`;
summary;

//------------- Ternary Operator Instead of if/else Statements
//Has 3 parts; condition,
// result of the operation incase the condition is true,
// result incase the condition is false
const pagesRange = pages > 1000 ? "Over 1000" : "Less than 1000"; //You can also include it in template literals
pagesRange;
// console.log(`The book has ${pagesRange} pages`);

//------------- Arrow Functions - New way of writing functions
// Helpful for writing quick and short 1 line functions

//--- Old way - Preferred for longer functions
function getYear(str) {
    return str.split("-")[0];
}
console.log(getYear(publicationDate));

//--- Arrow functions - Preferred for shorter, 1-liner functions
const getYearArrow = (str) => str.split("-")[0];
console.log(getYearArrow(publicationDate));

//------------- Short-Circuiting And Logical Operators: &&, ||, ??
// Short-Circuiting means that in some certain conditions, the operator will immediately return the first value and not even look at the second value

//--- && (and) operator - short-circuits when the first value is false (immediately returns that first value)
console.log(true && "some string"); // No short-circuit because the first value is true
console.log(false && "some string"); //Short-circuit because the first value is false
// Example
console.log(book.hasMovieAdaptation && "This book has a movie");

//falsy value: 0, "", null, undefined
console.log("wakabi" && "Some string"); // No short circuiting because it is a truthy value
console.log(0 && "Some string"); // Short circuits because it is a falsy value

//--- || (or) operator - short-circuits when the first value is true (immediately returns that first value)
console.log(true || "Some string"); // Short-circuit because the first value is true
console.log(false || "Some string"); // No short-circuit because the first value is false

// Example, setting default values
console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// The above  works for all falsy values even (including) 0 which might have consequences
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong; // We want count to be 0 and not "no data" hence we use ?? operator

// //--- ?? (nullish coalescing operator) operator - It works very simillary as the || operator (only for null or undefined)
// //but doesnot for 0 or ""....
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

//------------- Optional Chaining (?.) - ignore the undefined values (ignore the next variables incase what comes before is undefined or not available )
function getTotalReviewCount(book) {
    const goodreads = book.reviews?.goodreads?.reviewsCount;
    const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
    return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

/*
//------------- Functional Array Methods: map, filter and reduce: return a new array based on the original one
//--- The Array map Method: Loops over an array and return a new array with some operation applied to each elements of the original array
const books = getBooks();

function getTotalReviewCount(book) {
    const goodreads = book.reviews?.goodreads?.reviewsCount;
    const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
    return goodreads + librarything;
}

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const title = books.map((book) => book.title);
title;

const essentialData = books.map((book) => ({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
}));

essentialData;

//--- The Array filter Method: Filtering out some elements of the array based on a condition
// e.g creating an array with only books of more than 500 pages

const longBooksWithMovie = books
    .filter((book) => book.pages > 500)
    .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
    .filter((book) => book.genres.includes("adventure"))
    .map((book) => book.title);

adventureBooks;

//--- The Array reduce Method: The goal is to reduce the array to one value
// e.g adding all pages of all books.
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

//------------- The Array sort Method: Used to sort an array
const arr = [3, 7, 1, 9, 6];
// const sorted = arr.sort((a, b) => a - b); // Sorting in ascending way
// const sorted = arr.sort((a, b) => b - a); // Sorting in descending way
// sorted;
// arr; //arr also sorted - This is a method that mutates (changes) the original array, unlike map, filter and reduce.
// Always first take a copy of the original array to avoid mutating the array

const sorted = arr.slice().sort((a, b) => b - a); // Sorting in descending way
sorted;
arr; //arr not sorted

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages); // Sorted in descending
sortedByPages;

//------------- Working With Immutable Arrays: Arrays which are not changed or manipulated
// How to add elements, how to delete elements, how to update elements without changing the original array

// 1) Add a book object to array (use spread operator)
const newBook = {
    id: 6,
    title: "Harry Potter and the Chamber of Secretes",
    author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Deleting a book object from a array (use filter)
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update a book object in the array (Use map)
const booksAfterUpdate = booksAfterDelete.map((book) =>
    book.id === 1 ? { ...book, pages: 1210 } : book
);

booksAfterUpdate;
*/

//------------- Asynchronous JavaScript: Promises;  fetching/loading data from an external web api
// fetch("https://jsonplaceholder.typicode.com/todos"); //This returns a promise
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => console.log(data));

console.log("Wakabi");

//------------- Asynchronous JavaScript: Async/Await;  fetching/loading data from an external web api
