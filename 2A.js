 // 2A 
 
 const x = () => { // basic function that has been shortend 
    console.log("Hello"); // telling what to print out 
}

x(); // calling on the fnction 

// 2B

const y = (yellow) => { // same arrow function but it has been named yellow 
console.log(yellow); // telling what to print out by using the given name 
}

y("Bye"); // calling on the fnction and telling it whatr to print 

// 2C

let z = (num1, num2) => { // adding two numbers but first given the numbers a name  
    console.log(num1+num2); // telling what to print out on the console 
}
z(2,1); // using the function and telling what the two numbers are 

// 2D

const ages = [25, 31, 42, 77]; // getting an array of numbers 

let a = ages.map((item) => { // givent the numbers the name items so that it wiol be easier to put out 
    if(item > 70) // telling that if the number is above 70 
        return item * 2 // that the number above 70 is to be mulitplied by two
    else // and if its below the number 70n 
        return item; // it will return the original number 
})
console.log(a); // will be printed outin the console 

// 3A
// this will create an empty array called myTasks
let myTasks = [];

let addTasks = (task)=>{ // making a function to be able to add to my array 
    myTasks.push(task); // the push adds to the end of the array 
    console.log(task+"has been added to my tasks!"); //telling that it has  been added to the class 
    return myTasks.length; // this will display the whole array and how many is in it 
}

addTasks("work"); // this will add the work to the array 

// 3C
let listAllTasks= ()=> { // this will list all the tasks in the array 
myTasks.forEach((item)=>{ // this gets all the items from teh array 
    console.log(item); // this displays the array in the console 
})
}
//3D
let deleteTask = (task)=>{ // this is the function to delete a task from the array 

 let index = myTasks.indexOf(task); // this is the start of the function where it acceses the tasks 
 if(index > -1){ // telling is to delete once it has been below one 
 myTasks.splice(index,1); // this is teh code to delete 
 console.log(task+" has been deleted"); // telling that it has been deleted"
 } else { // if its not greater then -1
    console.log(task+ " not found in my tasks"); // it will tell user that its not there
}
}

addTasks("work"); // this added the task work 
addTasks("eat"); // this added the task eat
addTasks("sleep"); // this added the task sleep 
listAllTasks(); // this will show all the tasks in the array 
deleteTask("work"); // this will delete the task work 
deleteTask("run");  // this will delete the task run

