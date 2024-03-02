// Asignamos una memoria total de 16MiB
const RAM = 16777216

const espacio_particionado = 1048576

// nombre-proceso | inicio_mem | final_mem
let tabla = []
let procesos_cargados = []

// cargamos el sistema operativo en la RAM
let sistema_operativo = 1048575
tabla.push(['SO',0, sistema_operativo])



function estaticas_fija(programas) {
    let nombres_procesos = Object.keys(programas)
    let aux_procesos_car = procesos_cargados.slice()
    //verificamos si el proceso ya no está cargado
    for(k = 0; k < procesos_cargados.length;k++){
        if(!nombres_procesos.includes(procesos_cargados[k])){
                let proceso_eliminar = procesos_cargados[k]
                for(i = 0; i<tabla.length;i++){
                    if(tabla[i][0] == proceso_eliminar){
                        // eliminamos el proceso de la tabla y de la lista de procesos cargados
                        tabla[i][0] = undefined
                        aux_procesos_car = aux_procesos_car.filter((element) => element !== proceso_eliminar);
                        break
                    }
                }
                
            }
    }
    procesos_cargados = aux_procesos_car

    //cargar procesos
    for(i = 0; i< nombres_procesos.length; i++){
            // validamos que el proceso no ocupe más memoria de la permitida por la partición
            // validamos que el proceso no este ya cargado en memoria
            // TO-DO: Falta validar que la memoria no este aun llena
            if(programas[nombres_procesos[i]]<= 1048576 && !procesos_cargados.includes(nombres_procesos[i])){
                for(j = 0; j<tabla.length; j++){
                    /*
                        Recorremos cada elemento de la tabla para buscar si hay alguna partición disponible
                        en caso de que no lo haya se registra en una nueva posición de la tabla
                    */
                    let posicion_inicial = tabla[j][2] + 1
                    // añadimos el proceso en un espacio vacio 
                    if (tabla[j][0] === undefined){
                        tabla[j][0] = nombres_procesos[i]
                        procesos_cargados.push(nombres_procesos[i])
                        break
                    } // añadimos a final de la pila
                    else if(j+1 == tabla.length){
                        tabla.push([nombres_procesos[i],posicion_inicial,posicion_inicial+1048575])
                        procesos_cargados.push(nombres_procesos[i])
                        break
                    }
                }
            }
        
    }
}


// Test
let pro = {'p4':436201, 'p8':2696608}
estaticas_fija(pro)
pro = {'p4':224649, 'p8':2696608,'p3':309150}
estaticas_fija(pro)
pro = {'p5':209462}
estaticas_fija(pro)
pro = {'p4':436201,'p2':307200,'p5':209462,'p6':3996608,'p8':2696608}
estaticas_fija(pro)
pro = {'p3':309150,'p1':224649,'p6':3996608,'p8':2696608}
estaticas_fija(pro)
pro = {'p3':309150,'p2':307200,'p6':3996608,'p4':436201,'p5':209462,'p7':1785608}
estaticas_fija(pro)

console.log(tabla)