function ramuSomu(WelcomeMessage,callback){ //callback may be any name.
    setTimeout(function(){
        console.log(WelcomeMessage)
        callback();
    },2000)

}
function miniani(){
    console.log("don't come")
}
ramuSomu("Hello ramuSomu \nwelcome to kec",miniani)