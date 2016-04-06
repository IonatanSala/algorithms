import java.util.*;

class MergeSort {

  public static void main(String args[]) {
    int array[] = {5, 3, 1 , 3, 1};

    int sortedArray[] = mergeSort(array);

    System.out.println(Arrays.toString(sortedArray));
  }

  public static int[] mergeSort(int array[]) {
    if (array.length <= 1) return array;

    int mid = array.length / 2;
    int left[] = new int[mid];
    int right[] = new int[array.length - mid];

    for(int i = 0; i<left.length; i++) {
      left[i] = array[i];
    }

    for(int i = 0; i<right.length; i++) {
      right[i] = array[i + mid];
    }

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);

  }

  public static int[] merge(int left[], int right[]) {
    int results[] = new int[left.length + right.length];
    int resultsIndex = 0;
    int lIndex = 0;
    int rIndex = 0;
    while (left.length > lIndex && right.length > rIndex) {
      if (left[lIndex] < right[rIndex]) {
        results[resultsIndex++] = left[lIndex];
        lIndex++;
      } else {
        results[resultsIndex++] = right[rIndex];
        rIndex++;
      }
    }

    while (left.length > lIndex) {
      results[resultsIndex++] = left[lIndex];
      lIndex++;
    }

    while (right.length > rIndex) {
      results[resultsIndex++] = right[rIndex];
      rIndex++;
    }

    return results;
  }



}
