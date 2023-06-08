function notas(){

    let nameUno =document.getElementById("name");

    let lista=document.getElementById("listaUno");

    let nombre = document.getElementById("t1").value;
    console.log(nombre);
    inicio:
    if (nombre=="Jonathan"){
        alert("Hola Mundo");
        console.log(nombre);
        nameUno.textContent=nombre;
        // document.write("<p>Las notas de: "+nombre);
        let miArray = [10, 5, 6];
        for(let cal of miArray){

            let itemLista = document.createElement("li");

            itemLista.innerText= cal;
    
            lista.appendChild(itemLista);  
            // document.write("<p> "+cal+" </p>");

            if(cal<6){

                console.log(cal);
                console.log("Reprobada")

            }else{
                console.log(cal);
                console.log("Aprobada");
                continue;
            }
        }
    }else if(nombre=="Carlos") {
        alert("Hola Mundo");
        console.log(nombre);
        let miArray = [8, 9, 4];
        nameUno.textContent=nombre;
        for(let cal of miArray){

            let itemLista = document.createElement("li");

            itemLista.innerText= cal;
    
            lista.appendChild(itemLista);  

            if(cal<6){

                console.log(cal);
                console.log("Reprobada")

            }else{
                console.log(cal);
                console.log("Aprobada");
                continue;
            }
        }
    }else{
        alert("ingrese un nombre correcto");
        nombre.value="";
    }
    
}
function recargar(){
    location.reload();
}