const particiones = JSON.parse(localStorage.getItem('tablaVisual'))

const tablaParticiones = document.getElementById('tabla-particiones')

// Función para crear una fila de la tabla
function crearFila(particion) {
  const tr = document.createElement('tr');
  const tdNombre = document.createElement('td');
  const tdLo = document.createElement('td');
  const tdBaseDec = document.createElement('td');
  const tdBaseHex = document.createElement('td');

  tdNombre.textContent = particion[0];
  tdLo.textContent = particion[1];
  tdBaseDec.textContent = particion[2];
  tdBaseHex.textContent = particion[3];

  tr.appendChild(tdNombre);
  tr.appendChild(tdLo);
  tr.appendChild(tdBaseDec);
  tr.appendChild(tdBaseHex);

  return tr;
}

// Crear la tabla
const thead = document.createElement('thead');
const trEncabezado = document.createElement('tr');
const thNombre = document.createElement('th');
const thdLo = document.createElement('th');
const thBaseDec = document.createElement('th');
const thdBaseHex = document.createElement('th');

thNombre.textContent = 'Nombre';
thdLo.textContent = 'L/0';
thBaseDec.textContent = 'DEC';
thdBaseHex.textContent = 'HEX';

trEncabezado.appendChild(thNombre);
trEncabezado.appendChild(thdLo);
trEncabezado.appendChild(thBaseDec);
trEncabezado.appendChild(thdBaseHex);

thead.appendChild(trEncabezado);

const tbody = document.createElement('tbody');

window.addEventListener('storage', function (event) {
  if (event.key === 'tablaVisual') {
    // Borrar 
    tbody.innerHTML = '';

    // Actualizar el valor de particiones
    const nuevasParticiones = JSON.parse(localStorage.getItem('tablaVisual'));

    // Agregar filas a la tabla
    for (const particion of nuevasParticiones) {
      const fila = crearFila(particion);
      tbody.appendChild(fila);
    }
  }
});

// Agregar filas a la tabla
for (const particion of particiones) {
  const fila = crearFila(particion);
  tbody.appendChild(fila);
}

tablaParticiones.appendChild(thead);
tablaParticiones.appendChild(tbody);
