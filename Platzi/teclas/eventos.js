var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}


var papel = document.getElementById("Dibujo_teclado");
var pintura = papel.getContext("2d");
var x = 0;
var y = 0;



function dibujaso(color, xinicio, yinicio, xfinal, yfinal ){
    pintura.beginPath();
    pintura.strokeStyle = color;
    pintura.moveTo(xinicio, yinicio);
    pintura.lineTo(xfinal, yfinal);
    pintura.stroke();
    pintura.closePath();
    pintura.lineWidth = 3;
}


document.addEventListener("keyup", dibujarTeclado);
papel.addEventListener("click", dibujarTeclado);

function dibujarTeclado(evento){
    
    var color = "blue";
    var movimiento = 3;

    switch (evento.keyCode) {
        case teclas.UP: 
            dibujaso(color, x, y, x, y - movimiento);
            y = y - 3;
            break;
        case teclas.DOWN:
            dibujaso(color, x, y, x, y + movimiento);
            y = y + 3;
            break;
        case teclas.LEFT:
            dibujaso(color, x, y, x - movimiento, y);
            x = x - 3;
            break;
        case teclas.RIGHT:
            dibujaso(color, x, y, x + movimiento, y);
            x = x + 3;
            break;
        default:
            break;
    }

}