function cuentaRegresiva(num){
    for(let i=num; i>=0; i--){
        console.log(i);
        if (i===0){
            console.log('¡Despegamos!');
        }
    }
}

cuentaRegresiva(10);