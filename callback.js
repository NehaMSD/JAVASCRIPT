//callback
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

//form submission example
function submitForm(buttonClick,db){
    setTimeout(function(){
        console.log(buttonClick)
        db()
    },2000)
}

function database(){ //function is passed to object
    console.log("Form submitted successfully")
}

submitForm("Form submit button clicked",database)