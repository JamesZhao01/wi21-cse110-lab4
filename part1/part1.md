1. i would be printed, which is price.length, or the value of i after the for loop terminates. This is because vars are visible through blocks
2. discountedPrice would hold the unrounded discounted price of the final price in the price array. This is b/c vars are visible through blocks, and the value 
is repeatedly overriden, until the last iteration in the for loop. 
3. finalPrice would hold the rounded price of the last example, for the same reason as #2. 
4. the function would return a new array of all the prices in **prices** discounted by **discount**, in the same order as they were passed in. Thus, it would output [50, 100, 150]

5. an error would be thrown, as the scope of the variable initialized using 'let' is only within the for loop, not outside of it
6. an error would be thrown, for the same reason as #5
7. the discounted and rounded price of the last processed price would be printed, as the scope of **finalPrice** is within the function, as opposed to within the for loop.
8. the function would not return anything, due to the errors that were thrown. If the errors were fixed, the output would be the same as the output of #4. 

9. nothing would be printed, as an error would have been thrown due to trying to re-assign a const
10. ^
11. ^
12. nothing would be returned, because of ^

13.
- a. student[\"name\"]
- b. student[\"Grad Year\"]
- c. student[\"greeting\"]();
- d. student[\"Favorite Teacher\"][\"name\"]
- e. student[\"courseLoad\"][0]

14. 
- a. '32'. This is b/c the 'plus' operator is viewed as concatenation because one of the operands was a string
- b. 1. Because subtraction isn't a string operation, it is automatically converted to a Number
- c. 3. This is b/c null is 0 in numeric form. 
- d. '3null'. This is b/c null is 'null' in string form, and the strings are concatenated
- e. true + 3. This is b/c true is 1 in Number form
- f. 0. This is because false and null are both 0 in Number form
- g. '3undefined'. This is because undefined is 'undefined' in String form. 
- h. NaN. This is because subtraction requires both operands to be Numbers, and undefined is NaN in Number form. 

15.
- true. This is because the string is converted to an Number, as JS converts comparisons of different types to numbers
- false. This is because both operands are strings, so a string comparison is done instead of a Number comparison
- true. This is because comparisons of different types are converted to numbers.
- false. This is because === also checks equality in the types of the operands
- false. This is because true is converted to 1 as a Number, and HS converts comparisons of different types to numbers.
- true. This is because 'non empty' numbers are true, and true === true.

16. When comparing two operands of different types, == will implicitly convert both values to numbers and check for equality based on that. However, === also checks for equality between the datatypes of the operands, so any === statement involving two different data types will always result in false. 

17. 'How are you?'. Because a comparison of two different types is performed, javascript turns true into 1. Because 2 != 1, the `if` statement does not run. Next, the `else if` is checked. Because 2 is converted to true as a Boolean, the `else if` condition is true, and 'How are you?' is printed. 

19. [6, 8, 10]. In modifyArray, for every element in the passed in array, modifyArray calls `callback(array[i], function(x){return x * 2})`. Within the callback function, doSomething, the parameter callback is called with num + 2. Thus, first 2 is added to the number, and this number is passed into the `2*x` function. Thus, every `item` in `array` will be changed to `(item + 2) * 2`. Thus, [6, 8, 10] will be outputted. 

21. 1 4 3 2. 1 and 4 both print immediately as they are not in any timeout. Next 3 is printed, as it is printed on the next event cycle. Lastly, 2 is printed because it is set to print after a 1 second timer expires.  
