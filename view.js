// En view.js no se imprimira nada, solo se retornara (Funcional)

const figlet = require('figlet')
const chalk = require('chalk')

// --------------------------------- Titulo --------------------------------- //

function showTitle(){
    return (
        chalk.blueBright(
            figlet.textSync(
                'Convert_App!',
            {
                horizontalLayout: 'full',
                font: 'ANSI Shadow'
            }
            )
        )
    )
}

function showTable(leftValeu, leftUnit, rightValeu, rightUnit){
    // Esta parte la hice simplemente para que en la tablase vea la palabra 
    // completa (Farenheit, Celsuis, Kelvin) y no solo la letra (F,C,K) 
    if (leftUnit === 'F'){
        var leftUnit = 'Farenheit'
    }
    if (leftUnit === 'C'){
        var leftUnit = 'Celsius'
    }
    if (leftUnit === 'K'){
        var leftUnit = 'Kelvin'
    }
    if (rightUnit === 'F'){
        var rightUnit = 'Farenheit'
    }
    if (rightUnit === 'c'){
        var rightUnit = 'Celsius'
    }
    if (rightUnit === 'K'){
        var rightUnit = 'Kelvin'
    }
    return [
        {LeftValeu: leftValeu, LeftUnit: leftUnit, RightValeu: rightValeu, RightUnit: rightUnit}
    ]  
}

// Para que app.js pueda leer la funciones de view.js, es necesario exportarlas:

module.exports = {
    showTable,
    showTitle,
}