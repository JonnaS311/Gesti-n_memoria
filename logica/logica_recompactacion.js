// Asignamos una memoria total de 16MiB
const RAM = 16777216

// nombre-proceso | inicio_mem | final_mem
let tabla = []
let procesos_cargados = []

// cargamos el sistema operativo en la RAM
let sistema_operativo = 1048575
tabla.push(['SO',0, sistema_operativo])


function dinamica(programas) {
    let nombres_procesos = Object.keys(programas)
    let aux_procesos_car = procesos_cargados.slice()
    //verificamos si el proceso ya no está cargado
    for(k = 0; k < procesos_cargados.length;k++){
        if(!nombres_procesos.includes(procesos_cargados[k])){
                let proceso_eliminar = procesos_cargados[k]
                let longitud = tabla.length
                for(i = 0; i<longitud;i++){
                    try {
                        let aux_fila = tabla[i][0]
                        if( aux_fila== proceso_eliminar){
                            // eliminamos el proceso de la tabla y de la lista de procesos cargados
                            tabla.splice(i,1)
                            aux_procesos_car = aux_procesos_car.filter((element) => element !== proceso_eliminar);
                            // se hace la recompactación
                            // definimos el tamaño del limite o espacio de memoria libre que quedó
                            let limite = (tabla[i][1]-tabla[i-1][2])
                            for (let j = i; j < tabla.length; j++) {
                                // iteramos desde el elemento que actual en adelante para ajustar los limites
                                tabla[j][1] = tabla[j][1] - limite + 1
                                tabla[j][2] = tabla[j][2] - limite + 1 
                            }  
                            
                        }
                    } catch (error) {
                        // IGNORAR
                    }
                }
                
            }
    }
    procesos_cargados = aux_procesos_car

    // carga de procesos
    for (let i = 0; i < nombres_procesos.length; i++) {
        if (!procesos_cargados.includes(nombres_procesos[i])) {
            for(j = 0; j<tabla.length; j++){
                let posicion_inicial = tabla[j][2]

                // añadimos a final de la pila si no sobre pasa la el tamaño de la pila
                if(j+1 == tabla.length && posicion_inicial+programas[nombres_procesos[i]] < RAM){
                    // cargamos un proceso en la parte más alta de la memoria 
                    tabla.push([nombres_procesos[i],posicion_inicial+1,posicion_inicial+programas[nombres_procesos[i]]])
                    procesos_cargados.push(nombres_procesos[i])
                    break
                }   
            }
        }
    }
    let aux_tabla = Array.from(tabla)
    aux_tabla.push([undefined,tabla[tabla.length-1][2]+1,RAM-1])
    return aux_tabla
}


// Test

/*let pro = {'p4':436201, 'p8':2696608}
dinamica(pro)
pro = {'p4':224649, 'p8':2696608,'p3':309150}
dinamica(pro)   
pro = {'p5':209462}
dinamica(pro)
pro = {'p4':436201,'p2':286708,'p6':3996608,'p8':2696608,'p5':209462}
dinamica(pro)
pro = {'p1':224649,'p3':309150,'p6':3996608,'p8':2696608}
dinamica(pro)
pro = {'p3':309150,'p7':1785608,'p2':286708,'p6':3996608,'p5':209462,'p4':436201}
console.log(dinamica(pro))
/*let pro = {'p4':16777216, 'p8':2696608}
dinamica(pro)
console.log(procesos_cargados)*/
