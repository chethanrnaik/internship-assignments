let temperatures = [32, 35, 30, 38, 36];

let maxTemp = -Infinity;

for (let temp of temperatures) {
    if (temp > maxTemp) {
        maxTemp = temp;
    }
}

console.log("Highest temperature:", maxTemp);