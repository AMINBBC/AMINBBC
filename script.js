// --------------------------lev 7 ------------------

// let user = prompt("عدد را وارد کنید ")

// alert(user)

// --------------------------lev 8 ------------------

// let bool = true

// alert(typeof(bool))

// let age = 19
// let strage = String(age)
// alert(typeof(strage))

// --------------------------lev 9 ------------------

// let firstnum = 12

// let secondnum = 4

// let plus = firstnum + secondnum

// let mines = firstnum - secondnum

// alert( "جمع" + plus)
// alert("تفریق " + mines)
// alert("ضرب "+   firstnum * secondnum)
// alert("تقسیم" +  firstnum / secondnum)
// alert("توان" +firstnum ** secondnum)
// alert("باقی مانده" +firstnum % secondnum)

// --------------------------lev 14 ------------------

// let num1 = 15
// let num2 = 20
// let num3 = 5
  
// alert(num3 + num1 == num2)

// let num1 = 15
// let num2 = 20
// let num3 = 5
  
// alert(num3 + num1 < num2)

// let num1 = 15
// let num2 = 20
// let num3 = 5
  
// alert(num3 + num1 >= num2)

// --------------------------lev 15 ------------------

// let num1 = 12 

// let num2 = 4

// let num3 = 5

// if (num1 / num2 == num3){
//     alert("yes")
// }else{
//     alert("no")
// }

// --------------------------lev 16 ------------------

// اعدای از کاربر بگیر و زوج و فرد بودن ان را مشخص کن

// let usernum = prompt("ent u r num : ")

// if (usernum % 2 == 0){
//     alert("even")
// }else{
//     alert("odd")
// }

// --------------------------lev 17 ------------------

// سه عدد از کاربر بگیر و میانگین ان را حساب کن

// let num1 = +prompt("ent u r f num: ")
// let num2 = +prompt("ent u r s num: ")
// let num3 = +prompt("ent u r t num: ")

// let sum = (num1 + num2 + num3 ) / 3

// alert("جواب " + sum)

// --------------------------lev 19 ------------------

// حل تمرین محاسبه توان برای اعداد ورودی 


// let num1 = +prompt("ent u r f num: ")
// let num2 = +prompt("ent u r s num: ")
// let num3 = +prompt("ent u r t num: ")

// let tavan = (num1 + num2 + num3) ** 3 

// alert( tavan )

// --------------------------lev 20 ------------------

// محاسبه سن یک کاربر 

// let userage = +prompt("enter u  r age : ")

// let userage2 = 1402 - userage

// if (userage > 1402 ){
//     alert("wrong....")
// }else{
//    alert(userage2)
// }

// --------------------------lev 22 ------------------

// let num1 = 12 
// let num2 = 4
// let num3 = 3

// if (num2 * num3 == num1){
//     alert("true")
// }else if (num1 / num2 == num3 ){
//     alert("true 2")
// }

// --------------------------lev 24 and 23 ------------------

// this is OR biti

// true || false => treu 

// true  || true => true

// false || false => false

// تمرین برای عملگر بیتی 

// alert("choise ur age1 and age2 ")

// let age = prompt("ent u r age :")

// let age2 = prompt("ent u r rage2: ")

// if (age < 18 || age2 == "old"){
//     alert("wrong...")
// }else{
//     alert("true")
// }

// --------------------------lev 25 ------------------

// && 
// should be both true but false 

// --------------------------lev 26 ------------------


// let num1 = 4
// let num2 = 3

// num1 * num2 === 12 ? alert("yes"): alert("no")

// tarnayr ? => if || : => else

// --------------------------lev 28 ------------------

// معدل را گرفته و تعیین سطح کنید 

// let score  = +prompt("معدل خود را وارد کنید: ")

// switch(score){
//     case 20 :
//         case 19 :
//             case 18 :
//                 alert("A")
//                 break;

//                 case 17 :
//                     case 16 :
//                         case 15 :
//                             alert("B")
//                             break;

