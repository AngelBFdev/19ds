//O(n)
function MCD(a, b) {
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
function mcm(a, b) {
    var op
    op=(a*b)/(MCD(a,b))
    return op;
}