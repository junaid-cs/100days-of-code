class Bankaccount {
    customorname;
    accountno = Date.now();
    balance;
    constructor(customorname,balance = 0){
        this.customorname = customorname
        this.balance = balance;
    }
    display(){
        console.log(this.customorname,this.balance);
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        this.balance -= amount;
    }
}

let user1=new Bankaccount('Jay');
console.log(user1)
user1.deposit(2000);
user1.withdraw(100);
user1.display();