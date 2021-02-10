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
        fizzbuzzArr.push('fizz');
    }
    if( n % 5 === 0){
        fizzbuzzArr.push('buzz');
    }
    return fizzbuzzArr.length ? fizzbuzzArr.join(' ') : n;
}