let arr = [12, 45, 7, 89, 23];

let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > largest) {
            largest = arr[j];
        }
    }
    break;
}

console.log("Largest element:", largest);