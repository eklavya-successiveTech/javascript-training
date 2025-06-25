// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
    constructor(balance, owner) {
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log("Your balance is:", this.balance);
    }
}

const account1 = new BankAccount(1000, "Eklavya");

account1.deposit(500);
account1.withdraw(200);
account1.displayBalance(); 
