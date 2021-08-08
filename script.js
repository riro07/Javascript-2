
////////////////////////////----------------- POO -----------------//////////////////////////////
/*
////////////////////////////////////////// PROTOTIPOS //////////////////////////////////////////

// Platon = Las cosas son la representacion fisica en el mundo tangible de lo que pensamos.

// Clases - Modelo a seguir.
// Objetos - Es una instacia de una clase.
// Atributos - Es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
// Metodos - Son las acciones que un objeto puede realizar (son funciones dentro de un objeto)

// Objeto literal

const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log("Hago sonidos por que estoy vivo");
    }
}

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hago sonidos por que estoy vivo");
    }
}
console.log(animal);
console.log(animal2);


//Funcion constructora = tienen que colgar del objeto this para formar parte del constructor
// Constructor animal. Conviene usar constructores, para no estar copipasteando codigo a 
// cada rato, imaginate copipastear codigo por mil personajes.

function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;

    this.sonar = function(){
        console.log("Hago sonidos por que estoy vivo");
    }

    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

//Funcion constructora donde asignamos los metodos al prototipo, no a la funcion como tal
// Atributos
function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;

}
// Métodos dentro del prototipo de la funcion animal
Animal.prototype.sonar = function(){
    console.log("Hago sonidos por que estoy vivo");
};

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
};

///////////////////////////////////// Herencia prototipica /////////////////////////////////////

function Perro (nombre, genero, tamanio){
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

//Perro esta heredando de animal: sus funciones.
Perro.prototype = new Animal();
// De esta forma crea su propio constructor perro heredando de animal, eso quiere decir que se va a poder 
// usar como molde
Perro.prototype.constructor = Perro;
//Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function (){
    console.log("Soy un perro y mi sonido son ladridos");
}
// Nuevo metodo dentro de Prototipo perro
Perro.prototype.ladrar = function(){
    console.log("Guauu Guauuu");
}

const SNOOPY = new Perro("Snoopy", "Macho", "Mediano"),
LolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(SNOOPY);
SNOOPY.sonar();
SNOOPY.saludar();
SNOOPY.ladrar();
console.log(LolaBunny);
LolaBunny.sonar();
LolaBunny.saludar();

function Perrito (nombre, genero, tamanio, edad){
    this.super = Perro;
    this.super(nombre, genero, tamanio);
    this.edad = edad;
}

const perritoc = new Perrito("perrito","perrito","perrito","perrito");

console.log(perritoc);

//console.log("--------------------------------------------------------------------")

//Ejemplo pedorro propio ejemplo ejercicio
function Zapatilla(talle, tipocalidad){
    this.talle = talle;
    this.tipocalidad = tipocalidad;
}


Zapatilla.prototype.luces = function(){
    console.log("Cuando camina ahora hace luces");
}

const MIZAPA = new Zapatilla ("40", "Cuero");
console.log(MIZAPA);
MIZAPA.luces();

function Marca (talle, tipocalidad, marca, color){
    this.super = Zapatilla;
    this.super(talle, tipocalidad);
    this.marca = marca;
    this.color = color;
}

Marca.prototype = new Zapatilla();
Marca.prototype.constructor = Marca;

Marca.prototype.luces = function (){
    console.log("Ahora hace luces en molde Marca");
}

const ADIDAS = new Marca(40, "Deportivas", "Adidas", "Verdes");
console.log(ADIDAS);
ADIDAS.luces();

function Plantillas (talle, talleplantilla){
    
    this.super(talle);

    this.talleplantilla = talleplantilla;

}

Plantillas.prototype = new Marca;
Plantillas.prototype.constructor = Plantillas;

const PLANTILLA = new Plantillas(40, 40);

console.log(PLANTILLA);

console.log("--------------------------------------------------------------------")

function Vehiculo(tiporuedas, cantidadpuertas, tipoauto){
    this.tiporuedas = tiporuedas;
    this.cantidadpuertas = cantidadpuertas;
    this.tipoauto = tipoauto;
};

Vehiculo.prototype.encender = function (){
    console.log("El auto esta encendido");
};
 
Vehiculo.prototype.alarma = function (){
    console.log("Alarma activada");
};

const AUTO = new Vehiculo("Acme", 2, "Carrera");

console.log(AUTO);
AUTO.alarma();
AUTO.encender();

function Auto (marca, modelo, tiporuedas, cantidadpuertas, tipoauto){
    this.marca = marca;
    this.modelo = modelo;
    this.super = Vehiculo;
    this.super(tiporuedas, cantidadpuertas, tipoauto);
}

Auto.prototype = new Vehiculo();
Auto.prototype.constructor = Auto;

Auto.prototype.rugir = function (){
    console.log("RUMMMMMM RUUMMMMMMMM");
}

const FERRARI = new Auto("Ferrari", "V3", "Ferrari", 2, "Deportivo");

console.log(FERRARI);
FERRARI.encender();
FERRARI.rugir();

console.log("---------------------------------------------------------------------")

//Aporte amigo de facebook

function Parent (x, y){
    this.x = x;
    this.y = y;
}

Parent.prototype.getX = function (){
    return console.log(this.x);
}

Parent.prototype.getY = function (){
    return this.y;
}

function Child(x, z){
    Parent.call(
        this,
        x
    );
    this.z = z;
}

Child.prototype = Object.create(Parent.prototype);
Child.constructor = Child;
Child.prototype.getZ = function (){
    return this.z;
}

const JE = new Parent("hola", "mundo");
console.log(JE);
JE.getX();

const JA = new Child("HOLA", "MUNDO");
console.log(JA);





    // EJEMPLO

function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;

    this.sonar = function(){
        console.log("Hago sonidos por que estoy vivo");
    }

    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

///////////////////////////////////////// Clases y herencia ///////////////////////////////////////

class Animal{
    // El constructor es un metodo especial que se ejecuta al momento de instanciar la clase
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;       
    }

    // Aca los metodos se pueden definir como se hacia con los literales
    sonar(){
        console.log("Hago sonidos por que estoy vivo");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

const PERRO = new Animal("Titan", "Macho");
console.log(PERRO);
PERRO.sonar();
PERRO.saludar();


class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        // con el método super() se manda a llamar al constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    };

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    };

    ladrar(){
        console.log("GUAUUUU GUAUUUUU");
    };

    // Un metodo estático es aquel que se puede ejecutar sin necesidad de instanciar la clase
    static queEres(){
        console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.")
    };

    //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores
    //de atributos de nuestra clase
    get getRaza(){ 
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
};


const TITAN = new Perro("TITAN", "Macho", "Grande");
console.log(TITAN);
TITAN.sonar();
TITAN.ladrar();
TITAN.saludar();

Perro.queEres();
console.log(TITAN.getRaza);
TITAN.setRaza = "Ovejero Aleman";
console.log(TITAN.getRaza);


////////////////////////////// Métodos estáticos, getters y setters //////////////////////////////


console.log("---------------------------------------------------------------------")

// Ejemplos

class Humano{
    constructor(genero, estatura, edad){
        this.genero = genero;
        this.estatura = estatura;
        this.edad = edad;
        this.nacionalidad = null;
    }

    respirar(){
        console.log("Activada funcion respirar");
    };
    pensar(){
        console.log("Activada funcion pensar");
    };
    amar(){
        console.log("Ahora ama");
    };

    static trabajar(){
        console.log("Voy a trabajar y cumplir 'tal' tarea")
    };

    get getNacionalidad(){
        return this.nacionalidad;
    };

    set setNacionalidad(nacionalidad){
        this.nacionalidad = nacionalidad;
    };
}

const SERHUMANO = new Humano("Masculino", 1.68, 24);
console.log(SERHUMANO);
console.log(SERHUMANO.getNacionalidad);
SERHUMANO.setNacionalidad = "Argentino";
console.log(SERHUMANO.getNacionalidad);
console.log(SERHUMANO);

console.log("---------------------------------------------------------------")

class Masculino extends Humano{
    constructor(nombre, genero, estatura, edad){
        super(genero, estatura, edad);
        this.nombre = nombre;
    }

    amar(a="vivir"){
        console.log(`${this.nombre} ahora ama ${a}`);
    }
}

const GABRIEL = new Masculino("Gabriel", "Masculino", 1.68, 24);
console.log(GABRIEL);
GABRIEL.amar();
console.log(GABRIEL.getNacionalidad);
GABRIEL.setNacionalidad = "Argentino";
console.log(GABRIEL.getNacionalidad);
GABRIEL.amar("comer");
*/
/*
console.log("---------------------------------------------------------------------")

class Calculadora{
    constructor(x, y, c){
        this.x = x;
        this.y = y;
        this.c = c;
    }
    
    sumar(){
        let resultado = this.x + this.y + this.c;
        return console.log(`${this.x} + ${this.y} + ${this.c} = ${resultado}`);
    }

    resta(){
        let resultado = this.x - this.y - this.c;
        return console.log(`${this.x} - ${this.y} - ${this.c} = ${resultado}`);
    }

    multiplicacion(){
        let resultado = this.x * this.y * this.c;
        return console.log(`${this.x} * ${this.y} * ${this.c} = ${resultado}`);
    }

    divicion(){
        let resultado = this.x / this.y / this.c;
        return console.log(`${this.x} / ${this.y} / ${this.c} = ${resultado}`);
    }

    static queHace(){
        console.log("Resuelve las 4 operaciones basicas: suma, resta, multiplicación, divición.");
    }
}

function validacionDato (){

    let valor = prompt("Coloca un numero: ");

    while (isNaN(valor) || valor == undefined) {
        valor = prompt("Por favor coloca un numero: ")
    }

    return valor;
}


//console.log(isNaN(3));
//false


const calculos = new Calculadora(
  parseInt(validacionDato())
, parseInt(validacionDato())
, parseInt(validacionDato())
);

Calculadora.queHace();
console.log(calculos);
calculos.sumar();
calculos.resta();
calculos.multiplicacion();
calculos.divicion();


console.log("--------------------------------------------------------------------")

if(isNaN){
    prompt("Por favor coloca un numero: ");
}else{
    continue;
}

console.log(isNaN("hola"));


class Animales {
    constructor(tipoAnimal, genero){
        this.tipoAnimal = tipoAnimal;
        this.genero = genero;
        this.tamanio = null;
    }

    get getTamanio(){
        return this.tamanio;
    }
    
    set setTamanio(x){
        this.tamanio = x;
    }

    vivir(){
        console.log("Abre los ojos..")
    }

    caminar(){
        console.log(`El ${this.tipoAnimal} comenzó a caminar`);
    };

    static queHace(){
        console.log("Esta class crea un animal solo definiendo 2 condiciones: tipoAnimal y genero.")
    }
}

Animales.queHace();

const GATO = new Animales("Gato", "Hembra");

console.log(GATO);
GATO.vivir();
GATO.caminar();
console.log(GATO.getTamanio);
GATO.setTamanio = "Mediano";
console.log(GATO.getTamanio);

class Aracnidos extends Animales{
    constructor(tipoAnimal, genero, veneno){
        super(tipoAnimal, genero);
        this.veneno = veneno;
    }

}

const TARANTULA = new Aracnidos ("Tarantula", "Hembra", "No peligroso");
TARANTULA.setTamanio = "Grande";

console.table(TARANTULA);

console.log(document);
console.dir(document)


document.body.addEventListener("dblclick", ()=>console.log("Hola addeventlistener!!"));

console.log("ejemplo");
*/

console.log(console);