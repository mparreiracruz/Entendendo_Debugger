// arquivo: loop-debug.js
function somarAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i; // Ponto interessante para um breakpoint
    }
    return soma;
}

console.log("Soma até 5:", somarAteN(5));
