function contador_letras(str) {
    
    str = str.toLowerCase();
  
    let count = {};

    for (let char of str) {

        if (/[a-z]/.test(char)) {

            count[char] = (count[char] || 0) + 1;
        }
    }
    // Devolvemos el objeto con el recuento de letras
    return count;
}

let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Carabitur eget bidendum turpis Carabitur scelerisque eros ultricies venenatis mi at tempor nisl Interger tincidunt accumsan Cursus";
let result = contador_letras(par);
console.log(result);