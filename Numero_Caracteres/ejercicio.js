function numeroDeCaracteres(str, caracter) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

console.log(numeroDeCaracteres("Hola Mundo", "o"));
console.log(numeroDeCaracteres("Como Estas", "m"));
console.log(numeroDeCaracteres("eeee", "e"));