import { fizzbuzz, fizzbuzzGenerator } from "./index";

describe('FizzBuzz Kata', ()=>{
    it('should return the same number', () => {
        expect(fizzbuzz(1)).toBe(1)
        expect(fizzbuzz(2)).toBe(2)
    });

    it('should return fizz for multiples of three', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(9)).toBe('Fizz');
        expect(fizzbuzz(123)).toBe('Fizz'); 
    });

    it('should return buzz for multiples of five', ()=>{
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(20)).toBe('Buzz');
        expect(fizzbuzz(200)).toBe('Buzz');
    })

    it('should return fizz buzz for multiples of three and five', ()=> {
        expect(fizzbuzz(15)).toBe('Fizz Buzz');
        expect(fizzbuzz(45)).toBe('Fizz Buzz');
        expect(fizzbuzz(315)).toBe('Fizz Buzz');
    });

    it('should return 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz',()=>{
        expect(fizzbuzzGenerator(15)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz');
    });


})