//                                   case 14 :
//                                     case 13 :
//                                         case 12 :
//                                             alert("C")
//                                             break;

//                                             case 11 :
//                                                 case 10 :
//                                                     case 9 :
//                                                         alert("D")
//                                                         break;
//     default:
//         alert("مشروط هستید")

// }

// --------------------------lev 29 ------------------


//تابع های  decltion  , expressions 

// let user = function(){
//     let num1 = 8

//     let num2 = 2

//     let ans = num1 + num2

//     alert(ans)
// };
// user()

// --------------------------lev 32 ------------------

// write a function to show a number is odd or even ?

// let number = +prompt("enter u  r number: ")

// function isevenorodd (number){
// if (number % 2 === 0){
//     alert(number + 'is even')

// }else{
//     alert(number + "is odd")
// } 
// }

// isevenorodd(number)
// isevenorodd(number)

// --------------------------lev 35 ------------------

// return in functions


// let num1 = prompt("ent u r num:")
// let num2 = prompt("ent u r num:")

// function show (num1 , num2 ){

//     return num1 ** num2 
// }
// let result  = show (num1 , num2)
// alert(result)

// --------------------------lev 36 ------------------

// نمایش تعداد کاراکتر و ایندکس کاراکتر 

// let me = "amin bbc is very good boy "

// alert(me [5])
// alert(me.length)

// --------------------------lev 37 ------------------

// write a app for example usre most prompt username 5 char and password 10 char 

// let username1 = prompt("enter your username :")

// let password1 = prompt("enter your password :")

// if (username1.length < 5 || password1.length < 15 ){
//     alert("wrong .....")
// }else{
//     alert("true...")
// }

// --------------------------lev 39 ------------------

// برنامه بنویسید که فقط یوزنیم علی بتونه وارد بشه

// let username = prompt("enter your id :")

// if (username.toLowerCase() == 'ali'){
//     alert("true....")

// }else{
//     alert("wrong....")
// }


// --------------------------lev 41 ------------------ very importhan

// math.metode

// alert(Math.PI)
// alert(Math.pow(8,2))
// alert(Math.sqrt(125))
// alert(Math.min(2,4,54,8,5,1,0,1))
// alert(Math.max(10,215,22154,24,5455,51546,4,5868))
// alert(Math.floor(111.24545454454015454))
// alert(Math.round(113255.1256515))
// alert(Math.random())

// --------------------------lev 42 ------------------

// تولید کپچاهای 5 رقمی

// let capcha = Math.random() * 100000

// let capcha2 = Math.floor(capcha)

// alert(capcha2)

// --------------------------lev 45 ----------------- very importan

// for loop

// for (let f = 0 ; f < 5 ; f++){
//     alert("somethings...")
// }

// --------------------------lev 47 -----------------

// نمایش اعداد زوج یا فرد بین 1 تا 100


// for (let f = 0 ; f <= 100 ; f+=2){

//     console.log(f)
// }


// --------------------------lev 50 -----------------

// دریافت 5 عدد از کاربر و نوشتن میانگین ان 

// let usernum = null

// let sum = 0

// for (let f = 1 ; f <= 5 ; f++){
//     usernum = +prompt("enter your num: ")
//     sum = sum + usernum
// }

// alert(sum / 5 )


// --------------------------lev 52-----------------

// عددی را از کاربر دریافت کرده و  سپس تعداد ارقام انرا بنویسید

// let num = +prompt("eenter u r num:")

// let count = 0

// if (num == 0){
//     count = 1;
// }else{
//     for (let  f = 0 ; num / 10 ; f++){
//         count++;
//         num = Math.floor(num / 10 );
//     }
// }

// alert(count)

// --------------------------lev 53  ----------------- very importhan

// while loop 

// let ar = 0

// while(ar < 100){
//     alert(ar)
//     ar+= 10
// }

// --------------------------lev 56  -----------------

