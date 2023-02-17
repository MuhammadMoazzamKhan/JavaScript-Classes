// // Question (1);
// var arr = [[]];
// arr[0].push(1);
// console.log(arr);

// // Question (2);
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
// document.write(matrix[0],"<br>");
// document.write(matrix[1],"<br>");
// document.write(matrix[2]);

// // Question (3);
// var moreMulti = [
//     [1],[2],[3],[4],[5],[6],[7],[8],[9],[10]
// ];
// document.write(moreMulti[0],"<br>");
// document.write(moreMulti[1],"<br>");
// document.write(moreMulti[2],"<br>");
// document.write(moreMulti[3],"<br>");
// document.write(moreMulti[4],"<br>");
// document.write(moreMulti[5],"<br>");
// document.write(moreMulti[6],"<br>");
// document.write(moreMulti[7],"<br>");
// document.write(moreMulti[8],"<br>");
// document.write(moreMulti[9]);

// Question (4);
// var tableInput = prompt("Enter a number to show multiplication table .");
// var tableLenght = prompt("Enter lenght MUltiplication table .");
// for(var i = 1; i<= tableLenght; i++){
//     document.write(tableInput + " x " + i + " = " + tableInput * i + "<br>");
// }

// Question (5);
// var fruits = ["Apple" , "Banana","Orange", "Graphs", "Strawberry"];
// document.write(fruits[0] +"<br>" );
// document.write(fruits[1] +"<br>" );
// document.write(fruits[2] +"<br>" );
// document.write(fruits[3] +"<br>" );
// document.write(fruits[4] +"<br>" );
// for(var i = 0; i<fruits.length; i++){
//     document.write("Elements at index "+ i +" is "+ fruits[i] +"<br>" );
// }

// Question (6);
// for(var i = 1; i <= 15; i++){
//     document.write(i+",");
//   }

// for(var i = 1; i <= 10; i--){
//     document.write(i+",");
// }
// for(var i = 0; i <= 20; i += 2){
//     document.write(i);
// }
// for(var i = 1; i<= 19; i+=2 ){
//     document.write(i+",");
// }
// for(var i = 2; i <=20; i+=2){
//     document.write(i+"k,");
// }


// Question (7);
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakeryItemsUser = prompt("Welceom to ABC bakery, What do you want to order sir/ ma'am");
// var flag = false;
// for(var i=0; i<= bakeryItems.length; i++){
//     if(bakeryItemsUser == bakeryItems[i]){
//         document.write(bakeryItemsUser+" is available at index "+ i + " in our bakery" );
//         flag = true;
//         break;
// }
// }

// if(flag == false){
//    document.write("This item isn't available");
// }


// Question (8);

// const A = [24, 53, 78, 91, 12];
// let min_num = A[0];  // initialize min_num to the first element of the array

// for(let i = 1; i < A.length; i++){
//   if(A[i] < min_num){
//     min_num = A[i];
//   }
// }

// document.write("The smallest number in the array is: " + min_num);

// Question (9);
// var  num = [24, 53, 78, 91, 12];
// var max = num[0];

// for(i = 0; i <= num.length; i++){
//     if(num[i] > max){
//         max = num[i];
//     }
// }
// document.write("The largest number in the array is: " + max);

// Question (10);
// for(i = 5; i <= 100; i+= 5){
//     document.write(i+" ");
// }
