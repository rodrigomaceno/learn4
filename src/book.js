// import React from "react";

// named export
export class Book {
    
    constructor() {
        this.name = 'Rodrigo',
        this.title = 'Harry Potter',
        this.year = 2001,
        this.author = 'JK Rowling'
    }

    writeSentence() {
        console.log(`My name is ${this.name}. My favorite book is ${this.title}`)
    }
}

