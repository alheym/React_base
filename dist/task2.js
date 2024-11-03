"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.task2 = void 0
const task2 = () => {
	let testCar = {
		wheels: 4,
		doors: 4,
		color: "Red",
		updateSystem(update) {
			if (update.engine) {
				this.engine = update.engine
			}
			if (update.lighting) {
				this.lighting = update.lighting
			}
			if (update.color) {
				this.color = update.color
			}
			console.log("Updated Car System:", this)
		}
	}
	// Пример использования:
	const engineUpdate = {
		name: "Engine System",
		id: 2,
		type: "V8",
		horsepower: 450,
	}
	const lightingUpdate = {
		name: "Lighting System",
		id: 3,
		type: "LED",
		lightIntensity: 1200,
	}
	testCar.updateSystem({
		engine: engineUpdate,
		lighting: lightingUpdate,
		wheels: 0,
		doors: 0,
		color: "Yellow",
	})
}
exports.task2 = task2
