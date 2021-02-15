export function fizzbuzz(n: number) : string | number {
    
    /*
    if (n % 3 === 0 && n % 5 === 0) {
        return 'fizz buzz';
    }
    else if(n % 3 === 0) {
        return 'fizz';
    }
    else if( n % 5 === 0) {
        return 'buzz';
    }
    return n;
    */

    // REFACTORING
    let fizzbuzzArr = new Array();
    if( n % 3 === 0) {
        fizzbuzzArr.push('Fizz');
    }
    if( n % 5 === 0){
        fizzbuzzArr.push('Buzz');
    }
    return fizzbuzzArr.length ? fizzbuzzArr.join(' ') : n;
}

export function fizzbuzzGenerator(n: number){
    let fizzBuzzResult: Array<string|number> = [];
    for(let i=1; i<=n; i++) {
        fizzBuzzResult.push(fizzbuzz(i));
    }
    return fizzBuzzResult.join(' ');
}