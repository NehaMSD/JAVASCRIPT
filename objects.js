//Objects

//Object Declarations:
//1st way
var CustomerDetails={
    "Name":"Neha",
    "Age":20,
    "Phone Number":9345890466,
}
console.log(CustomerDetails)
CustomerDetails["id"]="21ECR130"
console.log(CustomerDetails)

//2nd way
var CustomerDetails={}
CustomerDetails["id"]="21ECR130"
CustomerDetails["Name"]="Mythili"
CustomerDetails["Age"]="21"
CustomerDetails["Phone Number"]="1234567899"
console.log(CustomerDetails)

//3rd way
var kongu=new Object()
kongu["fees"]=100000
kongu["Accomodation"]="Good"
kongu["Food"]="Decent"
kongu["HostelCount"]=10
console.log(kongu)

console.log(kongu.Food)
console.log(kongu["HostelCount"])