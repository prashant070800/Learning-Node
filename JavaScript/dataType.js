console.log('Welcome to datatType in js'); 
console.table({Name: 'Prashant',age:22,Collage :'IET Lucknow'});

// Data type in js
// let keyword use to create variable
let firstName = 'Prashant', lastName = 'Singh';

// const var can not be updated
const age = 22;
console.log(`Full name is ${firstName} ${lastName} and age is ${age}`);

// in js there are primitive type : 1) number 2) string 3) boolean 4)Null 5)undefined

myobj = {
    name : 'prashat',
    age : 22,
    collage : function(){
        return 'IET LUCKNOW'
    } 
}

console.log(myobj.name, myobj.collage, myobj.collage(),myobj.fev);

const arr = [1,2,3,4];
arr[4] = undefined;
arr[6] = 8;
if(arr[5] === undefined){
    console.log('undefined');
}
console.log(arr.length, arr,arr.shift);

const arr2 = [1,2,3,4,5,6];
const arr1 = [1,2,5,7,8,9,6,550];
if(arr2[0] === arr1[0]){
    console.log('same h prashant');
}