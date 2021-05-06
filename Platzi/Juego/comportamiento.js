var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}

var vp = document.getElementById("VillaPlatzi");
var papel = vp.getContext("2d");
vp.addEventListener("keydown", movimiento);
var mapa = "imagenes/tile.jpg";


var vaca = {

    url: "imagenes/vaca.png",
    cargaOK: false
 
};

var cerdo = {

    url: "imagenes/cerdo.png",
    cargaOK: false

};
var pollo = {

    url: "imagenes/pollo.png",
    cargaOK: false

};

var fondo = {

    url: "imagenes/tile.jpg",
    cargaOK: false

}
var lobo = {

    url: "imagenes/lobo.png",
    cargaOK: false

}

var cantidad = aleatorio(2, 8);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", CargarFondo);


cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", CargarCerdo);


vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", CargarVaca);


pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", CargarPollo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", CargarLobo);

function asignar(){
    var x = aleatorio(0, 420);
    var y = aleatorio(0, 420);
}

function CargarFondo(){

    fondo.cargaOK = true;
    dibujar();

}

function CargarLobo(){

    lobo.cargaOK = true;
    dibujar();

}


function CargarVaca(){

    vaca.cargaOK = true;
    dibujar();

}


function CargarPollo(){

    pollo.cargaOK = true;
    dibujar();

}


function CargarCerdo(){

    cerdo.cargaOK = true;
    dibujar();

}

function dibujar(){

    if (fondo.cargaOK == true) {
        
        papel.drawImage(fondo.imagen, 0, 0);

    }
     
    if (vaca.cargaOK == true) {
        
        for(v = 0; v < cantidad; v++){

            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);

        }

    }

    if (cerdo.cargaOK == true) {
        for(v = 0; v < cantidad; v++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    
    if (pollo.cargaOK == true) {
        for(v = 0; v < cantidad; v++){

            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    if (lobo.cargaOK){
        
        papel.drawImage(lobo.imagen,x,y);
        movimiento()
        console.log(movimiento)

    }
}


function aleatorio(min, max){

    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;

}

function dibujaso(xinicio, yinicio, xfinal, yfinal ){
    papel.beginPath();
    papel.moveTo(xinicio, yinicio);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
    
}

function movimiento (evento){

        switch (evento.KeyCode) {
            case teclas.UP:
                dibujaso(x,y,x, y - 10);
                y = y -10;
                
                break;
        
            default:
                break;
        }

}