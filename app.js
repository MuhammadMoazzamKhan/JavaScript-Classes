// Question (1);
// var students = [];
// students.splice(0,1,"Sameer","Haider","Ali");
// console.log(students);

// Question (2);
// var object = new Array();
// object.push("Mole");  
// object.push("tools");  
// object.push("panzer");
// console.log(object[1])  
// console.log(object[0])  
// console.log(object[2]) 

// Question (3);
// var op =new Array("Pizza","HEllo","Papa ke pari");

// Question (4);
// var num =new Array(9,2,2,35,5,7,665,64);

// Question (5);
// var bolean = [true,false];

// Question (6);
// var mized = [98,"gta","karachi", "Makhni"];

// // Question (7);
// var education = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Qualifications</h1>");
// document.write("<ol><li>",education[0],"</li>","<li>",education[1],"</li>","<li>",education[2],"</li>","<li>",education[3],"</li>","<li>",education[4],"</li>","<li>",education[5],"</li>","<li>",education[6],"</li>","<li>",education[7],"</li>");

// // Question (8);
// var students= ["Sarah","Raza","Ali"];
// var studentsNum= [90,88,92];
// var totalmarks = 200;
// var resultOfSarah ;
// resultOfSarah = (studentsNum[0]/totalmarks)*100;
// var resultOfRaza ;
// resultOfRaza = (studentsNum[1]/totalmarks)*100;
// var resultOfAli ;
// resultOfAli = (studentsNum[2]/totalmarks)*100;
// document.write("Score of sarah is 90.Percentage: ",resultOfSarah,"<br>");
// document.write("Score of sarah is 88.Percentage: ",resultOfAli,"<br>");
// document.write("Score of sarah is 92.Percentage: ",resultOfAli ,"<br>");

// // Question (9);
// var color = ["Red", "Blue", "Green" ,"Yellow"];
// var wantColor1 = prompt("what color do you want");
// color.unshift(wantColor1);
// // document.write(color);
// var wantColor2 = prompt("what color do you want");
// color.push(wantColor2);
// var wantColor3 = prompt("what color do you want");
// var wantColor4 = prompt("what color do you want");
// color.shift();
// color.unshift(wantColor3,wantColor4);
// color.pop();
// var index = prompt("what color do you want");
// color.push(index);
// var del = prompt("How many color you want to delete") ;
// document.write(color);
// console.log(color);
// if(del == "Red"){
//     color.splice(2,1);
// }
// else if(del == "Blue"){
//     color.splice(3,1);
// }
// else if(del == "Green"){
//     color.splice(4,1)
// } 
// else if(del == "Yellow"){
//     color.splice(5,1);
// }
// else if(del == "Red,Blue,Green,Yellow"){
//     color.splice(2,4);
// } 
// else if(del == "Red,Blue,Green"){
//     color.splice(2,3);
// }
// else if(del == "Red,Blue"){
//     color.splice(2,2);
// }
// else{
//     alert("Thanks for didn't give me input");
// }
// document.write("<h2>",color,"</h2>");

// // Question (10);
// var studentsScore = [320,632,123,324,765];
// document.write(studentsScore,"<br>");
// document.write(studentsScore[4],",",studentsScore[1],",",studentsScore[3],",",studentsScore[0],",",studentsScore[2]);

// // Question (11);
// var city = ["Karachi","Lahore","Hydrabad","Sialkot","Sakkhar","Faislabad"];
// document.write(city ,"<br>");
// var selectedCity = prompt("Where do you live");
// if(selectedCity == "Karachi"){
//     document.write(city[0]);
// }
// else if(selectedCity == "Lahore"){
//     document.write(city[1]);
// }
// else if(selectedCity == "Hydrabad"){
//     document.write(city[2]);
// }
// else if(selectedCity == "Sialkot"){
//     document.write(city[3]);
// }
// else if(selectedCity == "Sakkhar"){
//     document.write(city[4]);
// }
// else if(selectedCity == "Faislabad"){
//     document.write(city[5]);
// }
// else{
//     document.write("NaN");
// }

// // Question (12);
// var arr = ["This", "is", "my", "cat ."];
// document.write(arr.join(" "));

// // Question (13);
// let queue = [];

// queue.push(1);
// queue.push(2);
// queue.push(3);

// document.write(queue.shift());  // Output: 1
// document.write(queue.shift());  // Output: 2
// document.write(queue.shift());  // Output: 3

// // Question (14);
// var hum = [];

// hum.push(1);
// hum.push(2);
// hum.push(3);
// console.log(hum);
// document.write(hum.pop());
// document.write(hum.pop());
// document.write(hum.pop());

// Question (15);
// var mob = ["Apple","Samsung" , "Motorola" , "Nokia" , "Sony"  ,"Haier" ];
// document.write("<select><option>",mob[0],"</option>","<option>",mob[1],"</option>","<option>",mob[2],"</option>","<option>",mob[3],"</option>","<option>",mob[4],"</option>","<option>",mob[5],"</option></select>");
