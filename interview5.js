//Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
element=document.getElementsByTagName("h1");
element[0].style.display="none";
function display(){
    element[0].style.display="block"
}

// //Write code to get 1st H1 element from a webpage using DOM
// element1=document.getElementsByTagName("h1")
// console.log(element1[0]);

// //Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
// function showTime(){
//     const date= new Date();
//     const h=date.getHours();
//     const m=date.getMinutes();
//     const s=date.getSeconds();
//     console.log(h, m, s);
//     setTimeout(()=>{
//         showTime();
//     },1000);
// }
// // showTime()


//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function replace() {
    const element=document.getElementById("hello");
    element.innerText=" Welcome To Elevation Academy";   
}




//Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text
function hide(){
    const element5=document.getElementsByClassName("hell")
    element5[0].style.display="none"
}


//Given an array of 0's and 1's find out number of 0's
 Arr=[1,0,0,1,0,1,0,0,1]
const filternum=Arr.filter(item=>item<1)
console.log(filternum);

//  let count=0;
//  for(let i=0 ; i<Arr.length;i++){
//     if (Arr[i]==0){
//      count=count+1
// }
//  }
//  console.log(count); 

//let array = [1,0,1,0,1,0];
// let count=0;
// for(let i of array){
//     if(i == 0){
//          count=count+1;
//     }
// }

// console.log(count);

//Given an array find out total no. of odd and even nos.

//  let array1=[2,3,6,78,554,21]
// let evensum = 0, oddsum=0;
    
//     for (let i = 0; i < array1.length; i++) {
//         if (Arr[i] % 2 === 0) {
//             evensum=evensum+1
//         } else {
//             oddsum=oddsum+1;
//         }
//     }
//     let array2 = [evensum, oddsum];

//    console.log(array2);








//Given a S find out number of vowels 
let S="saikiran"

// let vowels=0;
//     vowels = S.match(/[aeiou]/gi).length;
//     console.log(vowels)
let vowelsCount=0;
for (var i = 0; i <= S.length - 1; i++) {
      if (S.charAt(i) == "a" || S.charAt(i) == "e" || S.charAt(i) == "i" || S.charAt(i) == "o" || S.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }console.log(vowelsCount);

//let vowels = ["a","e","i","o","u"];
// let str = "hi friends";
// var S=0
// for(let s of str){
//     if(vowels.includes(s)){
//           S=S+1;
//     }
// }
// console.log(S);


//Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same

let obj1 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array']
}

let obj2 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array2']
}

function sameArray(o1, o2) {
    let arr1 = o1.b;
    let arr2 = o2.b;

    if(arr1.length != arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(sameArray(obj1, obj2)); // false


//