// اعدادی دلخواه از کاربر دریافت کن و میانگین به ان نشان بده

// let usernum = 0

// let sum = 0

// let count = 0

//         while (usernum != -1){

//               sum += usernum

//              usernum = +prompt("ent u r num: ")
                

//                  if (usernum != -1){ 

//                     count++
//                  }
//         }

//         alert(count)

// --------------------------lev 57  -----------------

// do while loop

// let f = 0 

//          do {
//           alert("amin")
//             f++
//                }
//          while(f < 3)

// --------------------------lev 59  -----------------

// ارایه ها در جاوا اسکریپت

// ارایه ها در جاوا اسکریپت  تعداد متغیر هارو به حداقل میرسونه

// let student = ['ali ', ' amin ' , 'pari ' , 'zari '] 

// alert(student.length)

// --------------------------lev 60 -----------------

// متذ های ارایه shift , unshift , push , pop

// pop , push add from end array

// shift , unshift add from first array 

// --------------------------lev 62-----------------

// objects 

// let user = { 
//               id : 1 ,
//               name : 'amin', 
//               family : 'beydaq',
//                age : 21 ,
//                numphone : 931215,
             
// }

// --------------------------lev 62-----------------

// let cars = ["ford " , "bmw"   , "dodge"];

// cars.includes("ford")

// --------------------------lev 68 -----------------

// make a small online shop 

// let allthing = [
//    {id : 1 , name : "dodge " , price: 34000} ,
//    {id : 2 , name : "ford " , price: 30000} ,
//    {id : 3 , name : "mostang " , price: 28000} ,
//    {id : 4 , name : "chorolet  " , price: 40000},
// ]
 
// userbaasket = [

// {id : 1 , name : "dodge " , price: 34000},
// {id : 4 , name : "chorolet  " , price: 40000}

// ]

// let userwant = prompt("say u r things:")

// let reqthing ;

// let inonlineshop = allthing.some(function(jens){


//      if (things.name === userwant ){
//         reqthing == jens
//         return true
//      }
// })
       
// if (inonlineshop === true){

//     let newthings = {
//         id : 3 ,
//         name : reqthing.name,
//         price: reqthing. price
//      }

//      userbaasket.push(newthings)

//         let sum = 0
//         userbaasket.forEach(function(things){
//             sum = sum + things.price
//         })
            
//         console.log(userbaasket)

//         alert("کل سبد خرید " + sum)
// }else{
//     console.log("no")
// }


// --------------------------lev 71 -----------------

// splice

// let Numbera = [12,14,56,87,123,55,11] 

// Numbera.splice(1,3)

// alert(Numbera)

// --------------------------lev 72 -----------------

// metoud findindex

// let users = [
//     {id :1 , name: "amin" , age:19},
//     {id :2 , name: "ali" , age:20},
//     {id :3 , name: "amir" , age:21},
//     {id :4 , name: "yaser" , age:25}
    
// ]
// let usersindex = users.findIndex(function(user){
//   return user.name == "amin" 

// })

// alert(usersindex)

// --------------------------lev 73 -----------------

// پیاده سازی فروشگاهی پیشرفته

// var allProducts = [
//     { id: 1, name: "laptop", price: 17000000 },
//     { id: 2, name: "phone", price: 7000000 },
//     { id: 3, name: "milk", price: 35000 },
//     { id: 4, name: "pen", price: 12000 },
//     { id: 5, name: "pencil", price: 9000 },
//     { id: 6, name: "cable", price: 55000 },
//     { id: 7, name: "water", price: 6000 },
//     { id: 8, name: "soft drink", price: 13000 },
//   ];
  
//   var userBasket = [
//     { id: 1, name: "milk", price: 35000 },
//     { id: 2, name: "water", price: 6000 },
//   ];
  
//   var userRequest = prompt("1. Add Product \n 2. Remove product");
  
//   if (userRequest === "1") {
//     //   alert("Add");
//     var userProductName = prompt("Enter Your Name: ");
  
