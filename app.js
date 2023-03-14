// Chapter # 21 to 15 
// Question (1)
// var first = prompt("Enter your first Name.");
// var sec = prompt("Enter your last Name.");
// alert("Assalam-o-Alaikum "+ first +" "+ sec);

// Question (2)
// var take = prompt("Enter your favorite phone name.");
// document.write("Your favorite phone name is " + take +"<br>");
// document.write("lenght of sring "+ take.length );

// Question (3)
// var county = prompt("Enter any counrty name.");
// var which = prompt("ask me any index number of letter");
// var result = county.indexOf(which);
// alert(result+ " it number of you asked me");

// Question (4)
// var str = "Hello World";
// var result = str.lastIndexOf("l");
// alert(result);

// Question (5)
// var counrty = prompt('Enter any country name .');
// alert("Third letter of this country "+ counrty +"( "+ counrty.charAt(3) +" )");

// Question (6)
// console.log(first.concat(" nikal " +sec));

// Question (7)
// var str = "Hyderabad";
// var replace = "Islam";
// console.log(replace + str.slice(5));

// Question (8)
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replaceAll("and","&");
// console.log(message);

// Question (9)
// var str = 893045;
// document.write( "value: " + str + "<br>");
// document.write( "type: " + typeof "" + "<br>");
// document.write( "value: " + str + "<br>");
// document.write( "type: " + typeof str + "<br>");

// Question (10)
// var first = prompt("Enter your name");
// document.write(first.toUpperCase());

// Question (11)
// var first = prompt("Enter your name");
// document.write(first.toLowerCase());

// Question (12)
// var num = 35.36;
// var numString = num.toString().replace(".","");
// console.log(numString);

// Question (13)
// var userName = prompt("Enter your name");
// var char = userName.charCodeAt();
// if(char == 33 || char == 44 || char == 46 || char == 64){
//         alert("dont use these special symbol [! , . @] ");
//     }else{
//             alert("Your name has saved");
//         }

// Question (14)
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var get = prompt("What do you want to order");
// var flag;
// for(var i = 0; i < arr.length; i++){
    //     if(arr[i] == get){
        //         alert(get +" is available at index "+[i]+ " in our bakkery");
        //         flag = false;
        //         break;
        //     }   
        // }
        // if(flag == true){
            //     alert("We don't have "+get);
            // }
            
// Question (15)
// var password = prompt("Enter a Password: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 6 characters long ")
// var a = /[@!,." "&%$# \d]/
// if (a.test(password) || password.length < 6) {
//     alert("Invalid password. Password not Meet Requirement: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 6 characters long")
// }else{
//     alert("Password Accepted:")
// }


// Q 16

// var user_input = prompt("enter your country name:");
// var a = user_input.charAt( user_input.length - 1);
// document.write("User input: "+user_input+"<br> Last character of input: "+a)

// Q 17

// var uni = "University of Karachi";
// var uni = uni.split("");
// console.log(uni);

// Q 18

// let str = " The Quick Brown Fox Jump Over The Lazy Dog";
// let count = 0
// let arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
// if(arr[i] === "The"){
//     count++
// }
// }
// document.write("The word 'The' appears "+ count+ " times in the string.");

            
            