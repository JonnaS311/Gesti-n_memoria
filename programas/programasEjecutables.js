window.jsonString = `[
    {
        "nombre": "p1",
        ".text": "19",
        ".data": "77",
        ".bss": "99"
    },
    {
        "nombre": "p2",
        ".text": "19",
        ".data": "77",
        ".bss": "99"
    },
    {
        "nombre": "p3",
        ".text": "19",
        ".data": "77",
        ".bss": "99"
    },
    {
        "nombre": "p4",
        ".text": "19",
        ".data": "77",
        ".bss": "99"
    },
    {
        "nombre": "p5",
        ".text": "19",
        ".data": "77",
        ".bss": "99"
    }
]`;

window.leerProgramas = function() {
    return JSON.parse(jsonString);
}

window.actualizarJsonString = function (nuevoJsonString) {
    window.jsonString = nuevoJsonString;
    localStorage.setItem('jsonString', nuevoJsonString);
};