//     var productData;
  
//     var isInShop = allProducts.some(function (product) {
//       if (product.name === userProductName) {
//         productData = product;
//         return true;
//       }
//     });
//     if (isInShop === true) {
//       var newProduct = {
//         id: 3,
//         name: productData.name,
//         price: productData.price,
//       };
//       userBasket.push(newProduct);
//       console.log("Basket: ", userBasket);
//     } else {
//       alert("همچین محصولی موجود نمی باشد");
//     }
//   } else if (userRequest === "2") {
//     //   alert("Remove");
  
//     var userProductName = prompt("Enter Your Product Name: ");
  
//     var productIndex = userBasket.findIndex(function (product) {
//       return product.name === userProductName;
//     });
  
//     userBasket.splice(productIndex, 1);
  
//     console.log("Basket: ", userBasket);
//   } else {
//     alert("لطفا گزینه صحیح را انتخاب نمایید");
//   }

// --------------------------lev 74 -----------------

// map metoud

// let score = [12,15,20,14,17,18,16]

// let scorepower = score.map(function(score1){
//    return score1 ** 2 
// })

// alert(scorepower)

// --------------------------lev 75 -----------------

// filter metoud

// let username = ['ali', 'amin' , 'amir' , 'rez' , 'mgk']

// let filtername = username.filter(function(theyname){
//     return theyname.length > 3
// })

// alert(filtername)

// --------------------------lev 76 -----------------

// یک فروشگاه آنلاین پیاده سازی کنید که یک ازایه برای سبد خرید کاربر به صورت دیفالت داشته باشد شامل 6 محصول و  برای خرید های  بالای صد هزار تومن ارسال پست رایگان
// و برای خرید های زیر 100 هزار تومن 1000تومن هزینه پست باشد

// let cars  = [
//     {id : 1 , name : 'ford' , price : 100000},
//     {id : 2 , name : 'dodge' , price : 95000},
//     {id : 3 , name : 'bmw' , price : 150000},
//     {id : 4 , name : 'cho' , price : 200000},
//     {id : 5 , name : 'benz' , price : 35000},
//     {id : 6 , name : 'mostang' , price : 50200},
// ]

// let filerprice = cars.filter(function(car){
//     return car.price < 100000
// })

// let posth = filerprice.length * 1000


// let sum = 0


// cars.forEach(function(cars){
  
// sum = sum + cars.price

// })

// let totalcar = sum + posth

// console.log(totalcar)

// --------------------------lev 77 -----------------

// let menuToggle = document.querySelector('.toggle');
// 		let menu = document.querySelector('.menu');
// 		menuToggle.onclick = function(){
// 			menu.classList.toggle('active')
// 			menuToggle.classList.toggle('active')
// 		}

// 		const list = document.querySelectorAll('li');
// 		function activeLink(){
// 			list.forEach((item) =>
// 			item.classList.remove('active'));
// 			this.classList.add('active')
// 		}
// 		list.forEach((item) =>
// 		item.addEventListener('click',activeLink))

// ---------------------------------78--------------------

// const display = document.querySelector("#display");
// const buttons = document.querySelectorAll("button");
// buttons.forEach((item) => {
//   item.onclick = () => {
//     if (item.id == "clear") {
//       display.innerText = "";
//     } else if (item.id == "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length - 1);
//     } else if (display.innerText != "" && item.id == "equal") {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText == "" && item.id == "equal") {
//       display.innerText = "Empty!";
//       setTimeout(() => (display.innerText = ""), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   };
// });
// const themeToggleBtn = document.querySelector(".theme-toggler");
// const calculator = document.querySelector(".dark");
// const toggleIcon = document.querySelector(".toggler-icon");
// let isDark = true;
// themeToggleBtn.onclick = () => {
//   calculator.classList.toggle("dark");
//   themeToggleBtn.classList.toggle("active");
//   isDark = !isDark;
// };

