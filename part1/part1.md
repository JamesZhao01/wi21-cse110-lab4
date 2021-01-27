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

