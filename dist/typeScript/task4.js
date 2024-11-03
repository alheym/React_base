"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task4 = void 0;
const task4 = () => {
    class Product {
        constructor(id, name, price) {
            this.id = id;
            this.name = name;
            this.price = price;
        }
    }
    class ProductManager {
        constructor() {
            this.products = new Map();
        }
        addProduct(product) {
            this.products.set(product.id, product);
            console.log(`Товар "${product.name}" добавлен.`);
        }
        removeProduct(productId) {
            if (this.products.has(productId)) {
                this.products.delete(productId);
                console.log(`Товар с ID ${productId} удален.`);
            }
            else {
                console.log(`Товар с ID ${productId} не найден.`);
            }
        }
        viewProduct(productId) {
            const product = this.products.get(productId);
            if (product) {
                console.log(`Товар: ${product.name}, Цена: ${product.price}`);
            }
            else {
                console.log(`Товар с ID ${productId} не найден.`);
            }
        }
        listProducts() {
            console.log("Список товаров:");
            this.products.forEach((product) => {
                console.log(`ID: ${product.id}, Название: ${product.name}, Цена: ${product.price}`);
            });
        }
        getProductById(productId) {
            return this.products.get(productId);
        }
    }
    class CartItem {
        constructor(product, quantity) {
            this.product = product;
            this.quantity = quantity;
        }
        getTotalPrice() {
            return this.product.price * this.quantity;
        }
    }
    class Cart {
        constructor() {
            this.items = new Map();
        }
        addProduct(product, quantity = 1) {
            const existingItem = this.items.get(product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
                console.log(`Количество товара "${product.name}" обновлено. Теперь: ${existingItem.quantity}.`);
            }
            else {
                this.items.set(product.id, new CartItem(product, quantity));
                console.log(`Товар "${product.name}" добавлен в корзину.`);
            }
        }
        removeProduct(productId) {
            if (this.items.has(productId)) {
                this.items.delete(productId);
                console.log(`Товар с ID ${productId} удален из корзины.`);
            }
            else {
                console.log(`Товар с ID ${productId} не найден в корзине.`);
            }
        }
        viewCart() {
            console.log("Содержимое корзины:");
            let total = 0;
            this.items.forEach((item) => {
                console.log(`Товар: ${item.product.name}, Количество: ${item.quantity}, Сумма: ${item.getTotalPrice()}`);
                total += item.getTotalPrice();
            });
            console.log(`Итоговая сумма корзины: ${total}`);
        }
        clearCart() {
            this.items.clear();
            console.log("Корзина очищена.");
        }
        getItems() {
            return Array.from(this.items.values());
        }
    }
    class Order {
        constructor(id, items, status = 'Pending') {
            this.id = id;
            this.items = items;
            this.status = status;
        }
        getTotalPrice() {
            return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
        }
        updateStatus(status) {
            this.status = status;
            console.log(`Статус заказа ${this.id} изменен на: ${this.status}`);
        }
        viewOrder() {
            console.log(`Заказ ID: ${this.id}, Статус: ${this.status}`);
            this.items.forEach((item) => {
                console.log(`Товар: ${item.product.name}, Количество: ${item.quantity}, Сумма: ${item.getTotalPrice()}`);
            });
            console.log(`Общая стоимость заказа: ${this.getTotalPrice()}`);
        }
    }
    class OrderManager {
        constructor() {
            this.orders = new Map();
        }
        createOrder(cart) {
            const orderId = `ORD-${Math.floor(Math.random() * 10000)}`;
            const order = new Order(orderId, cart.getItems());
            this.orders.set(orderId, order);
            cart.clearCart();
            console.log(`Заказ ${orderId} создан.`);
            return order;
        }
        updateOrderStatus(orderId, status) {
            const order = this.orders.get(orderId);
            if (order) {
                order.updateStatus(status);
            }
            else {
                console.log(`Заказ с ID ${orderId} не найден.`);
            }
        }
        viewOrders() {
            console.log("Список заказов:");
            this.orders.forEach((order) => {
                order.viewOrder();
            });
        }
        getOrderById(orderId) {
            return this.orders.get(orderId);
        }
    }
    const productManager = new ProductManager();
    productManager.addProduct(new Product("P001", "Смартфон", 30000));
    productManager.addProduct(new Product("P002", "Ноутбук", 80000));
    productManager.listProducts();
    const cart = new Cart();
    cart.addProduct(productManager.getProductById("P001"), 2);
    cart.addProduct(productManager.getProductById("P002"), 1);
    cart.viewCart();
    const orderManager = new OrderManager();
    const order = orderManager.createOrder(cart);
    order.viewOrder();
    orderManager.updateOrderStatus(order.id, 'Completed');
    order.viewOrder();
    orderManager.viewOrders();
};
exports.task4 = task4;
