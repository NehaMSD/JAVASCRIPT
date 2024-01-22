//Looping Statements
/*
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


example1:
arr=[10,20,30] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

example2:
arr=[10,20,20.5] //valid
console.log(arr.length)
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

example3:
arr=[10,20,true,false] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

example4:
arr=[10,"string",20,"kongu"] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
*/

//for in loop
arr=[10,"string",20,"kongu"]
for (const index in arr) {
    console.log(index)
}

arr=[10,"string",20,"kongu"]
for (const index in arr) {
    console.log("The value present in",index,"is:",arr[index])
}

//for of loop
arr=[10,"string",20,"kongu"]
for (const index of arr) {
    console.log(index)
}

arr=[10,"string",20,"kongu"] // correct way
for (const value of arr) {
    console.log(value)
}

//for each loop
arr=[10,"string",20,"kongu"]
arr.forEach(value => {
    console.log(value)
});

eg:
var kongu=new Object()
kongu["fees"]=100000
kongu["Accomodation"]="Good"
kongu["Food"]="Decent"
kongu["HostelCount"]=10
console.log(kongu)

for (value in kongu) {
    console.log(value)
}

for (key in kongu) {
    console.log(key,kongu[key])
}

//for each eg: //error
kongu.foreach((key,element)=>{
    console.log(key,element)
});
