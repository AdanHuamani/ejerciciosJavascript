function likes(numero) {
    if (numero < 1000) {
        return String(numero);
    } else if (numero >= 1000 && numero < 1000000) {
        return Math.floor(numero / 1000) + "K";
    } else {
        return Math.floor(numero / 1000000) + "M";
    }
}

console.log(likes(983));        // "983"
console.log(likes(1900));       // "1K"
console.log(likes(54000));      // "54K"
console.log(likes(120800));     // "120K"
console.log(likes(25222444));   // "25M"
