require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.log('********************************'.green);
        console.log('Seleccione una Opcion'.green);
        console.log('********************************\n'.green);

        console.log(`${ '1.'.green} Crear Tarea`);
        console.log(`${ '2.'.green} Listar Tarea(s)`);
        console.log(`${ '3.'.green} Listar Tareas Completadas`);
        console.log(`${ '4.'.green} Listar Tareas Pendientes`);
        console.log(`${ '5.'.green} Completar Tareas Pendientes`);
        console.log(`${ '6.'.green} Borrar Tarea(s)`);
        console.log(`${ '0.'.green} Salir\n`);  
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opcion: ', (opt) =>{
            readLine.close();
            resolve(opt);
        });

    });

}


const pause = () => {

    return new Promise((resolve) => {
        
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) =>{
            readLine.close();
            resolve(opt);
        });
    });
    
}


module.exports = {
    mostrarMenu,
    pause
}

