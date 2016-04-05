var a = [5, 4, 3, 2, 1];
function sort(a) {
    for (var i = 1; i < a.length; i++) {
        var element = a[i];
        var j = i;
        while (j > 0 && a[j - 1] > element) {
            a[j] = a[j - 1];
            j = j - 1;
        }
        a[j] = element;
    }
    return a;
}
console.log(sort(a));
