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


//buttons 
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


function operate(){

    let internal = ""
    let operator = ""
    
    //event listeners for numbers

    num0.addEventListener("click", function(){
        internal = internal + 0
        document.getElementById("screen").innerHTML = internal
    })

    num1.addEventListener("click", function(){
        internal = internal + 1
        document.getElementById("screen").innerHTML = internal
    })

    num2.addEventListener("click", function(){
        internal = internal + 2
        document.getElementById("screen").innerHTML = internal
    })

    num3.addEventListener("click", function(){
        internal = internal + 3
        document.getElementById("screen").innerHTML = internal
    })

    num4.addEventListener("click", function(){
        internal = internal + 4
        document.getElementById("screen").innerHTML = internal
    })

    num5.addEventListener("click", function(){
        internal = internal + 5
        document.getElementById("screen").innerHTML = internal
    })

    num6.addEventListener("click", function(){
        internal = internal + 6
        document.getElementById("screen").innerHTML = internal
    })

    num7.addEventListener("click", function(){
        internal = internal + 7
        document.getElementById("screen").innerHTML = internal
    })

    num8.addEventListener("click", function(){
        internal = internal + 8
        document.getElementById("screen").innerHTML = internal
    })

    num9.addEventListener("click", function(){
        internal = internal + 9 
        document.getElementById("screen").innerHTML = internal
    })

    //event listener for dot
    dot.addEventListener("click", function(){
        internal = internal + "."
        document.getElementById("screen").innerHTML = internal
    })

    //event listener for operators

    sum.addEventListener("click", function(){
        internal = internal + "+"
        document.getElementById("screen").innerHTML = internal
    })

    subtract.addEventListener("click", function(){
        internal = internal + "-"
        document.getElementById("screen").innerHTML = internal
    })

    multiply.addEventListener("click", function(){
        internal = internal + "x"
        document.getElementById("screen").innerHTML = internal
    })

    divide.addEventListener("click", function(){
        internal = internal + "/"
        document.getElementById("screen").innerHTML = internal
    })

    //clear button and backspace button
    clear.addEventListener("click", function(){
        internal = ""
        document.getElementById("screen").innerHTML = internal
    })

    space.addEventListener("click", function(){
        internal = internal.slice(0,-1)
        document.getElementById("screen").innerHTML = internal
    })

    equal.addEventListener("click", function(){
        let op1 = ""
        let op2 =""
        console.log(internal)
        let add_ind = internal.toString().indexOf("+")
        let sub_ind = internal.toString().indexOf("-")
        let mult_ind = internal.toString().indexOf("x")
        let div_ind = internal.toString().indexOf("/")

        console.log(add_ind)
        console.log(sub_ind)
        console.log(mult_ind)
        console.log(div_ind)
    })
    


}

operate()
