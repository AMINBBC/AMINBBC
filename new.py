# مفهوم متغیر

# x = ('ail')
# y = 12
# print (type(x ))

# ==========================1=========================
# x = 5
# y = 10
# z = x / y
# print(z)

# ==========================2=========================
# شناسه ها

# amin = 12

# ==========================3=========================
# پایتون به حروف کوچکو بزرگ اهمیت میدهد

# a = 12
# A = 10
# print(a + A )

# ==========================4=========================

# مشاهده کلمات کلیدی پایتون

# help("ketwords")
#
# print(help())

# ==========================5=========================

# عملگر های حسابی در پایتون

# x = 4
# y = 8
# print( x + y )
# print( x - y)
# print(x * y)
# print(x / y)
# print(x ** y)
# print(x % y)

# ==========================6=========================

# عملگرهای مقایسه ای

# x = 4
# y = 8
# print(x == y)
# print(x != y)
# print(x > y)
# print(x < y )
# print(x >= y)
# print(x <= y )

# ==========================7=========================

# عملگر های منطقی

# and => true and false = false
#
# or => true or false = true
#
# not false = true
#     true = false

# ==========================8=========================

# عملگر های عضویت

# x = [1 , 14, 'a' , 18]
# y = [14 , 's' , 19 , 10]
#
# print(14 in y)

# ==========================9=========================

# چاپ اعداد باینری
# x = 16
# print( bin(x))
#
# x = 0b1100
# print(x)

# ==========================10=========================

# الویت عملگر ها

# x = int(input("enter a number: "))
# y = int(input("enter a number: "))
# z = int(input("enter a number: "))
#
# print((x + y + z) / 3)

# ==========================11=========================

# انواع داده در پایتون

# x = 12
#
# y = 12.21
#
# z = 3+2j
#
# s = {1,2,4,8,5}
#
# l = [1,5,3,6,7]
#
# t = (1,5,6,8,63,5)
#
# print(type(x))
#
# print(type(y))
#
# print(type(z))
#
# print(type(s))
#
# print(type(l))
#
# print(type(t))

# ==========================12=========================

# توان و رند کردنم و  قدر مطلق در پایتون

# r = 126.54
# print(round(r))
#
# t = 2
# print(pow(t,4))

# ==========================13=========================

# دو عدد از کاربر دریافت کنبد و مربع و مکعب ان  را مشخص کنید

# x = int(input("enter your number : "))
#
# y = int(input("enter your number : "))
#
# print(x ** 2)
# print(y ** 3)

# ==========================14=========================

# رشته ها در پایتون

# s = "amin \n"
#
# print(4 * s)

# s = "amin mehrad hidden are good"
#
# print(s[5])

# s = "amin mehrad hidden are good"
#
# print(s[5:11])

# s = "amin mehrad hidden are good"
#
# print(len(s))

# ==========================15=========================

# متد ها در str

# x = "amin bbc is very good"
#
# s = x.upper()
#
# print(s)

# ==========================16=========================

# شناخت ascll

# print(ord("a"))

# ==========================17=========================

# فرمت دهی به رشته

# print("% c" % (520))
#
# print("% f" % (5.32))

# ==========================18=========================

# فرمت دهی به رشته با کمک متد f-string

# import datetime
#
# today = datetime.datetime.today()
#
# print(f"{today:%y , %m , %d}")

# ==========================19=========================

# lists in python

# x = [1,2,5,47,5854,654,6546,46,7465,457]
#
# print(len(x))
# print(x)

# l = [1,2,5,5,"a" , "popi"]
#
# print(l [2])

# ==========================20=========================

# t = (12,54,5,[11,2,14,512,])
#
# print(len(t))

# list to tuple

# t = (1,2,5,48,)
#
# l = list(t)
#
# print(l)

# ==========================21=========================

# dictionaty in python

# d= {"d " : 5 , "a " : 2}
#
# print(type(d))

# ==========================22=========================


# مجموعه ها در پایتون

# s = {1,2,5,4,5,6,"a"}
#
# print((s))

# p = {3,9,15,12,6,18}
# q = {12,6,18,10,4,16,2,8,14}
#
# print(p & q)
# print(p ^ q)

# ==========================23=========================

# ساختار تصمیم

# تعیین سطح نمره های دانشجویان

# mark = int(input("enter your mark : "))
#
# if 20 >= mark >= 15:
#     print("A")
# elif 15 >= mark >= 10:
#     print("B")
# elif 10 >= mark >= 5:
#     print("C")
# elif 5 >= mark >= 0:
#     print("D")
# else:
#     print("wrong.....")

# زوج یا فرد بودن عدد

# x = int(input("enter your number :" ))
#
# if x % 2 == 0 :
#     print("even")
# else:
#     print("odd")

# ==========================24=========================

# min and max and sum in python

# x = [1,58,2,54,565,65,2,68,52,876,5,587,6854]
#
# print(max(x))
# print(min(x))
# print(sum(x))

# ==========================25=========================

# make while loop

# x = 0
# while x < 10 :
#     print("hi ")
#     x += 1

# عدد های مضرب ده تا 1000

# n = int(input("enter your number : "))
# while n < 1000:
#     if n % 10 == 0 :
#         print(n)
#     n += 1


# i = 1
# a,b = 0, 1
#
# while i <= 20 :
#     print(a)
#     a,b = b,a+b
#     i += 1