function crip(message, hash) {
    
    const data = Date.now();
    let frase = message.split("");
    for (let n = 0; n < frase.length; n++) {
        frase[n] = (frase[n].charCodeAt(0) * data);
        frase[n] += hash;
    }
    
    frase.push(data);
    let result = "";
    
    for (let n = 0; n < frase.length; n++) {
        result += frase[n];
    }
    
    return result;
}

function descrip(cypher, hash) {
    let w = String(hash)
    const message = cypher.split(w);
    const data = message.pop();
    
    for (let n = 0; n < message.length; n++) {
        message[n] = String.fromCharCode(parseInt(message[n]) / data);
    }   
    let result = "";
    
    for (let n = 0; n < message.length; n++) {
        result += message[n];
    }
    return result;
}

const frase = "Gosto muito de biscoito de chocolate!";
let criptografado = crip(frase, "10987654321");
let descriptografado = descrip(criptografado, "10987654321")

console.log('Criptografado: '+criptografado);
console.log('Descriptografado: '+descriptografado);