let users={
    getname:function(){
        return(`${this.fisrtname} ${this.lastname}`);
    },
    getage:function(){
            return("age");
    }
}


let std={
    fisrtname:'M',
    lastname:"Jay",
    // getage:function(){
    //     console.log("your age");
    // }
}
let tea={
    fisrtname:'Mr',
    lastname:"Junaid",
    // getage:function(){
    //     console.log("teacher age")
    // }
}
std.__proto__=users;
tea.__proto__=users;

console.log(std.getname());
console.warn(tea.getname());