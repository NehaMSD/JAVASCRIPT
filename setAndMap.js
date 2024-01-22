//Set

setExample=new Set("aiadmk","bjp","congress")
console.log(setExample)

setExample=new Set(["aiadmk","bjp","congress"])
console.log(setExample)
setExample.add("dmk")
setExample.add("aiadmk")
console.log(setExample)

//for of loop = output prints.
for (value of setExample) {
    console.log(value)
}


//for in loop = no output.
setExample=new Set(["aiadmk","bjp","congress"])
for(key in setExample){
    console.log(key)
}


//Map
mapEg=new Map([
    ["id","21ECR130"],
    ["name","neha"],
])
console.log(mapEg)

//for of loop
mapEg=new Map([
    ["id","21ECR130"],
    ["name","neha"],
])
for(value of mapEg){
    console.log(value)
}

//for in loop = no output
mapEg=new Map([
    ["id","21ECR130"],
    ["name","neha"],
])
for(key in mapEg){
    console.log(key)
}

console.log(mapEg.has("name")) //if the element is present or not

//eg
mapEg=new Map([
    ["id","21ECR130"],
    ["name","neha"],
])
mapEg.set("age","20")
mapEg.set("phone number","9345890466")
mapEg.delete("name")
console.log(mapEg)




