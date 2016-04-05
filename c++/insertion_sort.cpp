#include <iostream>
#include <vector>

using namespace std;

void sort(int[], int);

int main() {

  int my_array[] = {5, 4, 3, 2, 1};
  int length = 5;
  sort(my_array, length);

  cout << "Sorted Array: " << endl;
  for(int i = 0; i<length; i++) {
    cout << " " << my_array[i];
  }

  return 0;
}

// insertion sort algorithm
void sort(int a[], int length) {
  for(int i = 1; i<length; i++) {
    int element = a[i];
    int j = i;

    while(j > 0 && a[j - 1] > element) {
      a[j] = a[j - 1];
      j = j - 1;
    }
    a[j] = element;
  }
}
