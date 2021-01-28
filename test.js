function l() {
    let prices = [101, 200, 300];
    let fp = [];
    let dc = 0.5;
    for (let i = 0; i < 3; i++) {
        let disc = prices[i] * (1 - dc);
        fp.push(Math.round(disc * 100) / 100);
    }
    return fp;
}


let student = {
    name: "Sarah",
    major: "CS",
    "Grad Year": "2022",
    greeting: function () { console.log("Hello!") },
    "fav teach": {
        name: "TP",
        course: "CSE110"
    },
    courseload: ["CSE110", "CSE134", "VIS41"]
}

console.log(student["name"])
console.log(student["Grad Year"])
student["greeting"]();
console.log(student["fav teach"]["name"])
console.log(student["courseload"][0])

function modArr(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], function (x) {
            return x * 2;
        }));
    }
    return newArr;
}

function xd(num, cb) {
    return cb(num + 2);
}

console.log(modArr([1, 2, 3], xd));

function printNums() {
    console.log(1);
    setTimeout(function () { console.log(2); }, 1000);
    setTimeout(function () { console.log(3); }, 0);
    console.log(4);
}
printNums();