// const root = document.documentElement;
// const dropdownTitleIcon = document.querySelector(".dropdown-title-icon");
// const dropdownTitle = document.querySelector(".dropdown-title");
// const dropdownList = document.querySelector(".dropdown-list");
// const mainButton = document.querySelector(".main-button");
// const floatingIcon = document.querySelector(".floating-icon");

// const icons = {
//   linkedin:
//     "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
//   instagram:
//     "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
//   facebook:
//     "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
//   twitter:
//     "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
//   youtube:
//     "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
// };

// const listItems = ["Linkedin", "Instagram", "Facebook", "Twitter", "Youtube"];

// const iconTemplate = (path) => {
//   return `
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
//       <path d="${path}" />
//     </svg>
//   `;
// };

// const listItemTemplate = (text, translateValue) => {
//   return `
//     <li class="dropdown-list-item">
//       <button class="dropdown-button list-button" data-translate-value="${translateValue}%">
//         <span class="text-truncate">${text}</span>
//       </button>
//     </li>
//   `;
// };

// const renderListItems = () => {
//   dropdownList.innerHTML += listItems
//     .map((item, index) => {
//       return listItemTemplate(item, 100 * index);
//     })
//     .join("");
// };

// window.addEventListener("load", () => {
//   renderListItems();
// });

// const setDropdownProps = (deg, ht, opacity) => {
//   root.style.setProperty("--rotate-arrow", deg !== 0 ? deg + "deg" : 0);
//   root.style.setProperty("--dropdown-height", ht !== 0 ? ht + "rem" : 0);
//   root.style.setProperty("--list-opacity", opacity);
// };

// mainButton.addEventListener("click", () => {
//   const listWrapperSizes = 3.5; // margins, paddings & borders
//   const dropdownOpenHeight = 4.6 * listItems.length + listWrapperSizes;
//   const currDropdownHeight =
//     root.style.getPropertyValue("--dropdown-height") || "0";

//   currDropdownHeight === "0"
//     ? setDropdownProps(180, dropdownOpenHeight, 1)
//     : setDropdownProps(0, 0, 0);
// });

// dropdownList.addEventListener("mouseover", (e) => {
//   const translateValue = e.target.dataset.translateValue;
//   root.style.setProperty("--translate-value", translateValue);
// });

// dropdownList.addEventListener("click", (e) => {
//   const clickedItemText = e.target.innerText.toLowerCase().trim();
//   const clickedItemIcon = icons[clickedItemText];

//   dropdownTitleIcon.innerHTML = iconTemplate(clickedItemIcon);
//   dropdownTitle.innerHTML = clickedItemText;
//   setDropdownProps(0, 0, 0);
// });

// dropdownList.addEventListener("mousemove", (e) => {
//   const iconSize = root.style.getPropertyValue("--floating-icon-size") || 0;
//   const x = e.clientX - dropdownList.getBoundingClientRect().x;
//   const y = e.clientY - dropdownList.getBoundingClientRect().y;
//   const targetText = e.target.innerText.toLowerCase().trim();
//   const hoverItemText = icons[targetText];

//   floatingIcon.innerHTML = iconTemplate(hoverItemText);
//   root.style.setProperty("--floating-icon-left", x - iconSize / 2 + "px");
//   root.style.setProperty("--floating-icon-top", y - iconSize / 2 + "px");

// ------------------------------79-----------------------------

// let user = +prompt("salam \n enter 2 number ")

// if ( isNaN(user == 2)){
//     alert("allow")
// }else{
//     alert("no")
// }

// ------------------------------77-----------------------------

// metoud array

// let scors = [12,14,16,80,45,87]

// alert(Array.isArray(scors))

// console.log(scors.lastIndexOf(16))

// console.log(scors.join('=-='))

// alert(scors.reverse())

// ------------------------------78-----------------------------

