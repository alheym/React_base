type NumberBase = 'decimal' | 'binary' | 'hexadecimal';

export const task1 = () => {
	// Функция для перевода числа из одной системы счисления в другую
	function convertNumber(number: number, base: NumberBase): string {
		switch (base) {
		case 'binary':
			return number.toString(2)
		case 'hexadecimal':
			return number.toString(16).toUpperCase()
		case 'decimal':
		default:
			return number.toString(10)
		}
	}

	// Универсальная функция для выполнения операций
	function performOperation(
		operation: (a: number, b: number) => number,
		a: number,
		b: number,
		base: NumberBase,
		operationName: string
	): string {
		if (operationName === 'деление' && b === 0) {
			throw new Error("Ошибка: деление на ноль невозможно")
		}

		const result = operation(a, b)
		console.log(`${operationName}: ${convertNumber(a, base)} и ${convertNumber(b, base)} = ${convertNumber(result, base)} в системе ${base}`)
		return convertNumber(result, base)
	}

	// функция сложения
	function add(a: number, b: number, base: NumberBase): string {
		return performOperation((x, y) => x + y, a, b, base, 'Сложение')
	}

	// функция вычитания
	function subtract(a: number, b: number, base: NumberBase): string {
		return performOperation((x, y) => x - y, a, b, base, 'Вычитание')
	}

	// функция умножения
	function multiply(a: number, b: number, base: NumberBase): string {
		return performOperation((x, y) => x * y, a, b, base, 'Умножение')
	}

	// функция деления
	function divide(a: number, b: number, base: NumberBase): string {
		return performOperation((x, y) => x / y, a, b, base, 'Деление')
	}

	// вывод в консоль
	const decimalResult = add(10, 5, 'decimal')
	console.log(`Результат в десятичной системе: ${decimalResult}`)

	const binaryResult = subtract(0b1010, 0b0011, 'binary')
	console.log(`Результат в двоичной системе: ${binaryResult}`)

	const hexResult = multiply(0xA, 0x2, 'hexadecimal')
	console.log(`Результат в шестнадцатеричной системе: ${hexResult}`)

	try {
		const decimalDivision = divide(10, 2, 'decimal')
		console.log(`Результат деления в десятичной системе: ${decimalDivision}`)
	} catch (error) {
		console.error(error)
	}

} 
