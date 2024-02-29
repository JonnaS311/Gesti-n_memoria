document.addEventListener('DOMContentLoaded', function () {
    const jsonListContainer = document.getElementById('dataList');
    const fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', handleFileSelection);

    function handleFileSelection(event) {
        const files = event.target.files;

        jsonListContainer.innerHTML = '';

        for (const file of files) {
            if (file.name.endsWith('.json')) {
                readAndDisplayFile(file);
            }
        }
    }

    function readAndDisplayFile(file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const jsonContent = event.target.result;
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'jsonFile';
            checkbox.value = file.name;

            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(file.name));

            jsonListContainer.appendChild(label);
            jsonListContainer.appendChild(document.createElement('br'));
        };

        reader.readAsText(file);
    }
});


function generateJSON() {
    const nombre = document.getElementById("nombre").value;
    const text = document.getElementById("text").value;
    const data = document.getElementById("data").value;
    const bss = document.getElementById("bss").value;

    const jsonData = {
        nombre: nombre,
        text: text,
        data: data,
        bss: bss
    };

    const jsonString = JSON.stringify(jsonData, null, 2);

    const blob = new Blob([jsonString], { type: "application/json" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = nombre + ".json";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
}