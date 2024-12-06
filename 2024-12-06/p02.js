function osszead(...szamok) {
    return szamok.reduce((acc, curr) => acc + curr, 0);
}
console.log(osszead(1, 2, 3, 4,5,6,7,8,9,10)); 
