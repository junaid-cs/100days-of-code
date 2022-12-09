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
        if(amount > this.balance){
            console.log("You donnot have suffient amount");
        }else{
            this.balance -=amount;
        }
    }
}

class Currentaccount extends Bankaccount {
    withdraw_limit=5000;
    constructor(customorname,balance = 0){
       super(customorname,balance)
    }
}
let user1=new Currentaccount("Jay",50000);
console.log(user1)
user1.withdraw(500);
user1.display();