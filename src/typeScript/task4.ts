type OrderStatus = 'Pending' | 'Completed' | 'Cancelled';

interface IProduct {
  id: string;
  name: string;
  price: number;
}

export const task4 = () => {

	class Product implements IProduct {
		id: string
		name: string
		price: number

		constructor(id: string, name: string, price: number) {
			this.id = id
			this.name = name
			this.price = price
		}
	}

	class ProductManager {
		private products: Map<string, Product> = new Map()

		addProduct(product: Product): void {
			this.products.set(product.id, product)
			console.log(`Товар "${product.name}" добавлен.`)
		}

		removeProduct(productId: string): void {
			if (this.products.has(productId)) {
				this.products.delete(productId)
				console.log(`Товар с ID ${productId} удален.`)
			} else {
				console.log(`Товар с ID ${productId} не найден.`)
			}
		}

		viewProduct(productId: string): void {
			const product = this.products.get(productId)
			if (product) {
				console.log(`Товар: ${product.name}, Цена: ${product.price}`)
			} else {
				console.log(`Товар с ID ${productId} не найден.`)
			}
		}

		listProducts(): void {
			console.log("Список товаров:")
			this.products.forEach((product) => {
				console.log(`ID: ${product.id}, Название: ${product.name}, Цена: ${product.price}`)
			})
		}

		getProductById(productId: string): Product | undefined {
			return this.products.get(productId)
		}
	}

	class CartItem {
		product: Product
		quantity: number

		constructor(product: Product, quantity: number) {
			this.product = product
			this.quantity = quantity
		}

		getTotalPrice(): number {
			return this.product.price * this.quantity
		}
	}

	class Cart {
		private items: Map<string, CartItem> = new Map()

		addProduct(product: Product, quantity: number = 1): void {
			const existingItem = this.items.get(product.id)
			if (existingItem) {
				existingItem.quantity += quantity
				console.log(`Количество товара "${product.name}" обновлено. Теперь: ${existingItem.quantity}.`)
			} else {
				this.items.set(product.id, new CartItem(product, quantity))
				console.log(`Товар "${product.name}" добавлен в корзину.`)
			}
		}

		removeProduct(productId: string): void {
			if (this.items.has(productId)) {
				this.items.delete(productId)
				console.log(`Товар с ID ${productId} удален из корзины.`)
			} else {
				console.log(`Товар с ID ${productId} не найден в корзине.`)
			}
		}

		viewCart(): void {
			console.log("Содержимое корзины:")
			let total = 0
			this.items.forEach((item) => {
				console.log(`Товар: ${item.product.name}, Количество: ${item.quantity}, Сумма: ${item.getTotalPrice()}`)
				total += item.getTotalPrice()
			})
			console.log(`Итоговая сумма корзины: ${total}`)
		}

		clearCart(): void {
			this.items.clear()
			console.log("Корзина очищена.")
		}

		getItems(): CartItem[] {
			return Array.from(this.items.values())
		}
	}

	class Order {
		id: string
		items: CartItem[]
		status: OrderStatus

		constructor(id: string, items: CartItem[], status: OrderStatus = 'Pending') {
			this.id = id
			this.items = items
			this.status = status
		}

		getTotalPrice(): number {
			return this.items.reduce((total, item) => total + item.getTotalPrice(), 0)
		}

		updateStatus(status: OrderStatus): void {
			this.status = status
			console.log(`Статус заказа ${this.id} изменен на: ${this.status}`)
		}

		viewOrder(): void {
			console.log(`Заказ ID: ${this.id}, Статус: ${this.status}`)
			this.items.forEach((item) => {
				console.log(`Товар: ${item.product.name}, Количество: ${item.quantity}, Сумма: ${item.getTotalPrice()}`)
			})
			console.log(`Общая стоимость заказа: ${this.getTotalPrice()}`)
		}
	}

	class OrderManager {
		private orders: Map<string, Order> = new Map()

		createOrder(cart: Cart): Order {
			const orderId = `ORD-${Math.floor(Math.random() * 10000)}`
			const order = new Order(orderId, cart.getItems())
			this.orders.set(orderId, order)
			cart.clearCart()
			console.log(`Заказ ${orderId} создан.`)
			return order
		}

		updateOrderStatus(orderId: string, status: OrderStatus): void {
			const order = this.orders.get(orderId)
			if (order) {
				order.updateStatus(status)
			} else {
				console.log(`Заказ с ID ${orderId} не найден.`)
			}
		}

		viewOrders(): void {
			console.log("Список заказов:")
			this.orders.forEach((order) => {
				order.viewOrder()
			})
		}

		getOrderById(orderId: string): Order | undefined {
			return this.orders.get(orderId)
		}
	}

	const productManager = new ProductManager()
	productManager.addProduct(new Product("P001", "Смартфон", 30000))
	productManager.addProduct(new Product("P002", "Ноутбук", 80000))
	productManager.listProducts()

	const cart = new Cart()
	cart.addProduct(productManager.getProductById("P001")!, 2)
	cart.addProduct(productManager.getProductById("P002")!, 1)
	cart.viewCart()

	const orderManager = new OrderManager()
	const order = orderManager.createOrder(cart)
	order.viewOrder()
	orderManager.updateOrderStatus(order.id, 'Completed')
	order.viewOrder()

	orderManager.viewOrders()
}