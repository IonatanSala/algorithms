class InsertionSort {
  public static void main(String args[]) {
    int my_array[] = {5, 4, 3, 2, 1};

    sort(my_array);

    System.out.println("Your sorted array:");

    for(int i : my_array)
      System.out.print(" " + i);
  }

  public static void sort(int my_array[]) {
    for(int i = 1; i<my_array.length; i++) {
      int element = my_array[i];
      int j = i;

      while(j > 0 && my_array[j -  1] > element) {
        my_array[j] = my_array[j - 1];
        j = j - 1;
      }
      my_array[j] = element;
    }
  }
}
