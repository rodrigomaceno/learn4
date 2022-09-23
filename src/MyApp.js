import StarWars from "./StarWars.jpg";
import React from "react";
import Person from "./new";
import Board from "./board";
import Movie from "./movie";
import { Book } from "./book.js"; //named import

export default class MyApp extends React.Component {
    render(){
        const my = new Book;
        console.log(my);
        const me = new Person;
        console.log(me);
        console.log(my.writeSentence)
        my.writeSentence()
        // const abc = new Movie();
        // console.log(abc);
        return(
        <>
                <Person age={6} name= "Bob" content='Hi, there!'/>
                <Board color='green'/> 
                <Movie {...{title: 'Star Wars', image: StarWars, synopsis: 'The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy.'}}/>
                </>  
        )
    }
}