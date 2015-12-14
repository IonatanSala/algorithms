/*

  Author: Ionatan Sala
  Algorithm: Binary Search

*/

#include <iostream>
#include <vector>

using namespace std;

int main() {

  vector<int> my_values;

  // pushes 100 numbers(multiples of 3) in my_values vector
  for(int i = 0; i<100; i++) {
    my_values.push_back(i);
  }

  cout << "Please enter the value you want to search: >> ";
  // number we are looking for
  int number_to_find;
  cin >> number_to_find;

  // range of numbers we are looking for
  int min = 1, max = 100;
  // if set to true the number is found, and we can exit while loop
  bool number_found = false;


  while(!number_found) {
      // get average of range
      int average = (max + min) / 2;

      // when max and min are the same and the numbers don't match,
      // well then we know that the number is not in the vector
      if(min == max && my_values[average] != number_to_find) {
        cout << "Number: " << number_to_find << " is not present in the vector you're searching through" << endl;
        break;
      }

      if(my_values[average] == number_to_find) {
          cout << "Number found at position:  "<< average  << ", which is: " << my_values[average] << endl;
          number_found = true;
      } else if(my_values[average] > number_to_find) {
        max = average - 1;
      } else {
        min = average + 1;
      }

  } // end while

  return 0;
}
