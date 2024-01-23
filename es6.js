//ES6
//1.var,let,const => refer variable.js

//2.arrow function
var fun=() =>{
    console.log("Hello")
}
fun()

//3.Destructuring 
var arr=[10,20,30,40,50]
var [a,b,c,d,e]=arr //no bracket => undefined
console.log(a,b,c,d,e)

//4.Spread Operator
var arr=[10,20,30,40]
var arr1=[...arr,60,70]
console.log(arr1)

//5.callback using Arrow Function
//form submission example
submitForm=(buttonClick,db)=>{
    setTimeout(()=>{
        console.log(buttonClick)
        db()
    },2000)
}

database=()=>{ //function is passed to object
    console.log("Form submitted successfully")
}

submitForm("Form submit button clicked",database)

//6.promise using Arrow Function
//location eg
isLocationValid=()=>{
    var validLocation="valid";
    if(validLocation=="valid"){
        return true
    }else{
        return false
    }
}
      
location=()=>{
    return new Promise((noerror,error)=>{
        setTimeout(()=>{
        if (isLocationValid()) {
            noerror("Location found");
        } else {
            error("Location not found");
            }
        },1000);
    });
}
      
location()
    .then((noerror)=>{
    console.log(noerror);
    })
    .catch((error)=>{
        console.log(error);
    });
 
//7.asyncAwait uinng Arrow Function
//kind of our own instagram
commentCode=()=>{
    return new Promise((commentValue)=>{
            setTimeout(()=>{
                commentValue("This is my comment icon")
            },1000)
        });
}

likeCode=()=>{
    return new Promise((likeValue)=>{
            setTimeout(()=>{
                likeValue("This is my like icon")
            },1000)
        });
}

const post=async()=>{ //async and await are give compulsorily at same time.
    var post=new Promise((postResponse)=>{
            setTimeout(()=>{
                postResponse("This is my first post")
            },1000)
        });
        var[feed,comment,like]=await Promise.all([post,commentCode(),likeCode()])
        console.log(feed)
        console.log(comment)
        console.log(like)
}
post()