// کلمه ای را از کاربر دریافت کرده و چک کنید که کلمه دریافت شده قابلیت خواندن از هر دو سمت را دارد یا خیر مانند GIG

// let word = prompt("give me your word: ")

// let chararray = word.split('')

// let reverschar = chararray.reverse()

// let reversword =  reverschar.join('')

// if(word === reversword){
//     alert("yes")
// }else{
//     alert("no")
// }

// ------------------------------80-----------------------------

// یک پروژه تسک منیجمنت پیاده سازی کنید

// در این سامانه مدیر می تواند به کارمندان خود تسک های مختلفی بدهد
// به عنوان مثال می تواند به آقای محمد وظیفه خاصی را اعمال کند

// یک ساختار داشته باشید که داخل آن 4 کارمند موجود بوده و هر کارمند وظایفی را بر عهده داشته باشند
// سپس از کاربر (مدیر) اسم یک تسک را دریافت کرده و همچنین اسم کارمندی را که قصد اضافه کردن تسک به آن دارد
// دریافت کنید
// و سپس تسک مورد نظر مدیر را به کارمند مورد نظرش اضافه کرده و لیست را در کنسول نمایش دهید



// var todosArray = [
//     { id: 1, title: 'learn js', isDoing: false },
//     { id: 2, title: 'make footer', isDoing: true },
//     { id: 3, title: 'design', isDoing: false },
//     { id: 4, title: 'vue js', isDoing: false },
// ]

// var userMenu = prompt('Choose one of them: \n 1. Add Todo \n 2. Remove Todo \n 3. Do Todo')

// if (userMenu === '1') {
    // alert('Add')
//     var newTodoName = prompt('Enter The New Todo Name: ', '')
//     var newTodoObject = {
//         id: todosArray.length + 1,
//         title: newTodoName,
//         isDoing: false
//     }
//     todosArray.push(newTodoObject)
//     console.log("Todos Array: ", todosArray)
    
// } else if (userMenu === '2') {
//     // alert('Remove')
//     var removeTodoName = prompt('Enter The Removable Todo Name: ', '')
//     var removableTodoIndex = todosArray.findIndex(function (todo) {
//         return todo.title === removeTodoName
//     })
//     todosArray.splice(removableTodoIndex, 1)
//     console.log("Todos Array: ", todosArray)
    
// } else if (userMenu === '3') {
//     // alert('Doing')
//     var editableTodoName = prompt('Enter The Editable Todo Name: ', '')
//     todosArray.forEach(function (todo) {
//         // Codes
//         // console.log(todo)
//         if (todo.title === editableTodoName) {
//             todo.isDoing = true
//         }
//     })   
//     console.log("Todos Array: ", todosArray) 
// } else {
//     alert('گزینه وارد شده معتبر نمی باشد')
// }


// ------------------------------81-----------------------------

// یک پروژه تسک منیجمنت پیاده سازی کنید

// در این سامانه مدیر می تواند به کارمندان خود تسک های مختلفی بدهد
// به عنوان مثال می تواند به آقای محمد وظیفه خاصی را اعمال کند

// یک ساختار داشته باشید که داخل آن 4 کارمند موجود بوده و هر کارمند وظایفی را بر عهده داشته باشند
// سپس از کاربر (مدیر) اسم یک تسک را دریافت کرده و همچنین اسم کارمندی را که قصد اضافه کردن تسک به آن دارد
// دریافت کنید
// و سپس تسک مورد نظر مدیر را به کارمند مورد نظرش اضافه کرده و لیست را در کنسول نمایش دهید

// let taskarray = {
//     ali :['html' , 'css ' , 'js'],
//     amin :['react' , 'vue ' , 'angular'],
//    amir :['seo' , 'link making ' ],
//     nima :['admin'  ]
// }

// let newtaskname = prompt("enter new task:")
// let empioyname = prompt("enter the empioyname:")

// let empioytask = taskarray[empioyname]
//  empioytask.push(newtaskname)

//  console.log(taskarray)


