function irA(id){

document.getElementById(id).scrollIntoView({

behavior:"smooth"

});

}



function calcular(){


let distancia =
Number(document.getElementById("distancia").value);


let tiempo =
Number(document.getElementById("tiempo").value);



if(tiempo>0){


let velocidad = distancia / tiempo;


document.getElementById("resultado").innerHTML =

"✅ La velocidad es: " + velocidad + " unidades/s";


}

else{


document.getElementById("resultado").innerHTML =

"⚠️ Ingresa valores correctos";


}


}