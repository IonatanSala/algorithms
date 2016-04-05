# implementation of insertion sort in pyton
# main method
def main():
    my_array = [5, 3, 4, 1, 2]

    sort(my_array)
    print(my_array)
# insertion sort
def sort(my_array):
    for i in range(1, len(my_array)):
        element = my_array[i]
        j = i

        while j > 0 and my_array[j - 1] > element:
            my_array[j] = my_array[j - 1]
            j -= 1

        my_array[j] = element

if __name__ == "__main__":
    main()
