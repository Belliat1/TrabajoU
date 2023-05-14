// Definir una variable numérica
let edad = 25;

// Definir una variable de texto
let nombre = "Juan";

// Definir una variable booleana
let esMayorDeEdad = true;

// Numéricos
let edad = 25;
let precio = 12.50;

// De texto
let nombre = "Juan";
let apellido = 'Pérez';

// Booleanos
let esMayorDeEdad = true;
let tieneDescuento = false;

// Undefined
let valorIndefinido;

// Null
let valorNulo = null;

// Objetos
let persona = { nombre: "Juan", edad: 25 };

// Arrays
let numeros = [1, 2, 3];
let nombres = ["Juan", "Pedro", "María"];

// Crear un array
let numeros = [1, 2, 3, 4, 5];

// Acceder a un elemento del array
let primerNumero = numeros[0]; // primerNumero = 1

// Agregar un elemento al final del array
numeros.push(6); // ahora el array tiene [1, 2, 3, 4, 5, 6]

// Eliminar el último elemento del array
numeros.pop(); // ahora el array tiene [1, 2, 3, 4, 5]

// Agregar un elemento al principio del array
numeros.unshift(0); // ahora el array tiene [0, 1, 2, 3, 4, 5]

// Eliminar el primer elemento del array
numeros.shift(); // ahora el array tiene [1, 2, 3, 4, 5]

// Obtener el número de elementos del array
let cantidad = numeros.length; // cantidad = 5

// Operadores de comparación
let numero1 = 10;
let numero2 = 5;

let esMayor = numero1 > numero2; // esMayor = true
let esMenor = numero1 < numero2; // esMenor = false
let esIgual = numero1 == numero2; // esIgual = false
let noEsIgual = numero1 != numero2; // noEsIgual = true

// Operadores lógicos
let esVerdadero = true;
let esFalso = false;

let yLogico = esVerdadero && esFalso; // yLogico = false
let oLogico = esVerdadero || esFalso; // oLogico = true
let negacion = !esVerdadero; // negacion = false

// Operadores aritméticos
let numero1 = 10;
let numero2 = 5;

let suma = numero1 + numero2; // suma = 15
let resta = numero1 - numero2; // resta = 5
let multiplicacion = numero1 * numero2; // multiplicacion = 50
let division = numero1 / numero2; // division = 2

// Operadores de asignación
let resultado = 0;
resultado += 10; // resultado = 10
resultado -= 5; // resultado = 5
resultado *= 2; // resultado = 10
resultado /= 2; // resultado = 5

// Operadores de comparación
let esMayor = numero1 > numero2; // esMayor = true
// Operadores de comparación
let numero1 = 10;
let numero2 = 5;

let esMayor = numero1 > numero2; // esMayor = true
let esMenor = numero1 < numero2; // esMenor = false
let esIgual = numero1 == numero2; // esIgual = false
let noEsIgual = numero1 != numero2; // noEsIgual = true

// Operadores lógicos
let esVerdadero = true;
let esFalso = false;

let yLogico = esVerdadero && esFalso; // yLogico = false
let oLogico = esVerdadero || esFalso; // oLogico = true
let negacion = !esVerdadero; // negacion = false

// Declaración de una función
function sumar(numero1, numero2) {
    return numero1 + numero2;
  }
  
  // Llamado de una función
  let resultado = sumar(10, 5); // resultado = 15
  
  // Propiedad length
  let texto = "Hola";
  let cantidad = texto.length; // cantidad = 4
  
  // Método toUpperCase
  let texto2 = "hola";
  let textoEnMayusculas = texto2.toUpperCase(); // textoEnMayusculas = "HOLA"

  // forEach
let numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
  console.log(numero);
});

// map
let numerosDobles = numeros.map(function(numero) {
  return numero * 2;
});

// filter
let numerosPares = numeros.filter(function(numero) {
  return numero % 2 == 0;
});

// reduce
let suma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

// find
let numeroEncontrado = numeros.find(function(numero) {
  return numero == 3;
});

// some
let hayNumerosNegativos = numeros.some(function(numero) {
  return numero < 0;
});

// every
let sonTodosPositivos = numeros.every(function(numero) {
  return numero > 0;
});

// indexOf
let indiceDelNumeroTres = numeros.indexOf(3);

// splice
numeros.splice(2, 2); // elimina los elementos en los índices 2 y 3

// slice
let numerosCopia = numeros.slice(); // crea una copia del array

// Manejo de eventos con addEventListener
let boton = document.querySelector("#boton");
boton.addEventListener("click", function(evento) {
  console.log("Se hizo clic en el botón");
});

// Detener la propagación de un evento
let contenedor = document.querySelector("#contenedor");
contenedor.addEventListener("click", function(evento) {
  console.log("Se hizo clic en el contenedor");
  evento.stopPropagation();
});

// Declaración de un objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
  };
  
  // Acceso a las propiedades de un objeto
  let nombreDePersona = persona.nombre;
  let edadDePersona = persona["edad"];
  
  // Llamado de un método de un objeto
  persona.saludar();

  // Selección de elementos con querySelector
let parrafo = document.querySelector("p");

// Selección de elementos con getElementById
let titulo = document.getElementById("titulo");

// Modificación del contenido de un elemento
parrafo.textContent = "Este es un nuevo texto";
titulo.innerHTML = "<strong>Este es un título en negrita</strong>";

// Declaración de una clase
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    
    saludar() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
  }
  
  // Creación de un objeto de la clase Persona
  let persona1 = new Persona("Juan", 30);
  
  // Acceso a las propiedades de un objeto de la clase Persona
  let nombreDePersona = persona1.nombre;
  let edadDePersona = persona1.edad;
  
  // Llamado de un método de un objeto de la clase Persona
  persona1.saludar();

  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    
    static especie = "humano";
    
    saludar() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
  }
  
  // Acceso a una propiedad estática de la clase Persona
  let especieDePersona = Persona.especie; // especieDePersona = "humano"

  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    
    saludar() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
  }
  
  // Declaración de un método prototipo de la clase Persona
  Persona.prototype.caminar = function() {
    console.log(this.nombre + " está caminando");
  }
  
  // Llamado de un método prototipo de la clase Persona
  let persona1 = new Persona("Juan", 30);
  persona1.caminar();

  
  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    
    static especie = "humano";
    
    saludar() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
    
    static saludarATodos(personas) {
      personas.forEach(function(persona) {
        console.log("Hola, " + persona.nombre);
      });
    }
  }
  
  //
  
