// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

const sayHello = (input) => {
    // if(input == 'Danny') {
    //     return 'Hello Danny!'
    // }else if(input == 'Pat') {
    //     return 'Hello Pat!'
    // }


    //Fix edge cases
    if(input === undefined){ //check undefined
        return 'Hello, World!'
    }else if(input === null || input === '') { //check null and empty string
        return 'Hello, Nameless!'
    }else if(typeof(input) === 'number'){
        return 'You\'re a number?'
    }else if(typeof(input) === 'object'){
        return 'No objects allowed'
    }else if(typeof(input) === 'function'){
        return 'No functions allowed'
    }else if(input) { //Any other input
        return "Hello " + input + "!";
    }else{
        //If no input is provided then return the default Hello!
        if(!input) return 'Hello!'
    }

}

const isFive = (input) =>  input == 5

const isEven = (input) => input != null && input % 2 == 0

const isVowel = (x) => ['number','undefined','boolean'].includes(typeof x) ? false : ['a','e','i','o','u'].includes(x.toLowerCase())
