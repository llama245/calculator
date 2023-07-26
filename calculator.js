// basic functions 
const add =function (a,b) {
    return a + b;
}
const sub = function (a,b) {
    return a - b;
}
const mult = function (a,b) {
    return a * b; 
}
const div = function (a,b) {
    return a / b;
}
// numbers_link buttons with script code 
num0 = document.getElementById("n0")
num1 = document.getElementById("n1")
num2 = document.getElementById("n2")
num3 = document.getElementById("n3")
num4 = document.getElementById("n4")
num5 = document.getElementById("n5")
num6 = document.getElementById("n6")
num7 = document.getElementById("n7")
num8 = document.getElementById("n8")
num9 = document.getElementById("n9")


// dot_link buttons with script code 
dot = document.getElementById("dot")

// operators_link buttons with script code
divide = document.getElementById("divide")
multiply = document.getElementById("multiply")
subtract = document.getElementById("subtract")
sum = document.getElementById("sum")

// operation starters and stoppers link buttons with code 
equal = document.getElementById("equal")
clear = document.getElementById("clear")
space = document.getElementById("space")

//array of numbers and operator to use in screen display 
const operators = ["+","-","x","/"]

//equal button and finishing operation 
equal.addEventListener("click", function(){
    equal.dataset.clicked = "true";
})



const operate = function () {
    let internal = ""

    //event listeners for numbers
    num0.addEventListener("click", function (){
        internal = internal + 0
        console.log(0)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num1.addEventListener("click", function (){
        internal = internal + 1
        console.log(1)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num2.addEventListener("click", function (){
        internal = internal + 2
        console.log(2)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num3.addEventListener("click", function (){
        internal = internal + 3
        console.log(3)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num4.addEventListener("click", function (){
        internal = internal + 4
        console.log(4)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num5.addEventListener("click", function (){
        internal = internal + 5
        console.log(5)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num6.addEventListener("click", function (){
        internal = internal + 6
        console.log(6)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num7.addEventListener("click", function (){
        internal = internal + 7
        console.log(7)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num8.addEventListener("click", function (){
        internal = internal + 8
        console.log(8)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num9.addEventListener("click", function (){
        internal = internal + 9
        console.log(9)
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    //event listener for dot 
    dot.addEventListener("click", function (){
        internal = internal + "."
        console.log(".")
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    //event listeners for operators
    sum.addEventListener("click", function (){
        internal = internal + "+"
        console.log("+")
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    subtract.addEventListener("click", function (){
        internal = internal + "-"
        console.log("-")
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    multiply.addEventListener("click", function (){
        internal = internal + "x"
        console.log("x")
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    divide.addEventListener("click", function (){
        internal = internal + "/"
        console.log("/")
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    //event listeners for operation modifiers  
    clear.addEventListener("click",function (){
        internal = " "
        document.getElementById("screen").innerHTML = internal
    }
    
    ,true)

    space.addEventListener("click",function(){
        internal = internal.slice(0,-1)
        document.getElementById("screen").innerHTML = internal
    }
    
    ,true)

    //event listeners for equal signs, starts operation 
    equal.addEventListener("click", function(){
        
        let position = []
    
        for( let i = 0; i < internal.length; i++){
            if(internal[i]=== operators[0])position.push(i)
        }
        console.log(position)

        
        add_ind = internal.indexOf("+")
        sub_ind = internal.indexOf("-")
        mult_ind = internal.indexOf("x")
        div_ind = internal.indexOf("/")
        if(add_ind != -1){
            let op1 = parseFloat(internal.slice(0,add_ind))
            let op2 = parseFloat(internal.slice(add_ind + 1,))
            const result = add(op1,op2)
            console.log(result)
        }
        
        else if(sub_ind != -1){
            let op1 = parseFloat(internal.slice(0,sub_ind))
            let op2 = parseFloat(internal.slice(sub_ind + 1,))
            const result = sub(op1,op2)
            console.log(result)
        }

        else if(mult_ind != -1){
            let op1 = parseFloat(internal.slice(0,mult_ind))
            let op2 = parseFloat(internal.slice(mult_ind + 1,))
            const result = mult(op1,op2)
            console.log(result)
        }

        else if(div_ind != -1){
            let op1 = parseFloat(internal.slice(0,div_ind))
            let op2 = parseFloat(internal.slice(div_ind + 1,))
            const result = div(op1,op2)
            console.log(result)
        }
        
        // console.log(sub_ind)
        // console.log(mult_ind)
        // console.log(div_ind)
        // console.log(Math.min(add_ind,sub_ind,mult_ind,div_ind))
        
        
        // let calc = internal
        // console.log(calc)
        
    })

    
}
    
operate ()