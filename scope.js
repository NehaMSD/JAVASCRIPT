//scope

//global scope
//for loop
sum=0;
for(var i=0;i<10;i++){
    sum+=i;
}
console.log(sum)

//while loop
i=0
while(i<10){
    sum+=i
    i++
}
console.log(sum)

//do...while
i=0
do{
    sum+=i
    i++
}while(i<10)
console.log(sum)

/*
//local scope => we can't access i outside the block
for(var i=0;i<5;i++){
    console.log(i)
}
console.log(i) => reference error

//block scope
var a=10
console.log(a)//10
{
    let a=5//5
    let b=5//5
    console.log(a)
    console.log(b)
}
console.log(a)//10
*/

var a=10
console.log(a)
{
    a=5 //without let
    let b=5
    console.log(a)
    console.log(b)
}
console.log(a)

