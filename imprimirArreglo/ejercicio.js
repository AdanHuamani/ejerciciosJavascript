function imprimirArreglo(...elementos) {
    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i]);
    }
}
imprimirArreglo(1, "Hola", 2, "Mundo");
// Salida esperada:
// 1
// Hola
// 2
// Mundo
