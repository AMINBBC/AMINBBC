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