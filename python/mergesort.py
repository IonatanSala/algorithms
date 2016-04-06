def main():
    array = [4, 2, 3, 2, 1]

    sorted_array = mergesort(array)
    print(sorted_array)

def mergesort(array):
    if len(array) <= 1:
        return array

    mid = len(array) // 2
    left = mergesort(array[0:mid])
    right = mergesort(array[mid:len(array)])

    results = []
    while len(left) > 0 and len(right) > 0:
        if left[0] < right[0]:
            results.append(left.pop(0))
        else:
            results.append(right.pop(0))


    while len(left) > 0:
        results.append(left.pop(0))

    while len(right) > 0:
        results.append(right.pop(0))

    return results


if __name__ == "__main__":
    main()
