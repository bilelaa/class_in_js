class Count {
    constructor(intial){
        this.count = intial
    }

    inc() {
       return this.count++
    }
    dec() {
      return   this.count--
    }
}


class CountWithReset extends Count {
    constructor(intial){
        super(intial)
        
    }

    reset(){
       return  this.count = 0
    }
}


let myNew_Counter = new CountWithReset(0) 

console.log(myNew_Counter);
myNew_Counter.inc()
myNew_Counter.inc()
myNew_Counter.inc()

console.log(myNew_Counter.count);
myNew_Counter.reset()
console.log(myNew_Counter.count);


