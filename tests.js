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
        expect(sayHello(undefined)).toBe('Hello, undefined!')
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