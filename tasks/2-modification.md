# Модификация

Реализуйте и экспортируйте функцию `swap()`, которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть:

```js
import { swap } from "../solutions/2-modification.js";
 
swap([]); // []
swap([1]); // [1]
swap([1, 2]); // [2, 1]
swap(['one', 'two', 'three']); // ['three', 'two', 'one']
```

## Подсказки

Чтобы поменять местами значения, нужно использовать третью переменную.