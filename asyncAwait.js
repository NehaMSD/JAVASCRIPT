//async dummy example
/*
async function asAw(){
    var promise=new Promise(
        function(response){
            setTimeout(function(){
                response("Example of asyncAwait")

            },1000)
        });
        console.log(await promise)// no await => pending
}
asAw()
*/

//kind of our own instagram

async function commentCode(){
    return new Promise(
        function(commentValue){
            setTimeout(function(){
                commentValue("This is my comment icon")
            },1000)
        });
}

async function likeCode(){
    return new Promise(
        function(likeValue){
            setTimeout(function(){
                likeValue("This is my like icon")
            },1000)
        });
}

async function post(){ //async and await are give compulsorily at same time.
    var post=new Promise(
        function(postResponse){
            setTimeout(function(){
                postResponse("This is my first post")
            },1000)
        });
        var[feed,comment,like]=await Promise.all([post,commentCode(),likeCode()])
        console.log(feed)
        console.log(comment)
        console.log(like)
}
post()