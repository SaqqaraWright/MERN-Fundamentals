

//Problem 1

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) //output: Tesla
// console.log(otherRandomCar)//output: Mercedes

//Problem 2

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // console.log(name);//error
// console.log(otherName);//Elon


//Problem 3

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password); //12345
// console.log(hashedPassword); //undefined, because "password" is a constant and is already defined as "12345", there isn't any other key named password that is defined within the object labelled "person"


//Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //false, the "second" number is 5 which is not equal to the first number which is 2, because it is located at the 2nd position which is demonstrated by the comma.
console.log(first == third); //true, because the number at the 9th position is 2 which is equal to the value of the "first" number which is also 2.


//Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //1
console.log(willThisWork); //5, will this work is pointing to a value within secondkey rather than attempting to redefine it; therefore, it doesn't cause a conflict





