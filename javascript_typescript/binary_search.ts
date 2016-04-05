/*

  author: Ionatan Sala
  algorithm: Binary Search

*/
let my_array :number[] = [];

for(let i = 0; i < 100; i++) {
    my_array[i] = i;
}

let min :number = 1, max :number = my_array.length;
let number_found :Boolean = false;

let number_to_find = 7;

while(!number_found) {
  let average :number = Math.floor((min + max) / 2);

  if(min >= max && my_array[average] != number_to_find) {
      console.log("That number does not exsits in the array");
      break;
  }

  if(my_array[average] == number_to_find) {
    console.log("The number " + number_to_find + " was found at position " + average + " in the array.");
    number_found = true;
  } else if(my_array[average] > number_to_find) {
    max = average - 1;
  } else {
    min = average + 1;
  }

}
