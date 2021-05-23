// Aqui se haran las actualizaciones de los datos (Funcional)
function rightValeuUpdate(leftValeu, leftUnit, rightUnit){
    if (leftUnit === rightUnit){
        return (leftValeu)
    }
    if (leftUnit === "C"){
        if (rightUnit === "F"){
            return ((parseFloat(leftValeu)*1.8)+32)
        }
    }
    if (leftUnit === "F"){
        if (rightUnit === "C"){
            return ((parseFloat(leftValeu)-32)/1.8)
        }
    }
    if (leftUnit === "C"){
        if (rightUnit === "K"){
            return (parseFloat(leftValeu) + 273.15)
        }
    }
    if (leftUnit === "K"){
        if (rightUnit === "C"){
            return (parseFloat(leftValeu) - 273.15)
        }
    }
    if (leftUnit === "F"){
        if (rightUnit === "K"){
            return (((parseFloat(leftValeu)-32)/1.8)+273.15)
        }
    }
    if (leftUnit === "K"){
        if (rightUnit === "F"){
           return ((((parseFloat(leftValeu)-273.15)*1.8)+32))
        }    
    }

}


// Para que app.js pueda leer la funciones de update.js, es necesario exportarlas:

module.exports = {
    rightValeuUpdate,
}