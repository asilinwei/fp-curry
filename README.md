# fp-curry
Implement curry.     

2018-11-23     
LinWei     
     
This is about a curry test. When I see   
[_.curry](https://lodash.com/docs/4.17.11#curry) in lodash, I find that    
it is very interesting, so I try to implement it.     
     
Note:    
This is only a toy or a test, so can not use in production environment.   
   
Example:
```
var foo = function(a, b, c, d) {
  return [a, b, c, d];
};

var curried = curry(foo);

curried(1, 2, 3, 4);
// => [1, 2, 3, 4]

curried(1, 2, 3)(4);
// => [1, 2, 3, 4]

curried(1, 2)(3)(4)
// => [1, 2, 3, 4]

curried(1)(2)(3)(4)
// => [1, 2, 3, 4]
```        