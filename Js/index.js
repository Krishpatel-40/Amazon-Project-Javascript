console.log("Hii there");
let name = "Krish";
console.log(name);
let interest  = 0.3;
interest=1
console.log(interest);
let Fname = undefined;
let any = null;
//objects
let objName={
 name:"Krish",
    age:22 
};
//to acces objs
objName.name="john";
console.log(objName);
console.log(objName.name);
//refrences types 
function incerase(){    // Object Methods
    objName.age++;
}
incerase();
console.log(objName.age);
//another way to create obj
function obj(nam,age){
    return{
        nam,
        umar:age,
        anyFun:function(){
            console.log("This is inside object function");
        }
    }
}
const newname = obj("Krish",22);
newname.anyFun();
console.log(newname.umar);

//another way to cerate a obj using constructor function
function Construct(radii){
    this.radii=radii;
    let defaultloc = {x:0,y:0};
    this.data = {y:225,z:"Complexity"};
    let anotherFunction=function(){   //aane let krva thi aano scope limited thai jai etle abstraction
       console.log("this is a private event.") //aane bar thi access no kari ekai  
    }
    this.draw = function(){
        console.log("Draw");
        anotherFunction();      //access krva mate bijani aandar thi call ka to access karvanu aane 
                                // aane e this. hoi jem ke draw
    }
    
    Object.defineProperty(this,"defaultloc",{
       get:function(){
           return defaultloc;
       },
       set:function(value){
           defaultloc=value;
       }
   });
}
const cors = new Construct(10);
console.log(cors.radii);
cors.draw();
 
//constructor property

// objects are dynamic we can add and remove properties like
cors.newproperty = {x:25};
delete cors.radii;   // aa property delete kari dese

//arrays
let arr = [1,2,3,4,5];

arr[2]="hii";
console.log(arr);
console.log(arr[0]);
console.log(arr.length);

 //functions
 function fname(para){
    console.log("hello "+para);
 }
 fname("World");

 function square(no){
    return no*no;
 }
console.log(square(2));
 //OOPS
 //Encapsulation to reduce(complexity) function with more Parameters
 let employee={
    basesal: 500,
    rate : 20,
    bonus: 100,
    total(){
        return (this.basesal*this.rate)+this.bonus;
    }
 };                              
 console.log(employee.total());


//Enumerating properties
for(let e in cors){
    console.log(e,cors [e]);
}// aa object ni baddhi property dekhadse 

//Abstraction
