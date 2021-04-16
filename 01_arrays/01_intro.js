const strings =['a', 'b', 'c', 'd'];
//4*4 bytes of storage

console.log(strings[2]);

//push  ==>  O(1)
//en sona ekler
strings.push('e'); 
console.log(strings);

//pop ==> O(1)
//en sondakini çıkartır
strings.pop();
console.log(strings);

strings.pop();
console.log(strings);

//unshift ==> O(n)
//en başa ekler
strings.unshift('x');
console.log(strings);

//splice == O(n)
//istenen yere ekler
strings.splice(2, 0, 'alien');
console.log(strings);


