function Person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
Person.prototype.newproto=function(){

    return `${this.firstname} ${this.lastname}`;
}
// Inheratance Constructor
function Customor(firstname,lastname,phone,membership){
    Person.call(this,firstname,lastname);
    this.phone=phone;
    this.membership=membership;
}
Customor.prototype=Object.create(Person.prototype);
Customor.prototype.newproto=Customor;
Customor.prototype.newproto=function(){
    return `${this.firstname} ${this.lastname} welcome to the store your membership is ${this.membership}`;
}
let person=new Person('M','Jay');
console.log(person.newproto());
let customor=new Customor("Mudassir","Rehman",'333','standard');
console.log(customor.newproto());