window.jsonString = `[
    {
        "nombre": "p1",
        "text": "19524",
        "data": "12352",
        "bss": "1165"
    },
    {
        "nombre": "p2",
        "text": "77539",
        "data": "32680",
        "bss": "4100"
    },
    {
        "nombre": "p3",
        "text": "99542",
        "data": "24245",
        "bss": "7557"
    },
    {
        "nombre": "p4",
        "text": "115000",
        "data": "123470",
        "bss": "1123"
    },
    {
        "nombre": "p5",
        "text": "12342",
        "data": "1256",
        "bss": "1756"
    }
]`;

window.leerProgramas = function() {
    return JSON.parse(jsonString);
}

window.actualizarJsonString = function (nuevoJsonString) {
    window.jsonString = nuevoJsonString;
    localStorage.setItem('jsonString', window.jsonString);
};