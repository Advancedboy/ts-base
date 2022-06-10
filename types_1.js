var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.1;
var num = 3e10;
var message = "This is TypeScript";
var numberArray = [1, 1, 2, 3, 5, 8, 13]; //числа Фибоначчи
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['One', 'Two', 'bear', 'code'];
// Tuple массив из разных типов данных
var contact = ['Pavel', 23123123];
// Any 
var variable = 42; //let это типа var в C#
//...
variable = 'new string';
variable = [];
// =====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Pavel');
sayMyName('Anastasia');
// never 
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'haikvch';
var id = "123";
var id2 = 1234;
