//Create a function that reverses a string:
//'Hi My Name is Andrei' should be:
//'ierdnA si eman iH'

function reverse1(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm thats not good';
    }

    const backwards = [];
    const totalItems = str.length-1;

    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');

}

function reverse2(str) {
     //check input
     if(!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm thats not good';
    }

    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');


console.log(reverse1('Merhabalarrr'));
console.log(reverse2('Merhabalarrr'));
console.log(reverse3('Merhabalarrr'));