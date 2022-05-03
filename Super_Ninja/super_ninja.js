class Ninja{
    constructor(name, health, speed=3, strength=3){
        this.name= name;
        this.health= health;
        this.speed= speed;
        this.strength= strength;
    }
    sayName(){
        console.log(`Hi my name is ${this.name}`)
        return this
    }
    
    showStats(){ 
        console.log(`Hi my name is ${this.name}, I am ${this.health}, I have ${this.speed} and I have ${this.strength} strength`)
        return this
    }
    
    drinkSake(){
        console.log("sips Sake...I feel so alive!!")
        this.health+=10;
        return this
    } 
}    

let n1= new Ninja ("James Carter", "100", "60","70")
let n2= new Ninja ("Desiree Fire", "75", "80","65")
let n3= new Ninja ("Janet Fists", "100", "90","80")

n1.sayName().showStats().drinkSake();



class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health=200,speed=10, strength=10)
        this.wisdom=wisdom;
    }

    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two weeks!")
    }
}

const s1= new Sensei("Master Yoda");
s1.speakWisdom();