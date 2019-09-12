//O(n)
function mcd(a, b) {
    var nuevo;
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    do {
        nuevo = min;
        min = max % min;
        max = nuevo;
    } while (min !== 0);
    return max;
}