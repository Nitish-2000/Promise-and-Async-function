//call back
/* when an function is passed as an argument/parameter of other function called call back function*/
//one example of call back function  is set time out function

function call(){
    setTimeout(()=>{  
    console.log("1) Example for call back function"),8000;
  
})
}
call();

//Call back hell 
/*multiple function are passed as argument of other function called call back hell*/

/*  {
    (
        {
            (
                {}
            )
        }
    )
}

//Promise:
/* To over come Call back hell Promise id used*/
//It has two parameters "Resolve " and "Reject"

/* syntax
var varname = new promise(resolve,reject)=>{

}*/
let a = new Promise((resolve,reject)=>{
    if(10>5){
        console.log("Example of promise")
    }
    else{
        console.log("Not an example")
    }
}
)
//console.log(a);
//output
/*Example of promise
sript.js:41 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined

we got the output but promise still in pending state
*/


/*In promise we use ".then and ".catch which get data*/

a.then((data)=>console.log(data)).catch((error)=>console.log("Some thing went wrong"));
/* output
Example of promise 
we get clean output when we use ".then and .catch"*/


//Promise chaining  
/*It is an dependent operation the result of first promise is an input of second primise*/

//promise.all()
/*it is used for multiple promises
Iwaites until all promises are resolved and prints the result in array*/

//promise.allsettled()
/*It is used for non chain promises and returns the state of each promises
and output is an seperate promise object*/

//Fetch It takes api as parameter and fetches the JSON data

const countries = fetch("https://restcountries.com/v2/all");//using fetch to get data from api

/*using .then to tetrive data*/

countries.then((data)=>data.json()).then((data1)=>{
// for(var i = 0;i<data1.length; i++){
//     console.log(data1[i].capital);}
console.log(data1[0].capital)
})

//Async Function
/*it always returns the promise*/

async function final(){
    const rest = await fetch("https://restcountries.com/v2/all");
    const restparsed = await rest.json();
    // for(var i = 0;i<restparsed.length; i++){
    //          console.log(restparsed[i].capital);}//This is using for looop


    // const result = restparsed.map((data)=>{
    //      data.capital;
    // })
    // console.log(result);   //This is using Map function(Ternary operator)

    console.log(restparsed[1])  //General example

}
final();
//async function is an advancement of promises and then
// from




