/** JUEGO DE LOS BARCOS
Se pide imprimir una matriz de 30x30 en la pantalla del ordenador en la que se
hayan guardado el conjunto de salida del juego de los barcos. Así, la matriz que se
dibuje deberá contener 1 barco que ocupe 4 posiciones, 2 de 3 posiciones, 3 de 2
posiciones y 4 de 1 posición, sin que se toquen entre sí. Cada posición de la matriz
que forma parte de un barco deberá contener una X y las posiciones vacías (agua)
contendrán un O.*/

let matAgua = [];
let matBarcos = [];
let matResult = [];
let barcos = [
    barcoL4 = [[12,20],4,true], // barcoLn = [[coordx,coordy],longitud,horiz(true/false)];
    barcoL3_1 = [[1,1],3,true],
    barcoL3_2 = [[2,1],3,true],
    barcoL2_1 = [[3,3],2,false],
    barcoL2_2 = [[4,16],2,false],
    barcoL2_3 = [[5,3],2,false],
    barcoL1_1 = [[25,15],1,true],
    barcoL1_2 = [[15,18],1,true],
    barcoL1_3 = [[20,15],1,true],
    barcoL1_4 = [[23,0],1,true]
];

function tableroAgua() {
    for (let i = 0; i < 30; i++) { //Crea hasta 30 filas de tablero
        matAgua[i] = [];
        for (let j = 0; j < 30; j++) { // las filas tienen 30 columnas
            matAgua[i][j] = 0;
        }
    }
}

function tableroBarcos() {
    matBarcos = matAgua;
    let contador = 0; //cuenta los barcos que quedan fuera del tablero si los hay.
    for (let i = 0; i < barcos.length; i++) {
        for (let j = 0; j < barcos[i][1]; j++) {
            let h;
            let v;
            if (barcos[i][2] == true) { //comprobamos si cada barco es horizontal o vertical
                h = j;
                v = 0;
            } else {
                h = 0;
                v = j;
            }
            //comprobamos que no se salen los barcos del tablero
            if (barcos[i][0][0] + v >= 30 || barcos[i][0][1] + h >= 30) {
                contador = contador+1;
                alert( "Error: hay " + contador + "barcos fuera del tablero, revisa las coordenadas");
                break;
            }
            //comprobamos que no se solapan los barcos
            if (matBarcos[barcos[i][0][0] + v][barcos[i][0][1] + h] == "X") {
                alert("Los barcos se solapan, introduce otras coordenadas");
                break;
            } else {
                matBarcos[barcos[i][0][0] + v][barcos[i][0][1] + h] = "X";
            }
        }
    }
}

function tableroResult() {
    for (let i = 0; i < matAgua.length; i++) {
        matResult[i] = [];
        for (let j = 0; j < matAgua.length; j++) { // las filas tienen 30 columnas          
            if (matBarcos[i][j] != 0) {
                matResult[i][j] = matBarcos[i][j];
            } else {
                matResult[i][j] = 0;
            }
            document.write(matResult[i][j] + " ");
        }
        document.write("<br />");
    }
}
tableroAgua();
tableroBarcos();
tableroResult();
// console.log(matResult); //activar para comprobar por consola matResult
