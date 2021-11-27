console.log("Creating an object Person.It has 3 properties: FirstNname, LastName, Office Address.");
console.log("");
//creating object Person
function Person(FirstName,LastName,OfficeAddress)
{
    this.FirstName=FirstName;
    this.LastName=LastName;
    this["Office Address"]=OfficeAddress;
}
var Person1=new Person("Lakshmi","Surekha","Rajamundry");//Person1
var Person2=new Person("Vaishnavi","Vinnakota","Vishakapatnam");//Person2
var Person3=new Person("Priya","Varshini","Telangana");//Person3

console.log("Properties Of Person1:");
console.log(Person1);
console.log("FirstNname: "+Person1.FirstName);
console.log("LastName: "+Person1.LastName);
console.log("OfficeAddress: "+Person1["Office Address"]);
console.log("");

console.log("Properties Of Person2:");
console.log(Person2);
console.log("FirstNname: "+Person2.FirstName);
console.log("LastName: "+Person2.LastName);
console.log("OfficeAddress: "+Person2["Office Address"]);
console.log("");

console.log("Properties Of Person3:");
console.log(Person3);
console.log("FirstName: "+Person3.FirstName);
console.log("LastName: "+Person3.LastName);
console.log("OfficeAddress: "+Person3["Office Address"]);
console.log("");

