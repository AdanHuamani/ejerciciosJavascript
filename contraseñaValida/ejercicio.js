function contrasenaValida(contrasena) {
    if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
        return true;
    } else {
        return false;
    }
}
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false
