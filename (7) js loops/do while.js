let i = 1;
let n = 5;

do {
    let row = "";

    let j = 1;
    do {
        row += " ";
        j++;
    } while (j <= n - i);

    let k = 1;
    do {
        row += "*";
        k++;
    } while (k <= (2 * i - 1));

    console.log(row);

    i++;
} while (i <= n);