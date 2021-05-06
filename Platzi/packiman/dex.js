var imagenes = [];

imagenes["Cauchin"] = "imagenes/vaca.png";
imagenes["Pokacho"] = "imagenes/pollo.png";
imagenes["Vacacho"] = "imagenes/cerdo.png";

var coleccion = [];
coleccion.push(new packimane("Cauchin", 100, 30));
coleccion.push(new packimane("Pokacho", 80, 60));
coleccion.push(new packimane("Vacacho", 40, 40));

for(var atr of coleccion){
    atr.mostrar();
}