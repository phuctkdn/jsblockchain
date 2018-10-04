class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
        alert("I'm a Cat, My name is " + this.name);
        document.writeln("I'm a Cat, My name is " + this.name);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(this.name + ' roars.');
        alert("I'm a Lion, My name is " + this.name);
        document.writeln("I'm a Lion, My name is " + this.name);
    }
}
class Tiger extends Cat {
    speak() {
        super.speak();
        console.log(this.name + ' roars.');
        alert("I'm a Tiger, My name is " + this.name);
        document.writeln("I'm a Tiger, My name is " + this.name);
    }
}
window.open()
var t = new Cat('Jessi');
t.speak();
var t1 = new Lion('Jessiiiiii');
t1.speak();
var t2 = new Tiger('Bani');
t2.speak();
var t3 = new Lion('Butini');
t3.speak();
var t4 = new Lion('Vicki');
t4.speak();


// Fuzzy makes a noise.
// Fuzzy roars.