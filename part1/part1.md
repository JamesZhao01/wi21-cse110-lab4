1. i would be printed, which is price.length, or the value of i after the for loop terminates. This is because vars are visible through blocks
2. discountedPrice would hold the unrounded discounted price of the final price in the price array. This is b/c vars are visible through blocks, and the value 
is repeatedly overriden, until the last iteration in the for loop. 
3. finalPrice would hold the rounded price of the last example, for the same reason as #2. 
4. the function would return a new array of all the prices in **prices** discounted by **discount**, in the same order as they were passed in. Thus, it would output [50, 100, 150], as 100 discounted by 50% is 50, 200 discounted by 50% is 100, and 300 discounted by 50% is 150. The discountedPrice computes the discounted price, and the finalPrice makes sure only two decimal places exist in the final price. 

5. an error would be thrown, as the scope of the variable initialized using 'let' is only within the for loop, not outside of it. Thus, the variable does not exist
6. an error would be thrown, for the same reason as #5(scope in for loop)
7. the discounted and rounded price of the last processed price would be printed, as the scope of **finalPrice** is within the function, as opposed to within the for loop.
8. the function would not return anything, due to the errors that were thrown. If the errors were fixed, the output would be the same as the output of #4. 

9. an error would be thrown of i being undefined, as the scope of i is only in the for loop, and not in the function block.
10. ^, but for discountedPrice, as its scope is only in the for loop
11. assuming an error was not thrown for const being re-assigned, the final Price of the last item in the prices would be printed. This is because the scope of the variable is in the function block, as that was where it was defined
12. Assuming no errors are thrown due to re-assigning a const, the output would be the same as #4. 

13.
- a. student[\"name\"]
- b. student[\"Grad Year\"]
- c. student[\"greeting\"]();
- d. student[\"Favorite Teacher\"][\"name\"]
- e. student[\"courseLoad\"][0]

14. 
- a. '32'. This is b/c the 'plus' operator is viewed as concatenation because one of the operands was a string
- b. 1. Because subtraction isn't a string operation, it is automatically converted to a Number
- c. 3. This is b/c null is converted to a Number for addition, and it is 0 in numeric form
- d. '3null'. This is b/c null is 'null' in string form, and the + operator on strings performs concatenation
- e. 4. This is b/c true is 1 in Number form, and booleans are converted to numbers in addition. 
- f. 0. This is because false and null are both 0 in Number form
- g. '3undefined'. This is because undefined is 'undefined' in String form, and addition with strings implies the strings are concatenated
- h. NaN. This is because subtraction requires both operands to be Numbers, and undefined is NaN in Number form. 

15.
- true. This is because the string is converted to an Number, as JS converts comparisons of different types to numbers
- false. This is because both operands are strings, so a string comparison is done instead of a Number comparison(and the ascii value of '2' > '1')
- true. This is because comparisons of different types are converted to numbers.
- false. This is because === also checks equality in the types of the operands
- false. This is because true is converted to 1 as a Number, and HS converts comparisons of different types to numbers. 1 =/= 2
- true. This is because 'non empty' numbers are true, and true === true.

16.  When comparing two operands of different types, == will implicitly convert both values to numbers and check for equality based on that. However, === also checks for equality between the datatypes of the operands, so any === statement involving two different data types will always result in false. Thus, when comparing two variables that are the same datatype, == and === are functionally the same. 

17.  'How are you?'. Because a comparison of two different types is performed, javascript turns true into its Number form, 1. Because 2 != 1, the `if` statement does not run. Next, the `else if` is checked. Because 2 is converted to true as a Boolean, the `else if` condition is true, and 'How are you?' is printed. 

18.  [6, 8, 10]. In modifyArray, for every element in the passed in array, modifyArray calls `callback(array[i], function(x){return x * 2})`. Within the callback function, doSomething, the parameter callback is called with num + 2. Thus, first 2 is added to the number, and this number is passed into the `2*x` function. Thus, every `item` in `array` will be changed to `(item + 2) * 2`. Thus, [6, 8, 10] will be outputted. 

21.  1 4 3 2. 1 and 4 both print immediately as they are not in any timeout. Next 3 is printed, as it is printed on the next event cycle. Lastly, 2 is printed because it is set to print after a 1 second timer expires.  
