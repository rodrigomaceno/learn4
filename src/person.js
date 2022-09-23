import $ from 'jquery';

export default class Person {
    constructor(var1, var2) {
        this.firstName = var1;
        this.lastName = var2;
    }
    
    display(htmlElementId) {
        $(`#${htmlElementId}`).text(`${this.firstName} ${this.lastName}`)
    }
}

// class Person {
//     constructor(var1, var2) {
//         this.firstName = var1;
//         this.lastName = var2;
//     }
    
//     display(htmlElementId) {
//         $(`#${htmlElementId}`).text(`${this.firstName} ${this.lastName}`)
//     }
// }