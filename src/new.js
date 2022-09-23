import React from "react";

export default class Person extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.age = 9;
    //     this.name = 'Rodrigo';
    // }


    // constructor(props) {
    //     super(props)
    //     this.age = 10
    // }

    // render() {
    //     const me = new Person({age: 5})
    //     console.log(me)
    //     return (
            
    //         <p>Bye {this.props.age}</p>
    //     )
    // }
    render() {
        
        return (
            <>
            <p> {this.props.content}</p>
            <p>My name is {this.props.name}</p>
            <p>I'm {this.props.age} years old</p>
            </>
        )
        
    }
}