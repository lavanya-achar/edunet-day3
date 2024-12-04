
let str = [];  
let str2 = []; 

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        str.push(i); 
        console.log("Divisible by 2:", i);
    }
    elseif (i % 3 == 0) {
        str2.push(i); 
        console.log("Divisible by 3:", i);
    }
}

console.log("Numbers divisible by 2:", str);
console.log("Numbers divisible by 3:", str2);
