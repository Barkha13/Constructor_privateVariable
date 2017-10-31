function Ninja(name){
    this.name = name;
    this.health = 100;

    var speed = 3;
    var strength = 3;

    this.getStrength = function(){ 
        return strength;
    }

    this.sayName = function(){
        console.log("My ninja name is "+this.name);
    }
    this.showStats = function(){
        console.log("Name: "+this.name+",Health"+this.health+",Speed:"+speed+",Strength:"+strength);
    }
    this.drinkkSake = function(){
        this.health +=10;
    }
}

function A(name){
    this.name = name;
    this.sayHi = function(){
    console.log(this.name);}
}

Ninja.prototype.punch = function(inja){
    if (inja instanceof Ninja){
        inja.health -=5;
        console.log(Ninja.name+" was punched by "+this.name+" and lost 5 Health!");
    }
    else{
        console.log("Invalid");
    }
    return this;
}
Ninja.prototype.kick = function(inja){
    if (inja instanceof Ninja){
            this.strength = inja.getStrength()*5;
            inja.health -=this.strength;
            console.log(inja.health);
            console.log(inja.name+" was kicked by "+this.name+" and lost 15 Health!");
    }
    else{
        console.log("invalid");
    }
    return this;
}

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
var b = new A("hi");
b.sayHi();
red_ninja.punch(blue_ninja);
blue_ninja.kick(red_ninja);
red_ninja.punch(b);