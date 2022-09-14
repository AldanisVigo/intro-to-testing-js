// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit tests for the sayHello function
describe('sayHello', ()=>{
    it('the sayHello() function should be defined',()=>{
        expect(typeof sayHello).toBe('function')
    })

    it('should return a string when called',()=>{
        expect(typeof sayHello()).toBe('string')
    })

    // it('should return the string "Hello!" when executed', ()=>{
    //     expect(sayHello()).toBe('Hello!')
    // })

    it('should return Hello Danny! when called with sayHello(\'Danny\')',()=>{
        expect(sayHello('Danny')).toBe('Hello Danny!')
    })

    it('should return Hello Pat! when called with sayHello(\'Pat\')',()=>{
        expect(sayHello('Pat')).toBe('Hello Pat!')
    })

    it('should return the string \'Hello, World!\' when called',()=>{
        expect(sayHello()).toBe('Hello, World!')
    })

    //Test edge cases

    //undefined
    it('should never return undefined when called', ()=>{
        expect(sayHello()).not.toBe(undefined)
    })

    it('should return Hello, undefined! when input is undefined',()=>{
        expect(sayHello(undefined)).toBe('Hello, World!')
    })

    //null
    it('should return Hello, Nameless! when input is null',()=>{
        expect(sayHello(null)).toBe('Hello, Nameless!')
    })

    //empty string
    it('should return Hello, Nameless when input is an empty string',()=>{
        expect(sayHello('')).toBe('Hello, Nameless!')
    })

    //number
    it('should return You\'re a number? when input is a number',()=>{
        expect(sayHello(2.3)).toBe('You\'re a number?')
    })

    //object
    it('should return No objects allowed when input is an object',()=>{
        expect(sayHello({})).toBe('No objects allowed')
    })

    //function
    it('should return No functions allowed when input is a function',()=>{
        expect(sayHello(()=>{})).toBe('No functions allowed')
    })
})

//Excersise 10 - isFive function
describe('isFive',()=>{
    //Make sure the function is defined
    it('isFive function should be defined',()=>{
        expect(typeof isFive).toBe('function')
    })

    //Ensure that isFive returns a boolean no matter what the input
    it('should return a boolean no matter what input',()=>{
        expect(typeof isFive()).toBe('boolean')
    })

    //Ensure that isFive returns true when passed 5
    it('should return true when the input is 5',()=>{
        expect(isFive(5)).toBe(true)
    })

    //What about if we pass in the string "5"? Do you want isFive to return true for that?
    it('should return true when the input is the string \'5\'',()=>{
        expect(isFive('5')).toBe(true)
    })
})

describe('isEven',()=>{
    //Assert that isEven:
    //returns a boolean no matter the input
    it('should return a boolean no matter the input',()=>{
        expect(typeof isEven()).toBe('boolean')
    })

    //returns true when executed with isEven(2)
    it('should return true when passed the number 2',()=>{
        expect(isEven(2)).toBe(true)
    })

    //returns true when executed with isEven(-4)
    it('should return true when passed -4',()=>{
        expect(isEven(-4)).toBe(true)
    })

    //returns false when executed with isEven(3)
    it('should return false when passed 3',()=>{
        expect(isEven(3)).toBe(false)
    })

    //returns false when called with isEven("banana")
    it('should return false when passed \'banana\'',()=>{
        expect(isEven('banana').toBe(false))
    })

    //returns true when called with isEven("8")
    it('should return true when passed 8',()=>{
        expect(isEven(8)).toBe(true)
    })

    //returns false when called with isEven(Infinity)
    it('should return false when input is Infinity',()=>{
        expect(isEven(Infinity)).toBe(false)
    })

    //return false when called with a boolean input like isEven(true) or isEven(false)
    it('should return false when passed a boolean value',()=>{
        expect(isEven(true)).toBe(false)
    })

    //returns false when called without an argument like isEven()
    it('should return false when called without any arguments',()=>{
        expect(isEven()).toBe(false)
    })
})