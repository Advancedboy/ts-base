const isFetching : boolean = true
const isLoading : boolean = false

const int : number = 42
const float : number = 4.1
const num: number = 3e10

const message : string = "This is TypeScript"

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13] //числа Фибоначчи
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['One', 'Two', 'bear', 'code']

// Tuple массив из разных типов данных
const contact: [string, number] = ['Pavel',  23123123]

// Any 
let variable : any = 42 //let это типа var в C#
//...
variable = 'new string'
variable = []

// =====
function sayMyName(name: string):void{
	console.log(name)
}

sayMyName('Pavel')
sayMyName('Anastasia')

// never 
function throwError(message:string) : never{
	throw new Error(message)
}

function infinite() : never{
	while(true){
	}
}

// Type
type Login = string

const login: Login = 'haikvch' 
type ID = string | number

let id: ID = "123"
let id2: ID = 1234

type SomeType = string | null | undefined