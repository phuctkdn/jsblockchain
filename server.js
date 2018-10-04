var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Object on Java Script & PI number is " + Math.PI + " \n" );

    class Cat {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(this.name + ' makes a noise.\n');
            response.write("I'm a Cat, My name is " + this.name + '\n');

        }
    }

    class Lion extends Cat {
        speak() {
            super.speak();
            console.log(this.name + ' roars. \n');
            response.write("I'm a Lion, My name is " + this.name + '\n');

        }
    }
    class Tiger extends Cat {
        speak() {
            super.speak();
            console.log(this.name + ' roars. \n');
            response.write("I'm a Tiger, My name is " + this.name + '\n');

        }
    }

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
    response.end();
}).listen(80);