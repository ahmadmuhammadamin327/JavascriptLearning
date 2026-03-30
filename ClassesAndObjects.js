const student = {
    fullName : "Ahmad Amin",
    marks : 98,
    printMarks: function() {
        console.log("marks", this.marks);
    },
};
const employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    },
    calcTax2 : function() {
        console.log("tax rate is 10%");
    }
};
const karanArjun = {
    salary : 50000,
};
const karanArjun2 = {
    salary : 45000,
};
const karanArjun3 = {
    salary : 40000,
};
const karanArjun4 = {
    salary : 35000,
};
const karanArjun5 = {
    salary : 30000,
};
karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun5.__proto__ = employee;

// Classes Topic
class ToyotaCar {
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let corola = new ToyotaCar();
corola.setBrand("corola");