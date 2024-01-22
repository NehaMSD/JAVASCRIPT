//Hoisting

/*
//variable hoisting
console.log(a)
let a=10 //reference error

console.log(a)
var a=10 //undefined
*/

//functional hoisting
konguClg(5,10) 
function konguClg(a,b){
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("The number",i,"is even")
        }
        else{
            console.log("The number",i,"is odd")
        }
    }
}

konguClg()
console.log(a) //undefined
function konguClg(){
    var a=1
}