// Object Prototype
// Person Prototype

let Person=function (fisrtname,lastname,age){
    this.fisrtname=fisrtname;
    this.lastname=lastname;
    // this.age=age;

}
Person.prototype.getfullname=function (){
    // return(this)
    return `${this.fisrtname} ${this.lastname}`;
}
Person.prototype.getage=function (age){
    this.age=age;
    return age-2;
}
Person.prototype.getmarry=function(name){
    this.lastname=name;
}


let display=new Person("mery","Janson");
console.log(display.getfullname())
console.log("After marrage")
display.getmarry('smith');
console.log(display.getfullname())
console.log(display.getage(22));
