import { task1 } from './typeScript/task1'
import { task2 } from './typeScript/task2'
import { task3 } from './typeScript/task3'
import { task4 } from './typeScript/task4'

const runTasks = async () => {
	console.log("Задание №1:")
	await task1()

	console.log("")
	console.log("❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁")
	console.log("")
    
	console.log("Задание №2:")
	await task2()

    console.log("")
	console.log("❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁")
	console.log("")
    
	console.log("Задание №3:")
	await task3()

    console.log("")
	console.log("❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁")
	console.log("")
    
	console.log("Задание №4:")
	await task4()
}

runTasks()