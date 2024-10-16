// Use concat() to join two arrays: arr1 =["Cecile", "Lone"] and arr2 = ["Emil", "Tobias", "Linus"]
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: ["Cecile", "Lone", "Emil", "Tobias", "Linus"]

// Use push() to add an element "Kiwi" to the array fruits = ["Banana", "Orange", "Apple", "Mango"].
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// Use unshift() to add two numbers 4 and 5 to the beginning of the array array1 = [1, 2, 3].
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1); // Output: [4, 5, 1, 2, 3];

// Use pop() to remove the last element from the fruits array.
fruits.pop();
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango"]

// Use shift() to remove the first element from the array array2 = [1, 2, 3].
const array2 = [1, 2, 3];
array2.shift();
console.log(array2); // Output: [2, 3]

// Use sort() to sort the fruits array alphabetically.
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Use slice() to create a new array containing a portion of the fruits array.
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["Banana", "Mango"]

// Use splice() to insert and remove elements in the months array.
const months = ["January", "March", "April", "June"];
months.splice(1, 0, "February");  // Insert "February" at index 1
months.splice(5, 1); // Remove the element at index 5
console.log(months); // Output: ["January", "February", "March", "April", "June"]
