//functions

function fun(){
    console.log("Function without Argument and without return type")
}
fun()


function fun(a,b){
    console.log("Function With Argument and without return type")
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("Even Number",i)
        }
        else{
            console.log("Odd Number",i)
        }
    }
}
fun(5,10)


function fun(a){
    console.log("Function With Argument and with return type")
    fact=1
    for(var i=1;i<=a;i++){
        fact*=i
    }
    return fact
}
var fact=fun(4)
console.log("Fact of 4:",fact) 


function fun(){
    console.log("Function Without Argument and with return type")
    fact=1
    for(var i=1;i<=5;i++){
        fact*=i
    }
    return fact
}
var fact=fun()
console.log(fact)
