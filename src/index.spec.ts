import { fizzbuzz } from "./index";

describe('FizzBuzz Kata', ()=>{
    it('should return the same number', () => {
        expect(fizzbuzz(1)).toBe(1)
        expect(fizzbuzz(2)).toBe(2)
    });

    it('should return fizz for multiples of three', () => {
        expect(fizzbuzz(3)).toBe('fizz');
        expect(fizzbuzz(9)).toBe('fizz');
        expect(fizzbuzz(123)).toBe('fizz'); 
    });

    it('should return buzz for multiples of five', ()=>{
        expect(fizzbuzz(5)).toBe('buzz');
        expect(fizzbuzz(20)).toBe('buzz');
        expect(fizzbuzz(200)).toBe('buzz');
    })

    it('should return fizz buzz for multiples of three and five', ()=> {
        expect(fizzbuzz(15)).toBe('fizz buzz');
        expect(fizzbuzz(45)).toBe('fizz buzz');
        expect(fizzbuzz(315)).toBe('fizz buzz');
    });

})