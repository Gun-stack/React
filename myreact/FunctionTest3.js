function Calculator(x,y){
    this.x=x;
    this.y=y;
    
    this.sum =()=>{
        return x+y;
    }
    this.mul =()=>{
        return this.x*this.y;
    }
}

let calc = new Calculator(20,10);
console.log(`sum=${calc.sum()}`);
console.log(`mul=${calc.mul()}`);