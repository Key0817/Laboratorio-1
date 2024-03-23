function sortNames(names) {
    // Utilizamos el método sort() para ordenar los nombres alfabéticamente
    names.sort(function(a, b) {
        // Convertimos ambos nombres a minúsculas para hacer la comparación sin distinción 
        //entre mayúsculas y minúsculas
        let nameA = a.toLowerCase();
        let nameB = b.toLowerCase();
        // Comparamos los nombres y devolvemos -1, 0 o 1 según corresponda
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    // Devolvemos los nombres ordenados
    return names;
}

let names = ['Jhon', 'Kenny', 'Tom', 'Bob', 'Dilan'];
console.log(sortNames(names));