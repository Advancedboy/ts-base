interface Rect {
	readonly id: string
	color?: string // знак вопрос означает что поле необязательное
	size: {
		width: number
		height: number
	}
}

const rect1: Rect = {
	id: '1111',
	size: {
		width: 110,
		height: 100
	},
	color: '#ccc'
}

const rect2: Rect = {
	id: '1112',
	size: {
		width: 50,
		height: 50
	},
	color: '#fff'
}

rect2.color = 'purple'

const rect3 = {} as Rect
const rect4 = <Rect>{} 

//=============

interface RectWithArea extends Rect{
	getArea: () => number
}

const rect5: RectWithArea = {
	id: '1113',
	size: {
		width: 45,
		height: 88
	},
	color: 'red',
	getArea():number{
		return this.size.width * this.size.height;
	}
}

// ===========

interface IClock{
	time: Date
	setTime(date: Date): void
}

class Clock {
	time: Date = new Date()

	setTime(date: Date):void{
		this.time = date
	}
}

//===========
interface Styles{
	[key: string]: string
}

const css : Styles = {
	border: '1px solid black',
	marginTop: '2px',
	borderRadius: '5px',
}