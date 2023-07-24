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

//functions that will trigger on event listener (numbers)
const f0 = function () {
    let screen_display = " "
    screen_display = screen_display + 0
    console.log(screen_display)
    return screen_display
}
const f1 = function () {
    let screen_display = " "
    screen_display = screen_display + 1
    console.log(screen_display)
    return screen_display
}
const f2 = function () {
    let screen_display = " "
    screen_display = screen_display + 2
    console.log(screen_display)
    return screen_display
}
const f3 = function () {
    let screen_display = " "
    screen_display = screen_display + 3
    console.log(screen_display)
    return screen_display
}
const f4 = function () {
    let screen_display = " "
    screen_display = screen_display + 4
    console.log(screen_display)
    return screen_display
}
const f5 = function () {
    let screen_display = " "
    screen_display = screen_display + 5
    console.log(screen_display)
    return screen_display
}
const f6 = function () {
    let screen_display = " "
    screen_display = screen_display + 6
    console.log(screen_display)
    return screen_display
}
const f7 = function () {
    let screen_display = " "
    screen_display = screen_display + 7
    console.log(screen_display)
    return screen_display
}
const f8 = function () {
    let screen_display = " "
    screen_display = screen_display + 8
    console.log(screen_display)
    return screen_display
}
const f9 = function () {
    let screen_display = " "
    screen_display = screen_display + 9
    console.log(screen_display)
    return screen_display
}

//functions that will trigger on event listener (operators)
const opsum = function() {
    let screen_display = " "
    screen_display = screen_display + "+"
    console.log(screen_display)
    return screen_display
}

const opsub = function() {
    let screen_display = " "
    screen_display = screen_display + "-"
    console.log(screen_display)
    return screen_display
}

const opmult = function() {
    let screen_display = " "
    screen_display = screen_display + "x"
    console.log(screen_display)
    return screen_display
}

const opdiv = function() {
    let screen_display = " "
    screen_display = screen_display + "/"
    console.log(screen_display)
    return screen_display
}

const opdot = function () {
    let screen_display = " "
    screen_display = screen_display + "."
    console.log(screen_display)
    return screen_display
}





const operate = function () {
    let op1 = ""
    let op2 = ""
    let op3 = ""
    let op4 = ""
    let op5 = ""
    let internal = ""
    //event listeners for numbers
    num0.addEventListener("click", function (){
        internal = internal + f0()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num1.addEventListener("click", function (){
        internal = internal + f1()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num2.addEventListener("click", function (){
        internal = internal + f2()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num3.addEventListener("click", function (){
        internal = internal + f3()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num4.addEventListener("click", function (){
        internal = internal + f4()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num5.addEventListener("click", function (){
        internal = internal + f5()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num6.addEventListener("click", function (){
        internal = internal + f6()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num7.addEventListener("click", function (){
        internal = internal + f7()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num8.addEventListener("click", function (){
        internal = internal + f8()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    num9.addEventListener("click", function (){
        internal = internal + f9()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    //event listener for dot 
    dot.addEventListener("click", function (){
        internal = internal + opdot()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    //event listeners for operators
    sum.addEventListener("click", function (){
        internal = internal + opsum()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    subtract.addEventListener("click", function (){
        internal = internal + opsub()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    multiply.addEventListener("click", function (){
        internal = internal + opmult()
        document.getElementById("screen").innerHTML = internal
    }
    , true)

    divide.addEventListener("click", function (){
        internal = internal + opdiv()
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
    
    ,true)s

    //event listeners for equal signs, starts operation 
    equal.addEventListener("click", function(){
        let calc = internal
        console.log(calc)
        internal = ""
        
        

    })

    
}
    








operate ()



