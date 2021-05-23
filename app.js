// Lo primero que hice fue instalar las librerias recomendadas
// en el enunciado. Para esto ejecute:
// npm init 
// npm install console-table-printer inquirer figlet chalk prompt-sync
// en el terminal (en la carpeta correspondiente)

// En app.js estara todo lo que es no funcional (estado de la aplicacion,
// while, inputs, etc) (No Funcional)

// Aqui defino los comandos de las librerias
const {printTable} = require('console-table-printer')
const input = require('prompt-sync')();

// Aca "me traigo" los archivos a app.js para poder usarlos
const {update} = require('./update')
const {view} = require('./view')

// Para poder usar las funciones de view.js, es necesario recibirlas
const {showTable} = require('./view')
const {showTitle} = require('./view')
// Para poder usar las funciones de update.js, es necesario recibirlas
const {rightValeuUpdate} = require('./update')


function app(leftValeu, leftUnit, rightValeu, rightUnit){
    // Para la vista:
    while (true){
        console.clear()
        console.log(showTitle())
        printTable(showTable(leftValeu, leftUnit, rightValeu, rightUnit))
        // Para la interaccion con el usuario (no funcional):
        var leftValeu = input("Left temperature valeu? (q for quit) ")
        // Para salir de la app (si se quiere)
        if (leftValeu === 'q'){
            console.clear() 
            break 
        }
        var leftUnit = input("Ingress left unit: (C, F, K, q for quit)")
        // Para salir de la app (si se quiere)
        if (leftUnit === 'q'){
            console.clear() 
            break 
        }
        var rightUnit = input("Ingress right unit: (C, F, K, q for quit) ")
        // Para salir de la app (si se quiere)
        if (rightUnit === 'q'){
            console.clear() 
            break 
        }
        // Actualizacion de la vista:
        var rightValeu = rightValeuUpdate(leftValeu, leftUnit, rightUnit)
    }
}


app(0,0,0,0)