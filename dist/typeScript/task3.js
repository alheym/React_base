"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task3 = void 0;
const task3 = () => {
    class DebitAccount {
        constructor(id, initialBalance, minBalance = 0) {
            this.id = id;
            this.balance = initialBalance;
            this.minBalance = minBalance;
        }
        deposit(amount) {
            if (amount <= 0) {
                console.log("Сумма пополнения должна быть больше 0.");
                return;
            }
            this.balance += amount;
            console.log(`Счет ${this.id}: Пополнено на ${amount}. Текущий баланс: ${this.balance}.`);
        }
        withdraw(amount) {
            if (amount <= 0) {
                console.log("Сумма снятия должна быть больше 0.");
                return;
            }
            if (this.balance - amount < this.minBalance) {
                console.log(`Недостаточно средств. Минимальный баланс должен быть ${this.minBalance}.`);
                return;
            }
            this.balance -= amount;
            console.log(`Счет ${this.id}: Снято ${amount}. Текущий баланс: ${this.balance}.`);
        }
        checkBalance() {
            console.log(`Счет ${this.id}: Текущий баланс - ${this.balance}.`);
            return this.balance;
        }
    }
    class CreditAccount {
        constructor(id, initialBalance, creditLimit) {
            this.id = id;
            this.balance = initialBalance;
            this.creditLimit = creditLimit;
            this.debt = 0;
        }
        deposit(amount) {
            if (amount <= 0) {
                console.log("Сумма пополнения должна быть больше 0.");
                return;
            }
            if (this.debt > 0) {
                const debtPayment = Math.min(this.debt, amount);
                this.debt -= debtPayment;
                amount -= debtPayment;
                console.log(`Счет ${this.id}: Оплачено ${debtPayment} долга. Остаток долга: ${this.debt}.`);
            }
            this.balance += amount;
            console.log(`Счет ${this.id}: Пополнено на ${amount}. Текущий баланс: ${this.balance}.`);
        }
        withdraw(amount) {
            if (amount <= 0) {
                console.log("Сумма снятия должна быть больше 0.");
                return;
            }
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Счет ${this.id}: Снято ${amount}. Текущий баланс: ${this.balance}.`);
            }
            else {
                const overdraft = amount - this.balance;
                if (this.debt + overdraft > this.creditLimit) {
                    console.log(`Превышение кредитного лимита. Лимит: ${this.creditLimit}.`);
                    return;
                }
                this.debt += overdraft;
                this.balance = 0;
                console.log(`Счет ${this.id}: Снято ${amount} с использованием кредита. Текущий баланс: ${this.balance}, Долг: ${this.debt}.`);
            }
        }
        checkBalance() {
            console.log(`Счет ${this.id}: Текущий баланс - ${this.balance}, Долг - ${this.debt}.`);
            return this.balance;
        }
        checkDebt() {
            console.log(`Счет ${this.id}: Текущий долг - ${this.debt}.`);
            return this.debt;
        }
    }
    const debitAccount = new DebitAccount("D-1001", 1000, 50);
    debitAccount.deposit(200);
    debitAccount.withdraw(500);
    console.log('Попытка снять больше, чем разрешено минимальным балансом');
    debitAccount.withdraw(800);
    debitAccount.checkBalance();
    const creditAccount = new CreditAccount("C-2001", 500, 1000);
    creditAccount.deposit(300);
    console.log('В пределах кредитного лимита');
    creditAccount.withdraw(1000);
    console.log('Превышение кредитного лимита');
    creditAccount.withdraw(800);
    creditAccount.checkBalance();
    creditAccount.checkDebt();
};
exports.task3 = task3;
