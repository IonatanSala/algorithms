function mergeSort(array) {
    if (array.length < 2)
        return array;
    var mid = array.length / 2;
    var left = mergeSort(array.slice(0, mid));
    var right = mergeSort(array.slice(mid, array.length));
    var results = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0])
            results.push(left.shift());
        else
            results.push(right.shift());
    }
    while (left.length > 0) {
        results.push(left.shift());
    }
    while (right.length > 0) {
        results.push(right.shift());
    }
    return results;
}
var array = [1, 2, 35, 4, 2, 5];
var sortedArray = mergeSort(array);
console.log(sortedArray);
