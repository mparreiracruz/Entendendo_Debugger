// arquivo: exemplo-debug.js

function somarNumeros(arr) {
    let total = 0;
    for (let i = 0; i <= arr.length; i++) { // ERRO: Deve ser i < arr.length
        total += arr[i];
    }
    return total;
}

const numeros = [10, 20, 30, 40];
console.log("Soma:", somarNumeros(numeros));
