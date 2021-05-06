var texto = document.getElementById("Respuesta");
var boton = document.getElementById("elclicka");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("lienzo");
var ancho = d.width;
var pintura = d.getContext("2d");





function dibujaso(color, xinicio, yinicio, xfinal, yfinal){
    pintura.beginPath();
    pintura.strokeStyle = color;
    pintura.moveTo(xinicio, yinicio);
    pintura.lineTo(xfinal, yfinal);
    pintura.stroke();
    pintura.closePath();
}

function dibujoPorClick(){
    

    var l = 0;
    var lineas = parseInt(texto.value);
    var yi, xf;
    var pigmet = "#FAA";
    var espacio = ancho / lineas


    do{

        yi = espacio * l;
        xf = espacio * (l + 1);

        dibujaso(pigmet, 0, yi, xf, 300);
        l++; 

    }while(l < lineas);

    dibujaso(pigmet, 1, 1, 1, 299);
    dibujaso(pigmet, 1, 299, 299, 299);

}



