let attendance = {
    Monday: 28,
    Tuesday: 30,
    Wednesday: 27,
    Thursday: 29,
    Friday: 26
};

let totalStudents = 0;

for (let day in attendance) {
    console.log(day + " attendance = " + attendance[day]);
    totalStudents += attendance[day];
}

console.log("Total attendance of the week =", totalStudents);