// ------------------------------82-----------------------------

// primrtivs and reference

// primitivs can not change like number and string 

// bot reference can change like object and array 


// ------------------------------83-----------------------------

// یک سامانه فروش بیلیت پیاده سازی کنید و مبدا را استان قرار دهید و از کاربر دریافت کنید   شهر های استان را در کنسول نمایش دهید

// let city = {
//     tehran : ['tajrish' , 'eslamshar' , 'golestan ' , 'fershteh' ,'englab '],
//     shiraz : ['fars' , 'girof' , 'jahrom ' , 'maaliabad' ,],
//     tabriz : ['bostanabad' , 'tabriz' , 'miyaneh ' , ],
//     ardabil : ['khlkhal' , 'kivi' , 'moghan ' , 'kosar' ,],
// }
// let ostan = prompt("enter your ostan ")

// let mainostancitis = city[ostan]
// mainostancitis.forEach(function(cityes) {
     
//     console.log(cityes)
// });
 
// ------------------------------84-----------------------------

// یک ازمون انلاین بنویسید که سولاات را به کار بر نماییییش دهد
// و پاسخ ان ها را دریافت نماید و  به ازاع هر پاسخ به کاربر امتیاز دهد


// let question = [
//     {id:1 , titel : '2 + 2' , answer : '4'},

//     {id:2 , titel : '2 * 5' , answer : '10'},

//     {id:3 , titel : '5 + 2' , answer : '7'},

//     {id:4 , titel : '2 **2' , answer : '4'},

//     {id:5 , titel : '100 / 5' , answer : '20'},

//     {id:6 , titel : 'whrer is iran?' , answer : 'asia'},

//     {id:7 , titel : '40 * 5' , answer : '200'},

//     {id:8 , titel : 'good or bad ' , answer : 'bad'},

//     {id:9 , titel : '1.2 + 1.2 ' , answer : '2.4'},

//     {id:10 , titel : 'usa is bad ' , answer : 'no'},


// ]

// let score = 0

// let mainanswer = " "

// question.forEach(function(allques){

// mainanswer = prompt(allques.titel + '?')

// if (mainanswer === allques.answer){
//     score ++
// }

// })

// alert(score)


// ------------------------------85-----------------------------

// make a simple calculator 

// let num1 = +prompt("enter your first number: ")

// let num2 = +prompt("enter your second number: ")

// let operator = prompt("choise your operator \n 1.+ \n 2.** \n 3./")

// if(operator === '1'){

//     plus(num1 , num2)

// }else if (operator === '2'){

// power(num1 , num2)

// }else if (operator === '3'){

//   taq(num1 , num2)

// }


// function plus(num1 , num2){

//     alert(num1 + num2)

// }


// function power (num1 , num2){

//     alert(num1 ** num2)

// }


// function taq (num1 , num2 ){

// alert(num1 / num2 )

// }

// ------------------------------86-----------------------------

// metoud find

// let users = [
//     {id : 1 , name:'amin ' , age:20},
//     {id : 2 , name:'amir ' , age:28},
//     {id : 2 , name:'ali ' , age:20},
//     {id : 4 , name:'asma ' , age:21},
// ]

// let maindata = users.find(function(user){
//     return user.name === 'amin'
// })

// console.log(maindata)

// ------------------------------87-----------------------------

// make a simple forget password

// let userdata = [
//     {id : 1 , name:'amin' , age:20 , password:1235},
//     {id : 2 , name:'amir' , age:28, password :'12$'},
//     {id : 2 , name:'ali' , age:20 , password:'655t6r4ty'},
//     {id : 4 , name:'asma' , age:21 , password:'54654@#'},
// ]

// let username = prompt("enter your user name: ")

// let maindata = userdata.find(function(user){

//     return user.name === username
// })

// if (maindata === undefined){
//     alert('همچین ایدی نداریم')
// }else{
//     alert(maindata.password)
// }

// ------------------------------92-----------------------------

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }