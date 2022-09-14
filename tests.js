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

    it('should return the string "Hello!" when executed', ()=>{
        expect(sayHello()).toBe('Hello!')
    })

    it('should never return undefined when called', ()=>{
        expect(sayHello()).not.toBe(undefined)
    })
})